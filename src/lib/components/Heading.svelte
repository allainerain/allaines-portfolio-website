<script>
    export let heading;
</script>

{#if heading}
    {#if heading.type=="heading_1"}
        <h1 id={heading.id}>{heading.heading_1.rich_text?.[0]?.plain_text}</h1>
    {:else if heading.type=="heading_2"}
        <h2 id={heading.id}>{heading.heading_2.rich_text?.[0]?.plain_text}</h2>
    {:else if heading.type=="heading_3"}
        <h3 id={heading.id} class="">{heading.heading_3.rich_text?.[0]?.plain_text}</h3>
    {/if}
{/if}

<style>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

h1{
    font-family: 'Gentium Plus', serif;
    font-size: 64px;
    font-weight: 400;
}    

h2{
    font-family: 'Gentium Plus', serif;
    font-size: 48px;
    font-weight: 400;
}  

h3{
    font-family: 'Gentium Plus', serif;
    font-size: 36px;
    font-weight: 400;
}  

</style>