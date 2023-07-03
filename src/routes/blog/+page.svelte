<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let blogPosts = [];

  async function fetchBlogPosts() {
    try {
      const response = await fetch("/blog");
      const data = await response.json();

      // console.log(data);
      blogPosts = data.results.map((blogPost) => ({
        title: blogPost.properties.Title.title[0].plain_text,
        description: blogPost.properties.Description.rich_text[0].plain_text,
        category: blogPost.properties.Category.select.name,
        slug: blogPost.properties.Slug.rich_text[0].plain_text
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

  // Filter blog posts by category, excluding "Journey" posts from other categories
  function filterBlogPosts(category) {
    if (category === "Journey") {
      return blogPosts.filter((post) => post.category === category);
    } else {
      return blogPosts.filter((post) => post.category === category && post.category !== "Journey");
    }
  }

</script>

<h1>Blog</h1>


{#if blogPosts.length > 0}
  {#each getUniqueCategories() as category}
    <h2>{category}</h2>
    <ul>
      {#each filterBlogPosts(category) as blogPost}
        {#if category !== "Journey" || (category === "Journey" && blogPost.category === category)}
          <li>
            <a href={`/blog/${blogPost.slug}`}>{blogPost.title}</a>
            <p>{blogPost.description}</p>
          </li>
        {/if}
      {/each}
    </ul>
  {/each}
{:else}
  <p>Loading.</p>
{/if}