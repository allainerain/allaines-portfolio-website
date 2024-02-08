import { Client } from '@notionhq/client'

export const notion = new Client({ auth: process.env.NOTION_KEY})
const databaseId = process.env.NOTION_DATABASE_ID

import { getBlocks, getColumnItems, getTable, getCalloutItems } from './notion.js'

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

                const blocks = blockResponse.value;

                for (let block of blocks){
                    //process blocks that require accessing the children
                    //these blocks are: tables, column lists and callouts
                    if (block.type == "table"){

                        const tableResponse =  await getTable(notion , block);
                        let tableObject;
                        
                        if(tableResponse.isOk()){
                            tableObject = tableResponse.value;
                        }
                        
                        postBlocks.push(tableObject);
                    } 
                    else if (block.type == "column_list"){

                        let columnListObject;
                        const columnResponse = await getColumnItems(notion, block);
                        
                        if(columnResponse.isOk()){
                            columnListObject = columnResponse.value;
                        }

                        postBlocks.push(columnListObject);
                    }
                    //if it's a callout then extract the children
                    else if (block.type == "callout"){
                        let calloutListObject;
                        const calloutResponse = await getCalloutItems(notion, block);
        
                        if (calloutResponse.isOk()) {
                            calloutListObject = calloutResponse.value;
                        }
      
                        postBlocks.push(calloutListObject);
                    }
                    //otherwise, just push the block normally
                    else {
                        postBlocks.push(block);
                    }
                }

                console.log("POST BLOCKS", postBlocks);
    
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