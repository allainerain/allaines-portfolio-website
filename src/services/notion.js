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
export const getColumnItems = async (blogClient, id) => {
  try {
      let response = [];
      const columnListResponse = await getBlocks(blogClient, id);
      const columns = columnListResponse.value;
      console.log("columns in get col", columns);
      
      for (let column of columns) { 
          let columnObjects = [];
          
          const columnId = column?.id;
          console.log("one column", columnId);

          if (columnId) { 
              const columnResponse = await getBlocks(blogClient, columnId);
              const blocks = columnResponse.value;
              
              // get each item in the column
              for (let block of blocks) { 
                  columnObjects.push(block);
              }
          }
          response.push(columnObjects);
      }
      console.log("returning")
      return ok(response);
  } catch (error) {
    return err(error); // Proper error handling
  }
}


export const getTable = async (blogClient, id, width) => {
  try {
    // console.log("Getting children");
    // Get the children of the table
    const response = await getBlocks(blogClient, id);

    // console.log("Table children", response);
    
    if (response.isOk()) {
      // Process the information
      const entries = response.value.map((row) => {
        if (row.type === "table_row") {
          const cells = [];
          for (let i = 0; i < width; i++) {
            // Use optional chaining to safely access nested properties
            cells.push(row.table_row.cells?.[i]?.[0]?.plain_text || null);
          }
          return { cells };
        } else {
          return {
            cells: Array.from({ length: width }, () => null) // Fill cells with null values if it's not a table row
          };
        }
      });

      return ok(entries); // Return a successful result with the entries
    } else if (response.isErr()) {
      return err(response.error); // Return an error result with the response error
    } else {
      return err({ code: 500, message: "Unknown Error" }); // Return an error result with a generic error message
    }
  } catch (error) {
    return err(error); // Catch any unexpected errors and return an error result
  }
};
