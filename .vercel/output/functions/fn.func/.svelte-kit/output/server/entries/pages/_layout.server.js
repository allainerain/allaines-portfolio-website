import { g as getBlog } from "../../chunks/notion.server.js";
async function load() {
  const response = await getBlog();
  const { object, ...posts } = response;
  return {
    posts
  };
}
export {
  load
};
