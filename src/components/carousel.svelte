<script>
  export let images = [];

  let currentImageIndex = 0;

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  }
</script>

<div class="carousel">
  {#if images.length > 0}
    <img class="carousel-image" src={images[currentImageIndex]} alt="Project">
  {/if}

  <div class="carousel-controls">
    <button class="previous" on:click={previousImage}>
      Previous
    </button>
    <div class="pagenum">
      {currentImageIndex + 1} of {images.length}
    </div>
    <button class="next" on:click={nextImage}>
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
        height: 400px;
        overflow: hidden;
        object-fit: cover;
        opacity: 1;
        transition: opacity 0.5s ease;
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

    .pagenum{
        order: 2;
    }
  
    .next {
      order: 3;
    }
  </style>
