<svelte:head>
    <title>Allaine Tan</title> 
</svelte:head>

<script>
    import { blogPosts } from '$lib/stores/blogStores.js';
	import '../app.pcss';
    import Footer from '$lib/components/Footer.svelte';
    import Navbar from "$lib/components/Navbar.svelte";

    export let data;  

    async function fetchAndSetBlogPosts() {
        blogPosts.set(data.posts.results); // Set initial blog posts
    }

    fetchAndSetBlogPosts();
</script>

<Navbar></Navbar>
<body class="flex w-full items-center justify-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
    <slot/>
</body>
<Footer></Footer>

<style global>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url('https://fonts.cdnfonts.com/css/giom-mod');
@import url('https://fonts.cdnfonts.com/css/casftego');
@import url('https://fonts.cdnfonts.com/css/opsi');
@import url('https://fonts.cdnfonts.com/css/kemilash');
@import url('https://fonts.cdnfonts.com/css/hogbine');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body{
    font-family: "SF Pro Display", sans-serif;
}
</style>