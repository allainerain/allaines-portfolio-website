<script>
  import { onMount } from 'svelte';
  export let data;
  
  let blogData = data.props.results.results 

  console.log("data", blogData)

  let blogPosts = [];

  onMount(formatBlogPosts)

  function formatBlogPosts(){
    blogPosts = blogData.map((blogPost) => ({
        title: blogPost.properties.Title.title[0].plain_text,
        description: blogPost.properties.Description.rich_text[0].plain_text,
        category: blogPost.properties.Category.select.name,
        slug: blogPost.properties.Slug.rich_text[0].plain_text
      }));

    console.log(blogPosts)
  }

  function getUniqueCategories(){
    const categories = new Set(blogPosts.map((post) => post.category));

    return Array.from(categories);
  }

  function filterBlogPosts(category) {
    return blogPosts.filter((post) => post.category === category)

  }

</script>

<body>

  {#if blogPosts.length > 0}
  {#each getUniqueCategories() as category}
    <h1>{category}</h1>
    <ul>
      {#each filterBlogPosts(category) as blogPost}
          <li>
            <a href={`/blog/${blogPost.slug}`}>{blogPost.title}</a>
            <p>{blogPost.description}</p>
          </li>
      {/each}
    </ul>
  {/each}
{:else}
  <p>Loading.</p>
{/if}

</body>


<style>

body{
  color: white
}
</style>