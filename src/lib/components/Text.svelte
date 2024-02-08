<script>
    export let text;
    console.log("text", text)
</script>

{#if text}
    <p style:font-weight={text.annotations.bold ? "bold": "normal"} style:font-style={text.annotations.italic ? "italic": "normal"}>{text.plain_text}</p>
{/if}

<style>
    p{
        font-family: 'Satoshi', sans-serif;
        font-size: 20px;
        line-height: 1.75;
    } 

</style>