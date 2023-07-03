import { Client } from '@notionhq/client'

import dotenv from 'dotenv'
const notion = new Client({ auth: process.env.NOTION_KEY})
const databaseId = process.env.NOTION_DATABASE_ID

// const notion = new Client({ auth: "secret_QUn2W5Harhj0kKDxNi07cRKWbVlcK3kqOyA2LxqO8O7"})
// const databaseId = "2a53bf1ccea24fe79d167b46090e893d"

console.log(process.env.NOTION_KEY)

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

        console.log("FROM SERVICE")
        return response
    }
    catch(error){
        throw error
    }

}


// get post by slug

// export async function getPostBySlug(slug) {
//     try{
//         const response = await notion.databases.query({
//             database_id: databaseId,
//             filter: {
//                 property: "Slug",
//                 rich_text:{
//                     equals: slug
//                 }
//             }
//         });

        

//     }catch{

//     }
// }
