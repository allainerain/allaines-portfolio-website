<script>
  import { onMount } from 'svelte';
  import { fly, blur } from 'svelte/transition';

  import { blogPosts } from '$lib/stores/blogStores.js';

  let blogPostsData;
  let length;

  onMount(() => {
    formatBlogPosts();
  });

  function formatBlogPosts() {
    blogPostsData = $blogPosts.map((blogPost) => {
      const publishDate = new Date(blogPost.properties.Publish_Date.date.start);
      const formattedPublishDate = new Intl.DateTimeFormat('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      }).format(publishDate);

      return {
        title: blogPost.properties.Title.title[0].plain_text,
        description: blogPost.properties.Description.rich_text[0].plain_text,
        category: blogPost.properties.Category.select.name,
        published: formattedPublishDate,
        slug: blogPost.properties.Slug.rich_text[0].plain_text
      };
    });

    length = blogPostsData.length;
  }

  function getUniqueCategories() {
    const categories = new Set(blogPostsData.map((post) => post.category));
    return Array.from(categories);
  }

  function filterBlogPosts(category) {
    return blogPostsData.filter((post) => post.category === category);
  }
</script>

{#if length > 0}
<section class="flex flex-col w-full items-center md:mt-40 mt-20">
  <section class="grid gap-4 items-center justify-center w-[90%] max-w-[1300px]">

    <!-- Display posts for every category -->
    {#each getUniqueCategories() as category, categoryIndex} 
      <span in:fly|global={{ y: 300, duration: 800, delay: categoryIndex * 400 }} >
        <span in:blur|global={{ amount: 100, duration: 800, delay: categoryIndex * 400 }} class="grid gap-2 w-full">
          <h2>{category}</h2>
          <!-- Category Descriptions -->
          {#if category == 'Case Study'}
            <p>Take a closer look at the process behind some of my favorite projects I build for school or for fun!</p>
          {/if}
          {#if category == 'Journey'}
            <p>Some side journeys I have been on! Watch me document the other things I love to do.</p>
          {/if}
          <hr class="w-full my-6 border-t dark:border-light-border/[.50]">
        </span>
        
      </span>

      <!-- Posts under the category -->
      <ul class="grid gap-4 w-full">
        {#each filterBlogPosts(category) as blogPost, index}
          <li>
            <a 
              
              href={`/blog/${blogPost.slug}`}
              in:fly|global={{ y: 300, duration: 800, delay: categoryIndex * 400 + (index + 1) * 100 }}
            >
              <div 
                  in:blur|global={{ amount: 100, duration: 800, delay: categoryIndex * 400 + (index + 1) * 100 }}
                  class="flex flex-col md:flex-row justify-between hover:text-light-accent hover:dark:text-dark-accent"
              >
                <p>{blogPost.published}</p>
                <h5 class="md:order-first">{blogPost.title}</h5>
              </div>
            </a>
          </li>
        {/each}
      </ul>
      <br>
    {/each}
  </section>
</section>
{/if}
