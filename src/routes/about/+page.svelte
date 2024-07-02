<script>
    import { fly, blur } from "svelte/transition";
    import { onMount } from "svelte";

    import Divider from "$lib/components/Divider.svelte";

    let hobby = 'travel'
    let hobbySrc = '/hobbies/travel.jpg'
    let ready = false;

    onMount(() => ready = true);

</script>

{#if ready}
    <section class="grid gap-12 items-center justify-center max-w-[1300px] w-[90%]">

        <!-- INTRO SECTION -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:mt-40 mt-10">
            <div transition:fly={{y: 300, duration: 800, delay: 100}} class="relative overflow-hidden max-h-[600px] rounded-[20px] lg:order-last">
                <img in:blur={{amount: 100, duration: 800, delay: 100}} class="object-cover w-full" alt="Me" src="/profilepic.jpg"/>
                <div class="absolute top-0 left-0 w-full h-full fade-corner"></div>
            </div>
            <div transition:fly={{y: 300, duration: 800}} class="flex flex-col gap-8 lg:order-first">
                <div in:blur={{amount: 100, duration: 800}} 
                    class="flex flex-col gap-2 text-light-accent w-full h-full
                    relative inline-block
                    before:content-['']
                    before:absolute
                    before:inset-0
                    before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_50%,rgba(255,255,255,0.7)_80%)]
                    before:pointer-events-none
                    before:dark:bg-[radial-gradient(circle_at_center,rgba(19,19,19,0)_10%,rgba(19,19,19,0.4)_95%)]
                    dark:text-dark-accent"
                >
                    <h1 class="md:text-[100px] sm:text-[78px] text-[64px]">Allaine Tan</h1>
                    <h1 class="md:text-[100px] sm:text-[78px] text-[64px]">鄭俐嫻</h1>    
                </div>
                <span in:blur={{amount: 100, duration: 800, delay:100}}  class="flex flex-col gap-4">
                    <p>I’m a designer and developer based in Manila, Philippines.</p>
                    <p>For the longest time, I’ve always had the notion that design was just “prettying things up”. Clearly, it isn’t the case. I saw how important it was for technology to be accessible to all.</p>
                    <p>Now, I build products for local communities and I make sure that design fits in seamlessly. I aspire to build stuff that are a joy to use.</p>
                </span>
            </div>

        </section>

        <!-- EDUFATION SECTION -->
        <span transition:fly={{y: 300, duration: 800, delay: 200}}>
            <span in:blur={{amount: 100, duration: 800, delay: 200}}>
                <Divider>EDUCATION</Divider>
            </span>
        </span>

        <section class="grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:max-h-[700px]">
            <div transition:fly={{y: 300, duration: 800, delay: 400}} class="relative flex items-stretch overflow-hidden max-h-[700px] rounded-[20px]">
                <img in:blur={{amount: 100, duration: 800, delay: 400}} class="object-cover w-full" alt="UP Diliman in grad season" src="/hobbies/upd.png"/>
                <div class="absolute top-0 left-0 w-full h-full fade-corner-right"></div>
            </div>
            <span transition:fly={{y: 300, duration: 800, delay: 300}}>
                <div in:blur={{amount: 100, duration: 800, delay: 300}} class="flex flex-col gap-4">
                    <span>
                        <h2 class="text-light-text dark:text-dark-text">University of the Philippines</h2>
                        <h2 class="text-light-accent dark:text-dark-accent">College of Engineering</h2>
                    </span>
                    <h5>Bachelor of Science in Computer Science</h5>
                    <p>I owe my work ethic and principles to the University of the Philippines, by surrounding me with computer scientists who I have nothing but uttmost respect for and who I aspire to be one day. Teaching me how computers are built from the ground up, what exactly it means for something to compute, and how to tell these computers what to do in an elegant way. I went to UP knowing nothing about computer science and I left seeing how beautiful it all is.</p>
                </div>
            </span>
        </section>

        <!-- DESIGN PHILOSOPHIES SECTION -->
        <span transition:fly={{y: 300, duration: 800, delay: 500}}>
            <span in:blur={{amount: 100, duration: 800, delay: 500}}>
                <Divider>DESIGN PHILOSOPHIES</Divider>
            </span>
        </span>

        <section transition:fly={{y: 300, duration: 800, delay: 600}} class="grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:max-h-[700px]">
            <div in:blur={{amount: 100, duration: 800, delay: 600}} class="flex flex-col gap-2">
                <h5>Less Research, More Building</h5>
                <p>I believe that great products are built entirely for users. I don’t want to sell promises of an idea, or the future. Build, then get feedback from real users, then iterate.</p>
            </div>
            <div in:blur={{amount: 100, duration: 800, delay: 600}} class="flex flex-col gap-2">
                <h5>Less Research, More Building</h5>
                <p>I believe that great products are built entirely for users. I don’t want to sell promises of an idea, or the future. Build, then get feedback from real users, then iterate.</p>
            </div>
        </section>

        <!-- HOBBIES SECTION -->
        <span transition:fly={{y: 300, duration: 800, delay: 700}}>
            <span in:blur={{amount: 100, duration: 800, delay: 700}}>
                <Divider>THINGS I LOVE TO DO AWAY FROM THE KEYBOARD</Divider>
            </span>
        </span>

        <section class="grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:max-h-[700px] ">
            <div class="flex flex-col gap-2 items-left justify-left">
                <button transition:fly={{y: 300, duration: 800, delay: 800}} class={hobby == "travel"? "text-left" : "text-left text-light-accent"} on:click={()=>{hobby="travel"; hobbySrc="/hobbies/travel.jpg"}}>
                    <h2 in:blur={{amount: 100, duration: 800, delay: 800}}>Travelling</h2>
                </button>
                <button transition:fly={{y: 300, duration: 800, delay: 900}} class={hobby == "knit"? "text-left" : "text-left text-light-accent"} on:click={()=>{hobby="knit"; hobbySrc="/hobbies/knit.jpg"}}>
                    <h2 in:blur={{amount: 100, duration: 800, delay: 900}}>Knitting/Crocheting</h2>
                </button>
                <button transition:fly={{y: 300, duration: 800, delay: 1000}} class={hobby == "lang"? "text-left" : "text-left text-light-accent"} on:click={()=>{hobby="lang"; hobbySrc="/hobbies/lang.jpg"}}>
                    <h2 in:blur={{amount: 100, duration: 800, delay: 1000}}>Learning Languages</h2>
                </button>
                <button transition:fly={{y: 300, duration: 800, delay: 1100}} class={hobby == "bike"? "text-left" : "text-left text-light-accent"} on:click={()=>{hobby="bike"; hobbySrc="/hobbies/bike.jpg"}}>
                    <h2 in:blur={{amount: 100, duration: 800, delay: 1100}}>Biking</h2>
                </button>
            </div>

            {#key hobbySrc}
                <div class="relative overflow-hidden max-h-[600px] rounded-[20px] lg:order-last">
                    <img 
                        class="object-cover w-full transition-opacity duration-500 ease-in-out" alt="Me" 
                        src={hobbySrc}
                    />
                    <div class="absolute top-0 left-0 w-full h-full fade-corner"></div>
                </div>
            {/key}
        </section>
    </section>
    <div class="hidden masked-text-dark"></div>    
    <div class="hidden dark"></div>

{/if}

<style lang="scss">
    .fade-corner-right::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top right,  rgba(255, 255, 255, 0.9) , rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.9));
        pointer-events: none; 
    }

    .fade-corner::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top left,  rgba(255, 255, 255, 0.8) , rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.8));
        pointer-events: none; 
    }
</style>