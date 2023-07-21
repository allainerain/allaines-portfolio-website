<script>
  import { onMount } from 'svelte';
  export let data;
  
  let blogData = data.props.results.results 

  // console.log("data", blogData)

  let blogPosts = [];

  onMount(formatBlogPosts)

  function formatBlogPosts() {
    blogPosts = blogData.map((blogPost) => {
      const publishDate = new Date(blogPost.properties.Publish_Date.date.start);
      const formattedPublishDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
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

    // console.log(blogPosts);
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
<section>
  {#if blogPosts.length > 0}
  {#each getUniqueCategories() as category}
    <h1>{category}</h1>
    <ul>
      {#each filterBlogPosts(category) as blogPost}
          <li>
            <a href={`/blog/${blogPost.slug}`}>
              <div class="card">
                <p>{blogPost.published}</p>
                <h2>{blogPost.title}</h2>
                <p>{blogPost.description}</p>
              </div>
            </a>
          </li>
      {/each}
    </ul>
  {/each}
{:else}
  <p>Loading.</p>
{/if}

</section>

</body>


<style>

body{
  color: #D9D9D9
}

section {
    color: #C2C2C2;
    width: 800px;
    margin: 100px auto 100px auto;
}

li{
  list-style: none;
}

ul{
  margin: 0;
  padding: 0;
}

h1{
    font-family: 'Gentium Plus', serif;
    font-weight: 400;
    font-size: 64px;
    line-height: 1.11;
}

.card{
  /* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); */
  transition: 0.2s;
  background-color: #161A11;
  padding: 20px 40px;
  margin: 20px 0px;
  border-radius: 10px
}

.card:hover {
  /* box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); */
  transform: scale(1.02);
  cursor: pointer;
}

a{
  text-decoration: none;
}

a h2{
  color: #D9D9D9;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 28px;
  font-weight: 600;
}

a p{
  color: #838481;
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 1.5;
}

/* TABLET VIEW */
@media only screen and (max-width: 900px) {
    section{
      width: 94%;
      margin: 150px 3% 150px 3%; /* Adjust the margin for small screens */

    }
    h1{
      font-size: 48px;
    }
    h2{
      font-size: 24px;
    }
    a p{
      font-size: 15px;
      line-height: 1.4;
    }

}

/* PHONE VIEW */
@media only screen and (max-width:770px){
    section{
      width: 90%;
      margin: 150px 5% 150px 5%; /* Adjust the margin for small screens */
    }
    h1{
      font-size: 36px;
    }
    h2{
      font-size: 20px;
    }
    a p{
      font-size: 14px;
      line-height: 1.3;
    }

  }

</style>