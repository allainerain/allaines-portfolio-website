<script>
    import Carousel from "./carousel.svelte";
    export let gallery_items;
    export let title;
    export let description;
</script>

<section>
    <h1>{title}</h1>
    <p>{description}</p>
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