<script>
  import { onMount } from 'svelte';

  let blogPosts = [];

  async function fetchBlogPosts() {
    try {
      const response = await fetch("/blog");
      const data = await response.json();
      blogPosts = data.results.map((blogPost) => ({
        title: blogPost.properties.Title.title[0].plain_text,
        description: blogPost.properties.Description.rich_text[0].plain_text,
        category: blogPost.properties.Category.select.name,
      }));
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  }

  onMount(fetchBlogPosts);

  // Get unique categories from the blog posts
  function getUniqueCategories() {
    const categories = new Set(blogPosts.map((post) => post.category));
    return Array.from(categories);
  }

  // Filter blog posts by category, keeping "Journey" posts on top
  function filterBlogPosts(category) {
    if (category === "Journey") {
      return blogPosts.filter((post) => post.category === category);
    } else {
      return blogPosts
        .filter((post) => post.category === category)
        .concat(blogPosts.filter((post) => post.category === "Journey"));
    }
  }
</script>

<h1>Blog</h1>

{#if blogPosts.length > 0}
  {#each getUniqueCategories() as category}
    <h2>{category}</h2>
    <ul>
      {#each filterBlogPosts(category) as blogPost}
        <li>
          <h3>{blogPost.title}</h3>
          <p>{blogPost.description}</p>
        </li>
      {/each}
    </ul>
  {/each}
{:else}
  <p>No blog posts found.</p>
{/if}

<style>
  h1 {
    color: white;
  }

  h2 {
    color: white;
    margin-top: 2rem;
  }

  ul {
    color: white;
  }
</style>
