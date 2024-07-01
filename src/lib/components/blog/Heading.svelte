<script>
    export let heading;
</script>

{#if heading}
    {#if heading.type=="heading_1"}
        <h1>{heading.heading_1.rich_text?.[0]?.plain_text}</h1>
    {:else if heading.type=="heading_2"}
        <h2>{heading.heading_2.rich_text?.[0]?.plain_text}</h2>
    {:else if heading.type=="heading_3"}
        <h3>{heading.heading_3.rich_text?.[0]?.plain_text}</h3>
    {/if}
{/if}