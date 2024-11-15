<script>
    import Project from "./Project.svelte";
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { Icon, XMark } from "svelte-hero-icons";
    import { onMount } from "svelte";

    export let title;
    export let description;
    export let imgsrc;
    export let selected = false;
    export let id;

    export let long_description;
    export let github = null;
    export let figma = null;
    export let live = null;
    export let case_study = null;

    export let tools;
    export let team;
    export let roles;
    export let timeline;

    let gallery_items = [];

    let berdebox = [
        '/works/berdebox/4.png',
        '/works/berdebox/5.png',
    ];

    let suse = [
        '/works/suse/1.png',
        '/works/suse/2.png',
        '/works/suse/3.png',
        '/works/suse/4.png',
        '/works/suse/5.png',
    ];

    function selectGalleryItems(id) {
        switch (id) {
            case 'berdebox':
                gallery_items = berdebox;
                break;
            case 'suse':
                gallery_items = suse;
                break;
            default:
                gallery_items = [];
        }
    }
    
    onMount(() => {
        selectGalleryItems(id);
    });

    let scroll = true;

    $: {
        if (!scroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function disableScroll() {
        scroll = false;
        selected = true;
    }

    function enableScroll() {
        scroll = true;
        selected = false;
    }

</script>

<button class="grid gap-4" on:click={disableScroll}>
    <div class="rounded-lg border border-[2px] border-light-accent border-opacity-[20%] overflow-hidden">
        <img class="w-full h-full transition-transform duration-300 hover:scale-[102%]"
        src={imgsrc} alt={title}
    />
    </div>

    <div class="grid gap-2 text-left">
        <h3>{title}</h3>
        <h4 class="text-light-accent dark:text-dark-accent">{description}</h4>
    </div>
</button>

{#if selected}
    <!-- Project preview -->
    <div
        transition:fly={{ duration: 300, easing: quintOut, y: 1000 }}
        class="fixed top-0 left-0 w-full bg-[#FBFBFB] dark:bg-[#070707] z-50 flex justify-center h-dvh overflow-y-auto"
    >
    <div class="flex flex-col max-w-[900px] w-[90%]">
        <!-- Exit Button -->
        <div class="fixed top-0 right-0 z-40 m-8 text-light-text dark:text-dark-text bg-[#FBFBFB] rounded-[1000px]">
            <button class="flex items-center p-2 backdrop-blur-sm rounded-[1000px]" on:click={enableScroll}>
                <Icon src={XMark} size="40"/>
            </button>
        </div>

        <!-- Content -->
        <div class="grid gap-12 items-center justify-center py-8">
            <Project
                title={title}
                description={long_description}
                {gallery_items}
                {github}
                {figma}
                {live}
                {case_study}
                {tools}
                {team}
                {roles}
                {timeline}
            />
        </div>
    </div>
</div>
{/if}