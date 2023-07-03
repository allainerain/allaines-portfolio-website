import { error } from '@sveltejs/kit';
import { getPageBySlug } from '../../../services/notion.server.js';

export async function load({ params }) {
  try {
    const { slug } = params;
    // console.log("FROM PAGE SERVER", slug)
    const response = await getPageBySlug(slug);

    // console.log("FROM PAGE SERVER", response)

    if (!response) {
      // console.log("ERROR")
      throw error(404, 'Post not found');
    }

    const { slugs, ...postData } = response;
    return {
      props: {
        slugs,
        postData
      }
    };
  } catch (err) {
    // console.log("ERROR")
    throw error(500, 'Internal Server Error');
  }
}