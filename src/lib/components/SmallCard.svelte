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

    export let small = 'false';
    // Centralized gallery mapping
    const galleryMap = {
        mask_patrol: [
            '/works/mask-patrol/1.png',
            '/works/mask-patrol/2.png'
        ],
        abscbn: [
            '/works/abscbn/1.png',
            '/works/abscbn/2.png',
            '/works/abscbn/3.png',
            '/works/abscbn/4.png',
            '/works/abscbn/5.png',
        ],
        gdsc: [
            '/works/gdsc/gdsc1.png',
            '/works/gdsc/gdsc2.png',
            '/works/gdsc/gdsc3.png',
            '/works/gdsc/gdsc4.png',
            '/works/gdsc/gdsc5.png',
            '/works/gdsc/gdsc6.png',
        ],
        forent_web: [
            '/works/forent-web/1.png',
            '/works/forent-web/2.png',
            '/works/forent-web/3.png',
            '/works/forent-web/4.png',
            '/works/forent-web/5.png',
            '/works/forent-web/6.png',
            '/works/forent-web/7.png',
            '/works/forent-web/8.png',
        ],
        forent_app: [
            '/works/forent-app/1.png',
            '/works/forent-app/2.png',
            '/works/forent-app/3.png',
            '/works/forent-app/4.png'
        ],
        hb: [
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
        ],
        berdebox_web: [
            '/works/berdebox/1.png',
            '/works/berdebox/2.png',
            '/works/berdebox/3.png'
        ],
        berdebox_app: [
            '/works/berdebox/4.png',
            '/works/berdebox/5.png',
        ],
        suse: [
            '/works/suse/1.png',
            '/works/suse/2.png',
            '/works/suse/3.png',
            '/works/suse/4.png',
            '/works/suse/5.png',
        ],
        enfa: [
            '/works/enfa/1.png',
            '/works/enfa/2.png',
            '/works/enfa/3.png',
            '/works/enfa/4.png',
            '/works/enfa/5.png',
        ],
        abscbn_conf: [
            '/works/abscbn_conf/1.png',
            '/works/abscbn_conf/2.png'
        ],
        suse_conf: [
            '/works/suse_conf/1.png',
            '/works/suse_conf/2.png',
            '/works/suse_conf/3.png'
        ],
        eba_conf: [
            '/works/eba_conf/1.png',
            '/works/eba_conf/2.png',
            '/works/eba_conf/3.png'
        ],
        abm: [
            '/works/abm/1.png'
        ]
    };

    let gallery_items = [];

    onMount(() => {
        gallery_items = galleryMap[id] || [];
    });

    let selected = false;
    let scroll = true;

    $: {
        document.body.style.overflow = scroll ? '' : 'hidden';
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

{#if small == "true"}
	<div class="flex flex-col h-full border rounded-lg p-4 shadow-sm">
        {#if videosrc}
            <video 
                playsinline 
                autoplay 
                loop 
                muted 
                class="w-full h-[100px] object-cover transition-transform duration-300 hover:scale-[102%] rounded"
            >
                <source src={videosrc} type="video/mp4" />
                <track kind="captions" />
                Your browser does not support the video tag.
            </video>
        {:else if imgsrc}
            <img
                class="w-full h-[100px] object-cover transition-transform duration-300 hover:scale-105 rounded"
                src={imgsrc}
                alt={title}
            />
        {/if}
	</div>
{:else}
<button on:click={disableScroll}>
    <div class="grid gap-4">
        <div class="rounded-lg border border-[1px] border-light-accent border-opacity-[20%] overflow-hidden aspect-square">
            {#if videosrc}
                <video 
                    playsinline 
                    autoplay 
                    loop 
                    muted
                    class="w-full h-full object-cover transition-transform duration-300 hover:scale-[102%]"
                >
                    <source src={videosrc} type="video/mp4" />
                    <track kind="captions" />
                    Your browser does not support the video tag.
                </video>
            {:else if imgsrc}
                <img 
                    class="w-full h-full object-cover transition-transform duration-300 hover:scale-[102%]"
                    src={imgsrc}
                    alt={title}
                />
            {/if}
        </div>

        <div class="grid gap-2 text-left">
            <h6 class="text-lg">{title}</h6>
            <p>{description}</p>
        </div>
    </div>
</button>
{/if}

{#if selected}
    <div
        transition:fly={{ duration: 300, easing: quintOut, y: 1000 }}
        class="fixed top-0 left-0 w-full bg-[#FBFBFB] dark:bg-[#070707] z-50 flex justify-center h-dvh overflow-y-auto"
    >
        <div class="flex flex-col max-w-[900px] w-[90%]">
            <div class="fixed top-0 right-0 z-40 m-8 text-light-text dark:text-dark-text bg-[#FBFBFB] rounded-[1000px]">
                <button class="flex items-center p-2 backdrop-blur-sm rounded-[1000px]" on:click={enableScroll}>
                    <Icon src={XMark} size="40" />
                </button>
            </div>

            <!-- Case Goes Here -->
            <div class="grid gap-12 items-center justify-center py-8">
                <slot></slot>
            </div>
        </div>
    </div>
{/if}
