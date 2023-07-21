<script>
    import Block from "./Block.svelte";
    import TableOfContent from "./TableOfContent.svelte";
    import { Image } from "@unpic/svelte";
    import Faq from "./FAQ.svelte";
  
    export let blocks;
    export let tableOfContent;
    export let title;
    export let cover;
    export let faqs;
    export let author;
    export let published;
    export let category;
  
    // Assign a sample date value for demonstration
    let sampleDate = new Date();
    let formattedPublishDate = Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(sampleDate);
  </script>

<div class="max-w-prose mx-auto lg:text-lg">
    {#if blocks && blocks.length >0}
        <article class="mt-8 prose prose-slate mx-auto lg:prose-lg">
            <div class = "header">
                {#if category}
                    <h2>{category}</h2>
                {/if}

                {#if title}
                    <h1>{title}</h1>
                {/if}

                <div class="flex justify-between items-center">

                    {#if published}
                        <p class="">Published on {formattedPublishDate}</p>
                    {/if}

                    <!-- {#if author}
                        <div class="flex gap-2 items-center">
                            <img src={author.avatar_url} alt={author.name} class="rounded-full h-5 w-5 aspect-square" />
                            <small class="">{ author.name }</small>
                        </div>
                    {/if} -->
                </div>
            </div>

            
            

            <!-- {#if cover}
                <Image src = {cover} layout="fullWidth" aspectRatio={16/9} class="rounded-md aspect-video object-cover max-h-[500px] w-full" />
            {/if} -->

            <!-- <TableOfContent {tableOfContent} /> -->
            
            {#each blocks as block}
                <div class="my-4">
                    <Block {block} />
                </div>
            {/each}

            <!-- {#if faqs && faqs.length > 0}
                <Faq {faqs} />
            {/if} -->
        </article>
    {/if}
</div>

<style>
    .header{
        margin: 60px 0px;
    }

    /* Styles for blog post header */

    h1{
        font-family: 'Gentium Plus', serif;
        font-weight: 400;
        font-size: 64px;
        line-height: 1.11;
        margin: 20px 0px ;
    }

    h2 {
        font-family: 'Source Sans 3', sans-serif;
        font-size: 20px;
        line-height: 1.75;
        margin: 0;
        font-weight: 500;
        text-transform: uppercase;
        color: #838481;
    }


    p{
        font-family: 'Roboto Mono', monospace;
        font-size: 16px;
        margin: 0;
        color: #838481;
    }

    /* TABLET VIEW */
    @media only screen and (max-width: 900px) {
        h1{
            font-size: 54px;
        }
        h2{
            font-size: 18px;
        }

    }

    /* PHONE VIEW */
    @media only screen and (max-width:770px){
        h1{
            font-size: 44px;
        }
        h2{
            font-size: 16px;
        }

    }
    
</style>