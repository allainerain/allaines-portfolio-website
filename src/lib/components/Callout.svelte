<script>
    import Block from "./Block.svelte";
    export let block
    export let title = block.rich_text[0].plain_text;
    export let emoji = block.icon.emoji;
    export let children = block.children;

    // console.log(title, emoji, children)

</script>

<body>
    <p>
        {emoji} 
        <span class="title"> {title} </span>
    </p>
    
    

    {#if children}
        {#each children as child}
            <Block block={child}/>
        {/each}
    {/if}

</body>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    body{
        background: #181818;
        padding: 24px;
        border-radius: 5px;
        border: 1.5px solid #292929;
        margin: 0;
        margin-top: 16px;
    }

    .title{
        padding: 8px;
        font-family: 'Roboto Mono', monospace;
        font-size: 14px;
        color: #838481;
    }

</style>