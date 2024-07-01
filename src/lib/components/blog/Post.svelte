<script>
    import { fly, blur } from "svelte/transition";
    import Block from "./Block.svelte";
  
    export let postBlocks;
    export let title;
    export let published;
    export let category;

    let numBlocks = postBlocks.length;
  
    let sampleDate = new Date();
    let formattedPublishDate = Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(sampleDate);
</script>


{#if postBlocks && postBlocks.length > 0}
    <article class="mx-auto lg:prose-lg grid gap-8">
        <div class="grid gap-2">
            {#if category}
                <p>{category}</p>
            {/if}

            {#if title}
                <h1>{title}</h1>
            {/if}

            <div class="flex justify-between items-center">
                {#if published}
                    <p class="">Published on {formattedPublishDate}</p>
                {/if}
            </div>
        </div>


        {#each postBlocks as postBlock}
            {#if postBlock.type === "column_list"}
                <div transition:fly={{y: 300, duration: 800}}>
                    <div in:blur={{amount: 100, duration: 800}} class="grid grid-cols-2 gap-4">
                        {#each postBlock.columns as column}
                            <div class="flex flex-col gap-4">
                                {#each column as block}
                                    <Block {block} />
                                {/each}
                            </div>
                        {/each}
                    </div>
                </div>
            {:else}
                <div transition:fly={{y: 300, duration: 800}}>
                    <div in:blur={{amount: 100, duration: 800}}>
                        <Block block={postBlock} />
                    </div>
                </div>
            {/if}
        {/each}

        

    </article>
{/if}
