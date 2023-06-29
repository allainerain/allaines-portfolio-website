<script>
    import Carousel from "./carousel.svelte";
    export let gallery_items;
    export let title;
    export let description;
    export let github;
    export let figma;
    export let live;
</script>

<section>
    <h1>{title}</h1>
    <p>{description}</p>
    <span class="links">
        {#if github != "none"}
            <a href={github}>Github</a>
        {/if}
        {#if figma != "none"}
            <a href={github}>Figma</a>
        {/if}
        {#if live != "none"}
            <a href={github}>Live</a>
        {/if}
    </span>
    
    <Carousel gallery_items={gallery_items}/>
</section>

<style>
    section {
        color: #C2C2C2;
        width: 800px;
        margin: 150px auto 150px auto;
        text-align: center;
    }

    h1{
        font-family: 'Gentium Plus', serif;
        font-weight: 400;
        font-size: 100px;
        line-height: 1.11;
    }


    p{
        font-family: 'Source Sans 3', sans-serif;
        font-size: 24px;
        line-height: 1.75;
    }

    a{
        font-family: 'Roboto Mono', monospace;
        font-size: 18px;
        text-decoration: none;
        margin: 0 10px;
        color: #838481;
        transition: color 0.3s ease; 
    }

    a:hover{
        color:  #C2C2C2;
    }


    /* TABLET VIEW */
    @media only screen and (max-width: 900px) {
        section{
            width: 94%;
            margin: 150px 3% 150px 3%; /* Adjust the margin for small screens */

        }

    }

    /* PHONE VIEW */
    @media only screen and (max-width:770px){
        section{
            width: 90%;
            margin: 150px 5% 150px 5%; /* Adjust the margin for small screens */
            /* background-color: white; */
        }
        h1{
            font-size: 80px;
        }

    }
</style>