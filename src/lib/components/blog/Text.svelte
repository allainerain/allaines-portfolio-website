<script>
    export let text;
</script>

{#if text}
    <p style:font-weight={text.annotations.bold ? "bold": "normal"} style:font-style={text.annotations.italic ? "italic": "normal"}>{text.plain_text}</p>
{/if}