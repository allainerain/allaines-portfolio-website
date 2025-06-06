<script lang="ts">
    import { fly } from "svelte/transition";
    import { blur} from "svelte/transition";

    let selected="For anyone"

    let scrollContainer;
	let showLeftFade = false;

    function handleScroll() {
        if (scrollContainer) {
            showLeftFade = scrollContainer.scrollLeft > 0;
        }
    }
</script>

   <section class="flex flex-col gap-8 items-left justify-center md:pt-40 md:pb-20 pt-20 w-full px-10 sm:px-6 md:px-10 overflow-hidden">
        <!-- Tabs -->
       
        <div class="relative w-full max-w-full">

            {#if showLeftFade}
                <div class="pointer-events-none absolute left-0 top-0 h-full w-8 z-10 bg-gradient-to-r from-white to-transparent dark:from-[#131313]"></div>
            {/if}   

            <div
                bind:this={scrollContainer}
                on:scroll={handleScroll}
                class="no-scrollbar overflow-x-auto flex gap-4 pr-20"
                transition:fly={{ y: 300, duration: 800 }}
            >


                {#each ["For anyone", "Recruiters", "Product Designers", "CEOs", "Engineers"] as label}
                    <button on:click={() => selected = label} class="shrink-0">
                        <h6
                            class={selected === label ? "gradient-text-static" : "text-gray-400"}
                        >
                            {label}
                        </h6>
                    </button>
                {/each}
            </div>
            <div class="pointer-events-none absolute right-0 top-0 h-full w-8 z-10 bg-gradient-to-l from-white to-transparent dark:from-[#131313]"></div>


        </div>

        <!-- Text -->
        <span transition:fly={{ y: 300, duration: 800, delay: 100 }}>
        <h1
            class="
            relative inline-block
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_10%,rgba(255,255,255,0.4)_90%)]
            before:pointer-events-none
            before:dark:bg-[radial-gradient(circle_at_center,rgba(19,19,19,0)_10%,rgba(19,19,19,0.4)_90%)]
            text:text-dark-accent
            leading-30
            "
        >
            {#key selected}
            <span in:blur={{ amount: 20, duration: 300 }} >
                {#if selected == "For anyone"}
                    <h1>Allaine designs and codes digital things that work well, look great, and make people’s lives just a little easier.</h1>
                {:else if selected == "Recruiters"}
                    <h1>Allaine is a Computer Science graduate who brings over 3 years of experience across software development, product design, and research. She’s contributed to early-stage startups like Dormy and Forent, and to global organizations like Samsung and Azeus.</h1>
                {:else if selected == "CEOs"}
                    <h1>Allaine wears multiple hats across product and engineering. She brings end-to-end product acumen—from defining strategy, validating ideas, and building solutions that serve users while meeting business objectives.</h1>
                {:else if selected == "Product Designers"}
                    <h1>Allaine helps product designers think through interaction details, edge cases, and states—so designs aren’t just beautiful, but implementation-ready from day one.</h1>
                {:else if selected == "Engineers"}
                    <h1>Allaine is a designer who codes and thinks like an engineer. She considers technical constraints early, speaks your language, and builds many of the things she designs.</h1>
                {/if}
            </span>
            {/key}
        </h1>
        </span>
    </section>
    
<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
</style>