import { Client } from '@notionhq/client'

export const notion = new Client({ auth: process.env.NOTION_KEY})
const databaseId = process.env.NOTION_DATABASE_ID

import { getBlocks, getColumnItems, getTable } from './notion.js'

// console.log(process.env.NOTION_KEY)

export async function getBlog() {

    try{
        const response = await notion.databases.query({
			database_id: databaseId,
			filter: {
				property: "Published",
				checkbox: {
					equals: true,
				},
			},
		});

        // console.log("FROM SERVICE")
        return response
    }
    catch(error){
        throw error
    }

}

// This function is called to get the pages by the given slug
export async function getPageBySlug(slug) {

    try {
        //find the post by slug
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug
                }
            }
        });

        if(response.results.length>0){
            const page = response.results[0];
            const title = page.properties.Title.title[0].plain_text;
            const description = page.properties.Description.rich_text[0].plain_text;
            const cover = page.cover.external.url;
            const published = page.properties.Publish_Date.date.start
            const author = page.properties.Authors.people[0]
            const category = page.properties.Category.select.name
            
            if(!page?.id){
                return {
                    error: {
                        code: 500,
                        message: "Invalid or missing page!"
                    }
                }
            }
    
            //get the blocks of the post
            const blockResponse = await getBlocks(notion , page.id);
            
            if(blockResponse.isOk()){

                let postBlocks = []; //to store all of the blocks chronologically

                //get the blocks from the response
                const blocks = blockResponse.value;

                //for each block 
                for (let block of blocks){

                    //if it's a table, extract the row contents
                    if (block.type == "table"){
                        console.log("here at table");
                        
                        // extract the rows of the table
                        const TableId =  block.id;
                        const TableWidth = block.table.table_width;
                        const tableResponse =  await getTable(notion , TableId, TableWidth);
                        let tableRows = null;
                        
                        if(tableResponse.isOk()){
                            tableRows = tableResponse.value;
                        }
                        
                        //create a table object with fields type and rows
                        const tableObject = {
                            type: "table",
                            rows: tableRows
                        };

                        console.log("table object", tableObject)
                        postBlocks.push(tableObject);
                    } 
                    //if it's a column list, extract the contents of the columns
                    else if (block.type == "column_list"){
                        // extract the rows of the table
                        console.log("here at col list");
                        const ColumnListId =  block.id;
                        let columns = null;
                        const columnResponse = await getColumnItems(notion, ColumnListId);
                        
                        if(columnResponse.isOk()){
                            columns = columnResponse.value;
                        }
    
                        console.log("COL RESPO RIGHT", columns);

                        //create a column list object with the fields type and column 
                        const columnListObject = {
                            type: "column_list",
                            columns: columns
                        };
                        postBlocks.push(columnListObject);
                    }
                    //otherwise, just push the block normally
                    else {
                        postBlocks.push(block);
                    }
                }

                console.log(postBlocks);

                // const TableId =  blocks?.filter((f) => f.type=="table")?.[0]?.id;
                // const TableWidth =  blocks?.filter((f) => f.type=="table")?.[0]?.table.table_width;
                // let rows = null;

                
                // //if the block is a table, extract the rows of the table
                // if(TableId){
                //     const tableResponse =  await getTable(notion , TableId, TableWidth);
                    
                //     if(tableResponse.isOk()){
                //         // console.log(tableResponse);
                //         rows = tableResponse.value;
                //     }
                // }

                // const ColumnListId =  blocks?.filter((f) => f.type=="column_list")?.[0]?.id;
                // let columns = null;

                // //if the block is a column list, extract the children of the column list
                // // console.log("COL ID", ColumnListId);
                // if(ColumnListId){
                //     const columnResponse = await getColumnItems(notion, ColumnListId);
                    
                //     if(columnResponse.isOk()){
        
                //         columns = columnResponse.value;
                //     }

                //     console.log("COL RESPO", columns);
                // }
    
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
                }
            }
        } else {
            return err({ code: 500, message: "Some error occurred" });
        }

    } catch (error) {
        throw error;
    }
};