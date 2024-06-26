<script>
    import Divider from "../../components/Divider.svelte";
    let failure = false;

    let hobby = 'knit'
    let hobbySrc = '/hobbies/knit.jpg'

</script>

<section class="grid gap-12 items-center justify-center max-w-[1300px] w-[90%]">

    <!-- INTRO SECTION -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:mt-40 mt-10">
        <div class="relative overflow-hidden max-h-[600px] rounded-[20px] lg:order-last">
            <img class="object-cover w-full" alt="Me" src="/profilepic.jpg"/>
            <div class="absolute top-0 left-0 w-full h-full fade-corner"></div>
        </div>
        <div class="flex flex-col gap-8 lg:order-first">
            <span class="flex flex-col gap-2 text-light-accent">
                <h1>Allaine Tan</h1>
                <h1>鄭俐嫻</h1>
            </span>
            <span class="flex flex-col gap-4">
                <p>I’m a designer based in Manila, Philippines.</p>
                <p>For the longest time, I’ve always had the notion that design was just “prettying things up”. Clearly, it isn’t the case. I saw how important it was for technology to be accessible to all.</p>
                <p>Now, I build products for local communities and I make sure that design fits in seamlessly. I aspire to build stuff that are a joy to use.</p>
            </span>
        </div>

    </section>

    <!-- EDUFATION SECTION -->
    <Divider text={"EDUCATION"} />

    <section class="grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:max-h-[700px]">
        <div class="flex items-stretch overflow-hidden max-h-[700px]">
            <img class="object-cover w-full" alt="Me" src="/"/>
        </div>
        <div class="flex flex-col gap-4">
            <span>
                <h2 class="text-light-text">University of the Philippines</h2>
                <h2 class="text-light-accent">College of Engineering</h2>
            </span>
            <h5>Bachelor of Science in Computer Science</h5>
            <p>I owe my work ethic and principles to the University of the Philippines, by surrounding me with computer scientists who I have nothing but uttmost respect for and who I aspire to be one day. Teaching me how computers are built from the ground up, what exactly it means for something to compute, and how to tell these computers what to do in an elegant way. I went to UP knowing nothing about computer science and I left seeing how beautiful it all is.</p>
        </div>
    </section>

    <!-- DESIGN PHILOSOPHIES SECTION -->
    <Divider text={"DESIGN PHILOSOPHIES"} />

    <section class="grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:max-h-[700px]">
        <div class="flex flex-col gap-2">
            <h5>Less Research, More Building</h5>
            <p>I believe that great products are built entirely for users. I don’t want to sell promises of an idea, or the future. Build, then get feedback from real users, then iterate.</p>
        </div>
        <div class="flex flex-col gap-2">
            <h5>Less Research, More Building</h5>
            <p>I believe that great products are built entirely for users. I don’t want to sell promises of an idea, or the future. Build, then get feedback from real users, then iterate.</p>
        </div>
    </section>

    <!-- HOBBIES SECTION -->
    <Divider text={"THINGS I LOVE TO DO AWAY FROM THE KEYBOARD"} />

    <section class="grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:max-h-[700px] ">
        <div class="flex flex-col gap-2 items-left justify-left">
            <button class={hobby == "knit"? "text-left" : "text-left text-light-accent"} on:click={()=>{hobby="knit"; hobbySrc="/hobbies/knit.jpg"}}>
                <h2>Knitting/Crocheting</h2>
            </button>
            <button class={hobby == "travel"? "text-left" : "text-left text-light-accent"} on:click={()=>{hobby="travel"; hobbySrc="/hobbies/travel.jpg"}}>
                <h2>Travelling</h2>
            </button>
            <button class={hobby == "lang"? "text-left" : "text-left text-light-accent"} on:click={()=>{hobby="lang"; hobbySrc="/hobbies/lang.jpg"}}>
                <h2>Learning Languages</h2>
            </button>
            <button class={hobby == "bike"? "text-left" : "text-left text-light-accent"} on:click={()=>{hobby="bike"; hobbySrc="/hobbies/bike.jpg"}}>
                <h2>Biking</h2>
            </button>
        </div>

        <div class="relative overflow-hidden max-h-[600px] rounded-[20px] lg:order-last">
            <img class="object-cover w-full" alt="Me" src={hobbySrc}/>
            <div class="absolute top-0 left-0 w-full h-full fade-corner"></div>
        </div>
    </section>
</section>


<style>
    .fade-corner::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top left, #ffffffff, rgba(255, 255, 255, 0.1) 40%, #ffffffff);
        pointer-events: none; 
    }
</style>