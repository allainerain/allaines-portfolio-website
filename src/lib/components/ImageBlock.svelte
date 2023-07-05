<script>
    import { Image } from "@unpic/svelte";
    export let block;
</script>

{#if block.image}
    {#if block.image.type=="file"}
        <Image src={block.image.file.url} layout="fullWidth" aspectRatio={16/9} style="border-radius: 10px; max-width: 100%;" class="aspect-video object-cover" />
        {#if block.image.caption?.length > 0}
            <p style="width: 100%; font-size: 0.625rem; color: #888888; text-align: center;">{block.image.caption?.[0].plain_text}</p>
        {/if}
    {:else if block.image.type=="external"}
        <Image src={block.image.external.url} layout="fullWidth" aspectRatio={16/9} style="border-radius: 10px; max-width: 100%;" class="aspect-video object-cover" />
        {#if block.image.caption?.length > 0}
            <p style="width: 100%; font-size: 0.625rem; color: #888888; text-align: center;">{block.image.caption?.[0].plain_text}</p>
        {/if}
    {/if}
{/if}
