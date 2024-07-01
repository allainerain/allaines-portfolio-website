<script>
	import Heading from "./Heading.svelte";
	import Paragraph from "./Paragraph.svelte";
	import ImageBlock from "./ImageBlock.svelte";
	import NumberedList from "./NumberedList.svelte";
	import BulletList from "./BulletList.svelte";
	import Embed from "./Embed.svelte";
    import Callout from "./Callout.svelte"
    import Table from "./Table.svelte"

    export let block
</script>


{#if block.type=="heading_1"}
    <Heading heading={block} />
{:else if block.type=="heading_2"}
    <Heading heading={block} />
{:else if block.type=="heading_3"}
    <Heading heading={block} />
{:else if block.type=="paragraph"}
    <Paragraph paragraph={block} />
{:else if block.type=="numbered_list_item"}
    <NumberedList {block} />
{:else if block.type=="bulleted_list_item"}
    <BulletList {block} />
{:else if block.type=="image"}
    <ImageBlock {block} />
{:else if block.type=="embed"}
    <Embed {block} />
{:else if block.type=="callout"}
    <Callout block={block} />
{:else if block.type=="table"}
    <Table block={block} />
{/if}