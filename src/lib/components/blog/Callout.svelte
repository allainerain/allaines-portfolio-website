<script>
    import Block from "$lib/components/blog/Block.svelte";
    import Divider from "$lib/components/Divider.svelte";

    export let block
    export let title = block.rich_text[0].plain_text;
    export let emoji = block.icon.emoji;
    export let children = block.children;


</script>

<div class="flex flex-col h-full gap-4 border border-1 p-8 rounded-lg bg-[#FBFBFB] dark:bg-[#161616] dark:border-[#2D2D2D]">
    <p class="text-light-accent dark:text-dark-accent text-[16px]">{emoji} {title}</p>

    {#if children}
        {#each children as child}
            <Block block={child}/>
        {/each}
    {/if}

</div>