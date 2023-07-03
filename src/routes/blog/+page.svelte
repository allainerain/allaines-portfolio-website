<script>
    import { onMount } from 'svelte';
  
    let blogPosts = [];
  
    async function fetchBlogPosts() {
      try {
        const response = await fetch("/blog");
        const data = await response.json();
        blogPosts = data.results;
        console.log(blogPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }
  
    onMount(fetchBlogPosts);
  </script>
  
  <h1>Blog</h1>
  
  <ul>
    {#each blogPosts as blogPost}
      <li>{blogPost.title}</li>
    {/each}
  </ul>