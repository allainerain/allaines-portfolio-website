<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';
    export let data;

    console.log(data)
</script>

<BlogPost {data} />