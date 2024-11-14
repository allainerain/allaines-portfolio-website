import { c as create_ssr_component, a as subscribe } from "../../../chunks/ssr.js";
import { b as blogPosts } from "../../../chunks/blogStores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_blogPosts;
  $$unsubscribe_blogPosts = subscribe(blogPosts, (value) => value);
  $$unsubscribe_blogPosts();
  return `${``}`;
});
export {
  Page as default
};
