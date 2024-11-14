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
    export let github = "none";
    export let figma = "none";
    export let live = "none";
    export let case_study = "none";

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

</script>

<button class="grid gap-4" on:click={() => selected = true}>
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
        class="fixed top-0 left-0 h-screen w-full bg-[#FBFBFB] dark:bg-[#070707] z-50 flex justify-center overflow-y-auto"
    >
    <div class="flex flex-col max-w-[900px] w-[90%] max-h-screen ">
        <!-- Exit Button -->
        <div class="fixed top-0 right-0 z-40 m-8 text-light-text dark:text-dark-text">
            <button on:click={() => selected = false}>
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
