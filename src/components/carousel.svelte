<script>
    import { fade, slide } from 'svelte/transition';
    export let gallery_items = [];
    let currentSlideItem = 0;
  
    function nextSlide() {
        currentSlideItem = (currentSlideItem + 1) % gallery_items.length;
    }
  
    function previousSlide() {
        currentSlideItem = (currentSlideItem - 1 + gallery_items.length) % gallery_items.length;
    }
</script>
  
<div class="carousel">
    {#each [gallery_items[currentSlideItem]] as item (currentSlideItem)}
        <img in:fade={{ duration: 800 }} class="carousel-image" src={item} alt="Project">
    {/each}
  
    <div class="carousel-controls">
        <button class="previous" on:click={previousSlide} transition:fade>
            Previous
        </button>
        <div class="pagenum">
            {currentSlideItem + 1} of {gallery_items.length}
        </div>
        <button class="next" on:click={nextSlide} transition:fade>
            Next
        </button>
    </div>
</div>
  
<style>
    .carousel {
        width: 100%;
        max-width: 800px;
        margin: 150px auto;
        color: #C2C2C2;
        font-family: 'Gentium Plus', serif;
        font-size: 20px;
    }
  
    .carousel-image {
        width: 100%;
        height: auto;
        aspect-ratio: 16/10.4; /* Adjust the aspect ratio as per your requirement */
        overflow: hidden;
        object-fit: cover;
    }
  
    .carousel-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
  
    button {
        padding: 5px;
        cursor: pointer;
        /* Reset button styles */
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
  
    .previous {
        order: 1;
    }
  
    .pagenum {
        order: 2;
    }
  
    .next {
        order: 3;
    }

    /* TABLET VIEW */
    @media only screen and (max-width: 900px) {
        .carousel{
            width: 94%;
            margin: 150px 3% 150px 3%;
        }
    }

    /* PHONE VIEW */
    @media only screen and (max-width: 770px){
        .carousel{
            width: 90%;
            margin: 150px 5% 150px 5%; 
        }
    }
</style>
