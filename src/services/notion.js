import { Client, APIErrorCode, isNotionClientError, ClientErrorCode } from "@notionhq/client";
import { ok, err, Result } from 'neverthrow';

export const getDatabaseById = async (blogClient) => {
  try {
    const notion = blogClient.client;

    if (!notion) {
      return err({ code: 400, message: "Invalid or missing notion secret" });
    }

    const database = await notion.databases.query({
      database_id: blogClient.config.databaseId,
      filter: {
        property: "Published",
        checkbox: {
          "equals": true
        }
      }
    });

    const results = database.results;

    if (isPageObjectResponse(results) && results?.length > 0) {
      const result = results;
      return ok(result);
    } else {
      return ok([]);
    }
  } catch (error) {
    return handleNotionError(error);
  }
}

export const getPageBySlug = async (blogClient, slug) => {
  try {
    const notion = blogClient.client;

    if (!notion) {
      return err({ code: 400, message: "Invalid or missing notion secret" });
    }

    const res = await notion.databases.query({
      database_id: blogClient.config.databaseId,

      filter: {
        property: "Slug",
        rich_text: {
          equals: slug
        }
      }
    });

    let pages = [];

    if (res) {
      for (const page of res.results) {
        if (!isFullPage(page)) {
          continue;
        }

        pages.push(page);
      }

      return ok(pages);
    } else {
      return err({ code: 500, message: "Some error occurred" });
    }

  } catch (error) {
    return handleNotionError(error);
  }
}

export const getBlocks = async (client, blockId) => {
  // console.log("IN GET BLOCKS")
  const notion = client;

  if (!notion) {
    return err({ code: 400, message: "Invalid or missing notion secret" });
  }

  const { results } = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });

  // console.log("GOT BLOCKS")

  let blocks = [];

  if (results && results.length > 0) {
    // console.log("CONDITION 1")
    for (const block of results) {
    //   console.log("CONDITION 1 A")
    //   if (!isFullBlock(block)) continue;
    //   console.log("CONDITION 1 B")
      blocks.push(block);
    }
    return ok(blocks);
  } else if (results && results.length == 0) {
    return ok([]);
  } else {
    return err({ code: 500, message: "Unknown Error" })
  }
}

const handleNotionError = (error) => {
  if (isNotionClientError(error)) {
    switch (error.code) {
      case ClientErrorCode.RequestTimeout:
        return err({ code: 400, message: "Request could not be completed" });
      case APIErrorCode.ObjectNotFound:
        return err({ code: 500, message: "Database or page not found" });
      case APIErrorCode.Unauthorized:
        return err({ code: 401, message: "User not authorized" });
      default:
        return err({ code: 500, message: "Some error occurred" });
    }
  } else {
    return err({ code: 400, message: error ? Object.keys(error)?.length > 0 ? "" : "" : "Some error occurred" });
  }
}

function isPageObjectResponse(response) {
  return response?.[0]?.properties !== null && response?.[0]?.properties !== undefined;
}

export const getNotionUser = async (blogClient, userId) => {
  try {
    const notion = blogClient.client;

    if (!notion) {
      return err({ code: 400, message: "Invalid or missing notion secret" });
    }

    const response = await notion.users.retrieve({ user_id: userId });
    if (response) {
      return ok(response)
    } else {
      return err({ code: 500, message: "Some error occurred" });
    }
  } catch (error) {
    return handleNotionError(error);
  }
}

//this function returns an array of arrays of objects.
export const getColumnItems = async (blogClient, block) => {
  try {
    console.log("getting columns");
    const id =  block.id;

    let response = [];
    const columnListResponse = await getBlocks(blogClient, id);
    const columns = columnListResponse.value;

    for (let column of columns) {

        const columnId = column.id;
        const columnResponse = await getBlocks(blogClient, columnId);
        const blocks = columnResponse.value;

        let columnObjects = [];

        // Process each block in the column
        for (let block of blocks) {
          
          // If it's a callout, extract the children
          if (block.type === "table") {
            const tableResponse = await getTable(blogClient, block);
            if (tableResponse.isOk()) {
                columnObjects.push(tableResponse.value);
            } else if (response.isErr()) {
              return err(response.error); // Return an error result with the response error
            } else {
              return err({ code: 500, message: "Unknown Error" }); // Return an error result with a generic error message
            }
        } else if (block.type === "callout") {
            const calloutResponse = await getCalloutItems(blogClient, block);
            if (calloutResponse.isOk()) {
                columnObjects.push(calloutResponse.value);
            } else if (response.isErr()) {
              return err(response.error); // Return an error result with the response error
            } else {
              return err({ code: 500, message: "Unknown Error" }); // Return an error result with a generic error message
            }
          } else {
            columnObjects.push(block);
          }

        }
        response.push(columnObjects);
    }

    // Return the response array
    //create a column list object with the fields type and column 
    const columnListObject = {
      type: "column_list",
      columns: response
  };

    return ok(columnListObject);
  } catch (error) {
      // Proper error handling
      return err(error);
  }
};

//this function returns an array of arrays of objects.
export const getCalloutItems = async (blogClient, block) => {
  try {
    let children;
    // console.log("here1", block.has_children, block.callout.rich_text)
    console.log("inside callout");
    if(block.has_children == true){
      console.log("callout has children");
      const id = block.id;
      const calloutResponse = await getBlocks(blogClient, id);

      if(calloutResponse.isOk()){
        console.log("retrieved children");
        children = calloutResponse.value;
      }
      else if (response.isErr()) {
        return err(response.error); // Return an error result with the response error
      } else {
        return err({ code: 500, message: "Unknown Error" }); // Return an error result with a generic error message
      }

    } else{
      console.log("do nothing no children")
    }

    console.log("callout has outsite");
    const calloutListObject = {
      rich_text: block.callout.rich_text,
      icon: block.callout.icon,
      type: "callout",
      children: children
    };
    
    return ok(calloutListObject);

  } catch (error) {
    return err(error); // Proper error handling
  }
}

//gets the table from the block and returns a table object
//table object contains: type and rows
export const getTable = async (blogClient, block) => {
  try {
    const id =  block.id;
    const width = block.table.table_width;

    const response = await getBlocks(blogClient, id);
    
    if (response.isOk()) {

      const entries = response.value.map((row) => {
        if (row.type === "table_row") {
          const cells = [];
          for (let i = 0; i < width; i++) {
            cells.push(row.table_row.cells?.[i]?.[0]?.plain_text || null);
          }
          return { cells };
        } else {
          return {
            cells: Array.from({ length: width }, () => null) // Fill cells with null values if it's not a table row
          };
        }
      });

      //create a table object with fields type and rows
      const tableObject = {
        type: "table",
        rows: entries
      };
      return ok(tableObject); 

    } else if (response.isErr()) {
      return err(response.error); // Return an error result with the response error
    } else {
      return err({ code: 500, message: "Unknown Error" }); // Return an error result with a generic error message
    }
  } catch (error) {
    return err(error); // Catch any unexpected errors and return an error result
  }
};
