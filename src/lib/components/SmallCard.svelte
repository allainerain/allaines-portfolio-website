<script>
    import Project from "./Project.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { Icon, XMark } from "svelte-hero-icons";

    export let id;
    export let title;
    export let description;
    export let imgsrc;
    export let videosrc;

    export let long_description;
    export let github = "none";
    export let figma = "none";
    export let live = "none";
    export let case_study = "none";

    
    let mask_patrol = [
        '/works/mask-patrol/1.png',
        '/works/mask-patrol/2.png'
    ];

    let abscbn = [
        '/works/abscbn/1.png',
        '/works/abscbn/2.png',
        '/works/abscbn/3.png',
        '/works/abscbn/4.png',
        '/works/abscbn/5.png',
    ];

    let gdsc = [
        '/works/gdsc/gdsc1.png',
        '/works/gdsc/gdsc2.png',
        '/works/gdsc/gdsc3.png',
        '/works/gdsc/gdsc4.png',
        '/works/gdsc/gdsc5.png',
        '/works/gdsc/gdsc6.png',
    ];

    let forent_web = [
        '/works/forent-web/1.png',
        '/works/forent-web/2.png',
        '/works/forent-web/3.png',
        '/works/forent-web/4.png',
        '/works/forent-web/5.png',
        '/works/forent-web/6.png',
        '/works/forent-web/7.png',
        '/works/forent-web/8.png',
    ];

    let forent_app = [
        '/works/forent-app/1.png',
        '/works/forent-app/2.png',
        '/works/forent-app/3.png',
        '/works/forent-app/4.png'
    ];

    let hb =[
        '/works/hb/1.png',
        '/works/hb/2.png',
        '/works/hb/3.png',
        '/works/hb/4.png',
        '/works/hb/5.png',
        '/works/hb/6.png',
        '/works/hb/7.png',
        '/works/hb/8.png',
        '/works/hb/9.png',
        '/works/hb/10.png'
    ];

    let berdebox_app = [
        '/works/berdebox/4.png',
        '/works/berdebox/5.png',
    ];

    let berdebox_web = [
        '/works/berdebox/1.png',
        '/works/berdebox/2.png',
        '/works/berdebox/3.png'
    ];

    let suse = [
        '/works/suse/1.png',
        '/works/suse/2.png',
        '/works/suse/3.png',
        '/works/suse/4.png',
        '/works/suse/5.png',
    ];

    let abscbn_conf = [
        '/works/abscbn_conf/1.png',
        '/works/abscbn_conf/2.png'
    ];

    let suse_conf = [
        '/works/suse_conf/1.png',
        '/works/suse_conf/2.png',
        '/works/suse_conf/3.png'
    ];

    let eba_conf = [
        '/works/eba_conf/1.png',
        '/works/eba_conf/2.png',
        '/works/eba_conf/3.png'
    ];

    let abm = [
        '/works/abm/1.png'
    ];

    let selected = false;
    let gallery_items = [];

    // Function to select the appropriate array based on id
    function selectGalleryItems(id) {
        switch (id) {
            case 'mask_patrol':
                gallery_items = mask_patrol;
                break;
            case 'abscbn':
                gallery_items = abscbn;
                break;
            case 'gdsc':
                gallery_items = gdsc;
                break;
            case 'forent_web':
                gallery_items = forent_web;
                break;
            case 'forent_app':
                gallery_items = forent_app;
                break;
            case 'hb':
                gallery_items = hb;
                break;
            case 'berdebox':
                gallery_items = berdebox;
                break;
            case 'suse':
                gallery_items = suse;
                break;
            case 'abscbn_conf':
                gallery_items = abscbn_conf;
                break;
            case 'suse_conf':
                gallery_items = suse_conf;
                break;
            case 'eba_conf':
                gallery_items = eba_conf;
                break;
            case 'berdebox_web':
                gallery_items = berdebox_web;
                break;
            case 'berdebox_app':
                gallery_items = berdebox_app;
                break;
            case 'abm':
                gallery_items = abm;
                break;
            default:
                gallery_items = [];
        }
    }

    onMount(() => {
        selectGalleryItems(id);
    });
</script>

<button on:click={() => selected = true}>
    <div class="grid gap-4">
        <div class="rounded-lg border border-[1px] border-light-accent border-opacity-[20%] overflow-hidden">
            
            {#if imgsrc != ""}
                <img class="w-full h-full transition-transform duration-300 hover:scale-[102%]"
                    src={imgsrc} alt={title}
                />
            {/if}
            {#if videosrc != ""}
                <video playsinline autoplay loop class="transition-transform duration-300 hover:scale-[102%]">
                    <source src={videosrc} type="video/mp4">
                    <track kind="captions">
                    Your browser does not support the video tag.
                </video>
            {/if}
        </div>

        <div class="grid gap-2 text-left">
            <h5>{title}</h5>
            <p class="text-light-accent dark:text-dark-accent">{description}</p>
        </div>
    </div>
</button>

{#if selected}
    <!-- Project preview -->
    <div transition:fly={{ duration: 300, easing: quintOut, y: 1000 }} class="fixed top-0 left-0 h-screen w-full bg-[#FBFBFB] dark:bg-[#070707] z-50 overflow-hidden flex justify-center">
        <div class="flex flex-col max-w-[900px] w-[90%]">
            <!-- Exit button-->
            <div class="fixed top-0 right-0 z-40 m-8 text-light-text dark:text-dark-text">
                <button on:click={() => selected = false}>
                    <Icon src={XMark}  size="40"/>
                </button>
            </div>

            <!-- Content -->
            <div class="grid gap-12 items-center justify-center">
                <Project
                    title={title}
                    description={long_description}
                    {gallery_items}
                    {github}
                    {figma}
                    {live}
                    {case_study}
                />
            </div>
        </div>
    </div>
{/if}