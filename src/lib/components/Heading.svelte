<script>
    export let heading;

    // console.log("heading", heading)
</script>

{#if heading}
    {#if heading.type=="heading_1"}
        <h1 id={heading.id}>{heading.heading_1.rich_text?.[0]?.plain_text}</h1>
    {:else if heading.type=="heading_2"}
        <h2 id={heading.id}>{heading.heading_2.rich_text?.[0]?.plain_text}</h2>
    {:else if heading.type=="heading_3"}
        <h3 id={heading.id}>{heading.heading_3.rich_text?.[0]?.plain_text}</h3>
    {/if}
{/if}

<style>

    h1{
        font-family: 'Satoshi', sans-serif;

        /* font-family: 'Gentium Plus', serif; */
        font-size: 44px;
        font-weight: 500;
    }    

    h2{
        font-family: 'Satoshi', sans-serif;

        /* font-family: 'Gentium Plus', serif; */
        font-size: 40px;
        font-weight: 500;
    }  

    h3{
        font-family: 'Satoshi', sans-serif;
        /* font-family: 'Gentium Plus', serif; */
        font-size: 36px;
        font-weight: 500;
    }  

    @media only screen and (max-width: 900px) {
        h1{
            font-size: 40px;
        }
        h2{
            font-size: 36px;
        }
        h3{
            font-size: 32px;
        }

    }

    /* PHONE VIEW */
    @media only screen and (max-width:770px){
        h1{
            font-size: 36px;
        }
        h2{
            font-size: 32px;
        }
        h3{
            font-size: 28px;
        }



    }

</style>