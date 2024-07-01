import { getPageBySlug } from "$lib/services/notion.server.js";

export async function load({ params }) {
  return {
    slug: params.slug,
    postData: getPageBySlug(params.slug),
  };
}
