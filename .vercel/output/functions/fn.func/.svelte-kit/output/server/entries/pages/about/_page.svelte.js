import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".fade-corner-right.svelte-hkx9zn::after{content:'';position:absolute;width:100%;height:100%;background:linear-gradient(to top right,  rgba(255, 255, 255, 0.9) , rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.9));pointer-events:none}.fade-corner.svelte-hkx9zn::after{content:'';position:absolute;width:100%;height:100%;background:linear-gradient(to top left,  rgba(255, 255, 255, 0.8) , rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.8));pointer-events:none}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import { fly, blur } from \\"svelte/transition\\";\\r\\n    import { onMount } from \\"svelte\\";\\r\\n\\r\\n    import Divider from \\"$lib/components/Divider.svelte\\";\\r\\n\\r\\n    let hobby = 'travel'\\r\\n    let hobbySrc = '/hobbies/travel.jpg'\\r\\n    let ready = false;\\r\\n\\r\\n    onMount(() => ready = true);\\r\\n\\r\\n<\/script>\\r\\n\\r\\n{#if ready}\\r\\n    <section class=\\"grid gap-12 items-center justify-center max-w-[1300px] w-[90%]\\">\\r\\n\\r\\n        <!-- INTRO SECTION -->\\r\\n        <section class=\\"grid grid-cols-1 lg:grid-cols-2 gap-16 md:mt-40 mt-10\\">\\r\\n            <div transition:fly={{y: 300, duration: 800, delay: 100}} class=\\"relative overflow-hidden max-h-[600px] rounded-[20px] lg:order-last\\">\\r\\n                <img in:blur={{amount: 100, duration: 800, delay: 100}} class=\\"object-cover w-full\\" alt=\\"Me\\" src=\\"/profilepic.jpg\\"/>\\r\\n                <div class=\\"absolute top-0 left-0 w-full h-full fade-corner\\"></div>\\r\\n            </div>\\r\\n            <div transition:fly={{y: 300, duration: 800}} class=\\"flex flex-col gap-8 lg:order-first\\">\\r\\n                <div in:blur={{amount: 100, duration: 800}} \\r\\n                    class=\\"flex flex-col gap-2 text-light-accent w-full h-full\\r\\n                    relative inline-block\\r\\n                    before:content-['']\\r\\n                    before:absolute\\r\\n                    before:inset-0\\r\\n                    before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_50%,rgba(255,255,255,0.7)_80%)]\\r\\n                    before:pointer-events-none\\r\\n                    before:dark:bg-[radial-gradient(circle_at_center,rgba(19,19,19,0)_10%,rgba(19,19,19,0.4)_95%)]\\r\\n                    dark:text-dark-accent\\"\\r\\n                >\\r\\n                    <h1 class=\\"md:text-[100px] sm:text-[78px] text-[64px]\\">Allaine Tan</h1>\\r\\n                    <h1 class=\\"md:text-[100px] sm:text-[78px] text-[64px]\\">鄭俐嫻</h1>    \\r\\n                </div>\\r\\n                <span in:blur={{amount: 100, duration: 800, delay:100}}  class=\\"flex flex-col gap-4\\">\\r\\n                    <p>I’m a designer and developer based in Manila, Philippines.</p>\\r\\n                    <p>For the longest time, I’ve always had the notion that design was just “prettying things up”. Clearly, it isn’t the case. I saw how important it was for technology to be accessible to all.</p>\\r\\n                    <p>Now, I build products for local communities and I make sure that design fits in seamlessly. I aspire to build stuff that are a joy to use.</p>\\r\\n                </span>\\r\\n            </div>\\r\\n\\r\\n        </section>\\r\\n\\r\\n        <!-- EDUFATION SECTION -->\\r\\n        <span transition:fly={{y: 300, duration: 800, delay: 200}}>\\r\\n            <span in:blur={{amount: 100, duration: 800, delay: 200}}>\\r\\n                <Divider>EDUCATION</Divider>\\r\\n            </span>\\r\\n        </span>\\r\\n\\r\\n        <section class=\\"grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:max-h-[700px]\\">\\r\\n            <div transition:fly={{y: 300, duration: 800, delay: 400}} class=\\"relative flex items-stretch overflow-hidden max-h-[700px] rounded-[20px]\\">\\r\\n                <img in:blur={{amount: 100, duration: 800, delay: 400}} class=\\"object-cover w-full\\" alt=\\"UP Diliman in grad season\\" src=\\"/hobbies/upd.png\\"/>\\r\\n                <div class=\\"absolute top-0 left-0 w-full h-full fade-corner-right\\"></div>\\r\\n            </div>\\r\\n            <span transition:fly={{y: 300, duration: 800, delay: 300}}>\\r\\n                <div in:blur={{amount: 100, duration: 800, delay: 300}} class=\\"flex flex-col gap-4\\">\\r\\n                    <span>\\r\\n                        <h2 class=\\"text-light-text dark:text-dark-text\\">University of the Philippines</h2>\\r\\n                        <h2 class=\\"text-light-accent dark:text-dark-accent\\">College of Engineering</h2>\\r\\n                    </span>\\r\\n                    <h5>Bachelor of Science in Computer Science</h5>\\r\\n                    <p>\\r\\n                        I owe my work ethic and principles to the University of the Philippines, which surrounded me with computer scientists for whom I have nothing but utmost respect and whom I aspire to be like one day. I went to UP thinking computer science was all about software development, but I left with an appreciation for design -- of systems, of computation, and how everything is built from the ground up to what we use today. Most of all, this was where I saw the immense talent of computer scientists in the Philippines, and I hope to show that to the world.\\r\\n                    </p>\\r\\n                </div>\\r\\n            </span>\\r\\n        </section>\\r\\n\\r\\n        <!-- DESIGN PHILOSOPHIES SECTION -->\\r\\n        <span transition:fly={{y: 300, duration: 800, delay: 500}}>\\r\\n            <span in:blur={{amount: 100, duration: 800, delay: 500}}>\\r\\n                <Divider>DESIGN PHILOSOPHIES</Divider>\\r\\n            </span>\\r\\n        </span>\\r\\n\\r\\n        <section transition:fly={{y: 300, duration: 800, delay: 600}} class=\\"grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:max-h-[700px]\\">\\r\\n            <div in:blur={{amount: 100, duration: 800, delay: 600}} class=\\"flex flex-col gap-2\\">\\r\\n                <h5>Less planning, more building</h5>\\r\\n                <p>\\r\\n                    I believe that great products are built entirely for users. I don't want to sell promises of an idea or the future. Just as in life, planning can only take you so far. I want to build, get feedback from real users, and then iterate (Read: Getting Real by Basecamp).\\r\\n                </p>\\r\\n            </div>\\r\\n            <div in:blur={{amount: 100, duration: 800, delay: 600}} class=\\"flex flex-col gap-2\\">\\r\\n                <h5>Jack-of-all trades, better than a master of one</h5>\\r\\n                <p>\\r\\n                    I never know how to introduce myself -- a product designer, UI designer, UX researcher, frontend developer, AI practitioner? But I embrace it. I believe that great products come from the intersection of many disciplines. I am a builder of things; my versatile mediums for building only make me more creative.\\r\\n                </p>\\r\\n            </div>\\r\\n        </section>\\r\\n\\r\\n        <!-- HOBBIES SECTION -->\\r\\n        <span transition:fly={{y: 300, duration: 800, delay: 700}}>\\r\\n            <span in:blur={{amount: 100, duration: 800, delay: 700}}>\\r\\n                <Divider>THINGS I LOVE TO DO AWAY FROM THE KEYBOARD</Divider>\\r\\n            </span>\\r\\n        </span>\\r\\n\\r\\n        <section class=\\"grid grid-cols-1 lg:grid-cols-2 w-full gap-16 lg:max-h-[700px] \\">\\r\\n            <div class=\\"flex flex-col gap-2 items-left justify-left\\">\\r\\n                <button transition:fly={{y: 300, duration: 800, delay: 800}} class={hobby == \\"travel\\"? \\"text-left\\" : \\"text-left text-light-accent\\"} on:click={()=>{hobby=\\"travel\\"; hobbySrc=\\"/hobbies/travel.jpg\\"}}>\\r\\n                    <h2 in:blur={{amount: 100, duration: 800, delay: 800}}>Travelling</h2>\\r\\n                </button>\\r\\n                <button transition:fly={{y: 300, duration: 800, delay: 900}} class={hobby == \\"knit\\"? \\"text-left\\" : \\"text-left text-light-accent\\"} on:click={()=>{hobby=\\"knit\\"; hobbySrc=\\"/hobbies/knit.jpg\\"}}>\\r\\n                    <h2 in:blur={{amount: 100, duration: 800, delay: 900}}>Knitting/Crocheting</h2>\\r\\n                </button>\\r\\n                <button transition:fly={{y: 300, duration: 800, delay: 1000}} class={hobby == \\"lang\\"? \\"text-left\\" : \\"text-left text-light-accent\\"} on:click={()=>{hobby=\\"lang\\"; hobbySrc=\\"/hobbies/lang.jpg\\"}}>\\r\\n                    <h2 in:blur={{amount: 100, duration: 800, delay: 1000}}>Learning Languages</h2>\\r\\n                </button>\\r\\n                <button transition:fly={{y: 300, duration: 800, delay: 1100}} class={hobby == \\"bike\\"? \\"text-left\\" : \\"text-left text-light-accent\\"} on:click={()=>{hobby=\\"bike\\"; hobbySrc=\\"/hobbies/bike.jpg\\"}}>\\r\\n                    <h2 in:blur={{amount: 100, duration: 800, delay: 1100}}>Biking</h2>\\r\\n                </button>\\r\\n            </div>\\r\\n\\r\\n            {#key hobbySrc}\\r\\n                <div class=\\"relative overflow-hidden max-h-[600px] rounded-[20px] lg:order-last\\">\\r\\n                    <img \\r\\n                        class=\\"object-cover w-full transition-opacity duration-500 ease-in-out\\" alt=\\"Me\\" \\r\\n                        src={hobbySrc}\\r\\n                    />\\r\\n                    <div class=\\"absolute top-0 left-0 w-full h-full fade-corner\\"></div>\\r\\n                </div>\\r\\n            {/key}\\r\\n        </section>\\r\\n    </section>\\r\\n    <div class=\\"hidden masked-text-dark\\"></div>    \\r\\n    <div class=\\"hidden dark\\"></div>\\r\\n\\r\\n{/if}\\r\\n\\r\\n<style lang=\\"scss\\">\\r\\n    .fade-corner-right::after {\\r\\n        content: '';\\r\\n        position: absolute;\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        background: linear-gradient(to top right,  rgba(255, 255, 255, 0.9) , rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.9));\\r\\n        pointer-events: none; \\r\\n    }\\r\\n\\r\\n    .fade-corner::after {\\r\\n        content: '';\\r\\n        position: absolute;\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        background: linear-gradient(to top left,  rgba(255, 255, 255, 0.8) , rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.8));\\r\\n        pointer-events: none; \\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAuII,gCAAkB,OAAQ,CACtB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,gBAAgB,EAAE,CAAC,GAAG,CAAC,KAAK,CAAC,EAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAC7J,cAAc,CAAE,IACpB,CAEA,0BAAY,OAAQ,CAChB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,gBAAgB,EAAE,CAAC,GAAG,CAAC,IAAI,CAAC,EAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAC5J,cAAc,CAAE,IACpB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${``}`;
});
export {
  Page as default
};