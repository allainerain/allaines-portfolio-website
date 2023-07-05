import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_KEY})
const databaseId = process.env.NOTION_DATABASE_ID

import { getBlocks, getFAQs } from './notion.js'

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

export async function getPageBySlug(slug) {
    try {

        // console.log("CALLING SLUG")

        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Slug",
                rich_text: {
                    equals: slug
                }
            }
        });

        // console.log("AWAITED")

        // console.log(response)

        console.log(response.results.length)
        if(response.results.length>0){

            console.log("RESPONSE IS OK")

            const page = response.results[0];
            const title = page.properties.Title.title[0].plain_text;
            const description = page.properties.Description.rich_text[0].plain_text;
            const cover = page.cover.external.url;
            const published = page.properties.Publish_Date.date.start
            const author = page.properties.Authors.people[0]
            const category = page.properties.Category.select.name
            
            // console.log("title", title)
            // console.log("description", description)
            // console.log("cover", cover)
            // console.log("published", published)
            // console.log("author", author)
            
            // if(!page?.id){
            //     return {
            //         error: {
            //             code: 500,
            //             message: "Invalid or missing page!"
            //         }
            //     }
            // }
    
            const blockResponse = await getBlocks(notion , page.id);

            // console.log("BLOCK RESPONSE", blockResponse)
            
            if(blockResponse.isOk()){
                //console.log("result", JSON.stringify(blockResponse.value));
                const blocks = blockResponse.value;
                const faqsTableId =  blocks?.filter((f) => f.type=="table")?.[0]?.id;
                let faqs = null;
                
                if(faqsTableId){
                    const faqsResponse =  await getFAQs(notion , faqsTableId);
                    
                    if(faqsResponse.isOk()){
                        faqs = faqsResponse.value;
                    }
                }
    
                return {
                    blocks,
                    title,
                    description,
                    cover,
                    slug,
                    published,
                    author,
                    faqs,
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


//     }catch{

//     }
// }
