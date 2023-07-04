import { getBlog } from '../../services/notion.server.js';
import { json } from '@sveltejs/kit';

export async function load() {
    const response = await getBlog();
    // console.log("FROM PAGE SERVER");
    console.log(response);
    const { object, ...results } = response;

    console.log("RESULTS", results)
    return {
      props: {
        results
      }
    };
}
