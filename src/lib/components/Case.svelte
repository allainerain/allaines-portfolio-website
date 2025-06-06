<script>
    import { goto } from "$app/navigation";

    export let title;
    export let description;
    export let imgsrc;
    export let cursor_text;
    export let link = "";

    let showPill = false;
    let x = 0;
    let y = 0;

    function handleMouseMove(event) {
        x = event.clientX;
        y = event.clientY;
    }

    function handleMouseEnter() {
        showPill = true;
    }

    function handleMouseLeave() {
        showPill = false;
    }
</script>

<style>
    .cursor-pill {
        pointer-events: none;
        transition: opacity 0.2s ease;
    }
</style>

<div
    class="relative"
    role="presentation"
    on:mousemove={handleMouseMove}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
    <button
        class="flex flex-col items-start gap-4 text-left w-full"
        on:click={() => goto(link)}
    >
        <!-- Fixed image container -->
        <div class="w-full aspect-square rounded-lg border border-[1px] border-light-accent border-opacity-[20%] overflow-hidden">
            <img
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-[102%]"
                src={imgsrc}
                alt={title}
            />
        </div>

        <!-- Text section -->
        <div class="space-y-1">
            <h3>{title}</h3>
            <h5 class="text-light-accent dark:text-dark-accent">{description}</h5>
        </div>
    </button>

    <!-- Cursor-following pill -->
    {#if showPill}
        <div
            class="cursor-pill fixed z-50 px-4 py-1 text-sm rounded-full bg-black text-white backdrop-blur-sm shadow-lg"
            style="top: {y + 15}px; left: {x + 15}px; opacity: 1"
        >
            {cursor_text}
        </div>
    {/if}
</div>
