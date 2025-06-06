<script>
	import { fade } from 'svelte/transition';
	export let gallery_items = [];
	let currentSlideItem = 0;
	let imagesLoaded = 0;

	function nextSlide() {
		currentSlideItem = (currentSlideItem + 1) % gallery_items.length;
		imagesLoaded = 0;
	}

	function previousSlide() {
		currentSlideItem = (currentSlideItem - 1 + gallery_items.length) % gallery_items.length;
		imagesLoaded = 0;
	}
</script>

<div class="w-fit text-[20px] text-[#C2C2C2]">
	{#each [gallery_items[currentSlideItem]] as item (currentSlideItem)}
		<img
			in:fade={{ duration: 800 }}
			class="w-full aspect-[16/10.4] object-cover rounded-lg transition-opacity duration-300 {imagesLoaded === 1 ? 'opacity-100' : 'opacity-0'}"
			src={item}
			alt="Project"
			on:load={() => (imagesLoaded = 1)}
		/>
	{/each}

	<div class="flex items-center justify-between mt-2 text-light-text dark:text-dark-text">
		<button on:click={previousSlide} in:fade class="text-inherit p-2">
			<p>Previous</p>
		</button>
		<div>
			<p>{currentSlideItem + 1} of {gallery_items.length}</p>
		</div>
		<button on:click={nextSlide} in:fade class="text-inherit p-2">
			<p>Next</p>
		</button>
	</div>
</div>
