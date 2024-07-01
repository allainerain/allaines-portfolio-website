import { getBlog } from "$lib/services/notion.server.js";

export async function load() {
  const response = await getBlog();
  const { object, ...posts } = response;

  return {
    posts,
  };
}
