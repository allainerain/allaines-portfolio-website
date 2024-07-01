<script>
    import ErrorPage from "./ErrorPage.svelte";
    import Post from "./Post.svelte";

    export let data;

    let tableOfContent
    if (Array.isArray(data.postBlocks)) {
        tableOfContent = data.postBlocks.map((block) => {
            if (block.type == "heading_1") {
                return {
                text: block.heading_1.rich_text[0].plain_text,
                id: block.id,
                type: "heading_1"
            };
            } else if (block.type == "heading_2") {
            return {
                text: block.heading_2.rich_text[0].plain_text,
                id: block.id,
                type: "heading_2"
            };
            } else if (block.type == "heading_3") {
            return {
                text: block.heading_3.rich_text[0].plain_text,
                id: block.id,
                type: "heading_3"
            };
            } else {
                return undefined;
            }
        });
    }

</script>

<ErrorPage {data} />

<Post 
    postBlocks={data.postBlocks} 
    title={data.title} 
    published={data.published} 
    category={data.category}
/>
