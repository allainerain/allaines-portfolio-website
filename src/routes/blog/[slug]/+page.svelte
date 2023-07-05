<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';
    export let data;

    // console.log("DATA IN SVELTE", data)
</script>

<BlogPost {data} />