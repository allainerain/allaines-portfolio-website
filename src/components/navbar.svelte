<script>
    import ThemeSwitch from "./ThemeSwitch.svelte";
</script>

<div class="
    flex fixed w-full items-center justify-center h-[100px] z-50 pt-8
    md:top-0
    max-md:bottom-0 max-md:left-0 max-md:right-0 
    bg-gradient-to-t from-light-background to-transparent
    dark:from-dark-background to-transparent
    md:bg-gradient-to-b
">
    <div class="
        inline-flex gap-4 bg-light-background items-center justify-center border m-4 p-4 rounded-lg border-1 border-dark-accent/[0.2]
        max-md:w-[80%] max-md:ml-[5%]
        dark:bg-dark-background dark:text-dark-text
    ">
        <a href="/" class="px-3 py-1"> Home </a>
        <a href="/about" class="px-3 py-1"> About </a>
        <ThemeSwitch />
        <a href="/works" class="px-3 py-1"> Works </a>
        <a href="/blog" class="px-3 py-1"> Blog </a>
    </div>
</div>