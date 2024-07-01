<script lang="ts">
    import { fly } from "svelte/transition";
    import { onMount } from 'svelte';

	import BlogPost from '$lib/components/blog/BlogPost.svelte';

    export let data;    

    let ready = false;
    onMount(() => {
        ready = true
    });

    $: postDataPromise = data.postData;
</script>


{#await postDataPromise}
    {#if ready}
        <section transition:fly={{y: -300, duration: 500, opacity: 1}} class="fixed top-0 left-0 w-screen h-screen z-50 flex flex-col gap-8 items-center justify-center bg-light-background dark:bg-dark-background">
                <p>Fetching blog post!</p>
                <span class="loader"></span>
        </section>
    {/if}
{:then postData}
    <section transition:fly={{y: 300, duration: 500, opacity: 1}} class="grid gap-12 items-center justify-center max-w-[1300px] w-[90%]">
        <section class="grid gap-4 md:mt-40 mt-10">
            <BlogPost data={postData} />
        </section>
    </section>
{/await}


<style>
    .loader {
        width: 100%;
        height: 2.5px;
        position: relative;
        background: #EDEDED;
        overflow: hidden;
    }
    
    .loader::after {
        content: '';
        width: 100%; /* Adjust width as needed */
        height: 100%;
        background: #808080;
        position: absolute;
        top: 0;
        left: -100%; /* Initial position outside the loader */
        animation: animloader 2s linear infinite;
        box-sizing: border-box;
    }
    
    @keyframes animloader {
      0% {
        left: -100%; /* Starting position */
        transform: translateX(0);
      }
      100% {
        left: 100%; /* Ending position */
        transform: translateX(0);
      }
    }
</style>