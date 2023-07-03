<script>
    export let paragraph;
    let initialText = "";
    $: paraText = paragraph.paragraph?.rich_text?.reduce((accumulator, para)=> para.href ? accumulator + `<a href='${para.href}' target='_blank'>${para.plain_text}</a>`: accumulator + para.plain_text, initialText);
</script>

{#if paraText}
    <p>{@html paraText}</p>
{/if}