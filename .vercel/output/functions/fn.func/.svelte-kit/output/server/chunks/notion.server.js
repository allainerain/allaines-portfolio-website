import { Client } from "@notionhq/client";
import { err as err$1, ok } from "neverthrow";
const getBlocks = async (client, blockId) => {
  const notion2 = client;
  if (!notion2) {
    return err$1({ code: 400, message: "Invalid or missing notion secret" });
  }
  const { results } = await notion2.blocks.children.list({
    block_id: blockId,
    page_size: 50
  });
  let blocks = [];
  if (results && results.length > 0) {
    for (const block of results) {
      blocks.push(block);
    }
    return ok(blocks);
  } else if (results && results.length == 0) {
    return ok([]);
  } else {
    return err$1({ code: 500, message: "Unknown Error" });
  }
};
const getColumnItems = async (blogClient, block) => {
  try {
    const id = block.id;
    let response2 = [];
    const columnListResponse = await getBlocks(blogClient, id);
    const columns = columnListResponse.value;
    for (let column of columns) {
      const columnId = column.id;
      const columnResponse = await getBlocks(blogClient, columnId);
      const blocks = columnResponse.value;
      let columnObjects = [];
      for (let block2 of blocks) {
        if (block2.type === "table") {
          const tableResponse = await getTable(blogClient, block2);
          if (tableResponse.isOk()) {
            columnObjects.push(tableResponse.value);
          } else if (response2.isErr()) {
            return err$1(response2.error);
          } else {
            return err$1({ code: 500, message: "Unknown Error" });
          }
        } else if (block2.type === "callout") {
          const calloutResponse = await getCalloutItems(blogClient, block2);
          if (calloutResponse.isOk()) {
            columnObjects.push(calloutResponse.value);
          } else if (response2.isErr()) {
            return err$1(response2.error);
          } else {
            return err$1({ code: 500, message: "Unknown Error" });
          }
        } else {
          columnObjects.push(block2);
        }
      }
      response2.push(columnObjects);
    }
    const columnListObject = {
      type: "column_list",
      columns: response2
    };
    return ok(columnListObject);
  } catch (error) {
    return err$1(error);
  }
};
const getCalloutItems = async (blogClient, block) => {
  try {
    let children;
    if (block.has_children == true) {
      const id = block.id;
      const calloutResponse = await getBlocks(blogClient, id);
      if (calloutResponse.isOk()) {
        children = calloutResponse.value;
      } else if (response.isErr()) {
        return err$1(response.error);
      } else {
        return err$1({ code: 500, message: "Unknown Error" });
      }
    } else {
    }
    const calloutListObject = {
      rich_text: block.callout.rich_text,
      icon: block.callout.icon,
      type: "callout",
      children
    };
    return ok(calloutListObject);
  } catch (error) {
    return err$1(error);
  }
};
const getTable = async (blogClient, block) => {
  try {
    const id = block.id;
    const width = block.table.table_width;
    const response2 = await getBlocks(blogClient, id);
    if (response2.isOk()) {
      const entries = response2.value.map((row) => {
        if (row.type === "table_row") {
          const cells = [];
          for (let i = 0; i < width; i++) {
            cells.push(row.table_row.cells?.[i]?.[0]?.plain_text || null);
          }
          return { cells };
        } else {
          return {
            cells: Array.from({ length: width }, () => null)
            // Fill cells with null values if it's not a table row
          };
        }
      });
      const tableObject = {
        type: "table",
        rows: entries
      };
      return ok(tableObject);
    } else if (response2.isErr()) {
      return err$1(response2.error);
    } else {
      return err$1({ code: 500, message: "Unknown Error" });
    }
  } catch (error) {
    return err$1(error);
  }
};
const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;
async function getBlog() {
  try {
    const response2 = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true
        }
      }
    });
    return response2;
  } catch (error) {
    throw error;
  }
}
async function getPageBySlug(slug) {
  try {
    const response2 = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug
        }
      }
    });
    if (response2.results.length > 0) {
      const page = response2.results[0];
      const title = page.properties.Title.title[0].plain_text;
      const description = page.properties.Description.rich_text[0].plain_text;
      const cover = page.cover.external.url;
      const published = page.properties.Publish_Date.date.start;
      const author = page.properties.Authors.people[0];
      const category = page.properties.Category.select.name;
      if (!page?.id) {
        return {
          error: {
            code: 500,
            message: "Invalid or missing page!"
          }
        };
      }
      const blockResponse = await getBlocks(notion, page.id);
      if (blockResponse.isOk()) {
        let postBlocks = [];
        const blocks = blockResponse.value;
        for (let block of blocks) {
          if (block.type == "table") {
            const tableResponse = await getTable(notion, block);
            let tableObject;
            if (tableResponse.isOk()) {
              tableObject = tableResponse.value;
            }
            postBlocks.push(tableObject);
          } else if (block.type == "column_list") {
            let columnListObject;
            const columnResponse = await getColumnItems(notion, block);
            if (columnResponse.isOk()) {
              columnListObject = columnResponse.value;
            }
            postBlocks.push(columnListObject);
          } else if (block.type == "callout") {
            let calloutListObject;
            const calloutResponse = await getCalloutItems(notion, block);
            if (calloutResponse.isOk()) {
              calloutListObject = calloutResponse.value;
            }
            postBlocks.push(calloutListObject);
          } else {
            postBlocks.push(block);
          }
        }
        return {
          postBlocks,
          title,
          description,
          cover,
          slug,
          published,
          author,
          // rows,
          // columns,
          category
        };
      }
    } else {
      return err({ code: 500, message: "Some error occurred" });
    }
  } catch (error) {
    throw error;
  }
}
export {
  getPageBySlug as a,
  getBlog as g
};
