<script>
    import Carousel from "./Carousel.svelte";
    export let gallery_items;
    export let title = "Placeholder";
    export let description;
    export let github;
    export let figma;
    export let live;
    export let case_study;
</script>

<section class="flex flex-col gap-8 w-full h-svh items-center justify-center">
    <div class="flex flex-col gap-4">
        <span class="flex flex-col gap-2">
            <h6>{title}</h6>
            <p>{description}</p>
        </span>

        <!-- Case Study Link -->
        <div>
            {#if case_study != "none"}
            <a href={case_study}>
                <button type="button">
                    <span class="button-text">
                        <p class="case-study">Case Study</p>
                        <img src="/icons/arrow-top-right.png" alt="arrow"/>
                    </span>
                </button>
            </a>
            {/if}
        </div>

        <!-- Project Links -->
        <span class="links">
            {#if github != "none"}
                <a href={github} target="_blank">Github</a>
            {/if}
            {#if figma != "none"}
                <a href={figma} target="_blank">Figma</a>
            {/if}
            {#if live != "none"}
                <a href={live} target="_blank">Live</a>
            {/if}
        </span>
    </div>
    <Carousel gallery_items={gallery_items}/>

</section>