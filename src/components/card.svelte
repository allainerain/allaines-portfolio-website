<script>
    export let title;
    export let description;
    export let imgsrc;
    export let link;
</script>

<a class="grid gap-4" href={link}>
    <div class="rounded-lg border border-[3px] border-light-accent border-opacity-[20%] overflow-hidden">
        <img class="w-full h-full transition-transform duration-300 hover:scale-[102%]"
        src={imgsrc} alt={title}
    />
    </div>

    <div class="grid gap-2 text-left">
        <h3>{title}</h3>
        <h4 class="text-light-accent dark:text-dark-accent">{description}</h4>
    </div>
</a>