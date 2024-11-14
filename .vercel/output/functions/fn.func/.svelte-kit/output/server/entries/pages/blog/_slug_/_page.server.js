import { a as getPageBySlug } from "../../../../chunks/notion.server.js";
async function load({ params }) {
  return {
    slug: params.slug,
    postData: getPageBySlug(params.slug)
  };
}
export {
  load
};
