<script>
    import { fade, slide } from 'svelte/transition';
    export let gallery_items = [];
    let currentSlideItem = 0;
    let imagesLoaded = 0;

    function nextSlide() {
        currentSlideItem = (currentSlideItem + 1) % gallery_items.length;
        imagesLoaded = 0; // Reset imagesLoaded when changing slides
    }

    function previousSlide() {
        currentSlideItem = (currentSlideItem - 1 + gallery_items.length) % gallery_items.length;
        imagesLoaded = 0; // Reset imagesLoaded when changing slides
    }
</script>

<div class="carousel">
    {#each [gallery_items[currentSlideItem]] as item (currentSlideItem)}
        <img in:fade={{ duration: 800 }} class="carousel-image rounded-lg {imagesLoaded === 1 ? 'loaded' : ''}" src={item} alt="Project" on:load={() => imagesLoaded = 1}>
    {/each}

    <div class="carousel-controls text-light-text dark:text-dark-text">
        <button class="previous" on:click={previousSlide} transition:fade>
            <p>Previous</p>
        </button>
        <div class="pagenum">
            <p>{currentSlideItem + 1} of {gallery_items.length}</p>
        </div>
        <button class="next" on:click={nextSlide} transition:fade>
            <p>Next</p>
        </button>
    </div>
</div>
  
<style>
    .carousel {
        width: 100%;
        color: #C2C2C2;
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
        }
    }

    /* PHONE VIEW */
    @media only screen and (max-width: 770px){
        .carousel{
            width: 90%;
        }
    }
</style>
