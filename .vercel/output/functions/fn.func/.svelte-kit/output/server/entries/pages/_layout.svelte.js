import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { b as blogPosts } from "../../chunks/blogStores.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="flex flex-row items-center justify-between py-10 mx-auto w-[90%] md:mb-0" data-svelte-h="svelte-1aourzm"><p>Made with Love 💛</p> <div class="flex gap-4 justify-center"><a href="https://www.linkedin.com/in/allaine-tan/" target="_blank"><p>LinkedIn</p></a> <a href="https://github.com/allainerain" target="_blank"><p>Github</p></a> <a href="mailto:allainericci@gmail.com" target="_blank"><p>Email</p></a></div></section>`;
});
const css$1 = {
  code: "#theme-toggle.svelte-n4ccl.svelte-n4ccl{@apply invisible;}#theme-toggle.svelte-n4ccl+label.svelte-n4ccl{@apply inline-flex cursor-pointer h-7 w-7 rounded-full duration-300 content-[''];}#theme-toggle.svelte-n4ccl:not(:checked)+label.svelte-n4ccl{@apply bg-amber-400;}#theme-toggle.svelte-n4ccl:checked+label.svelte-n4ccl{@apply bg-transparent;;box-shadow:inset -10px -10px 1px 1px #ddd}",
  map: `{"version":3,"file":"ThemeSwitch.svelte","sources":["ThemeSwitch.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    let darkMode = true;\\r\\n\\r\\n    function handleSwitchDarkMode() {\\r\\n        darkMode = !darkMode;\\r\\n\\r\\n        darkMode\\r\\n            ? document.documentElement.classList.add('dark')\\r\\n            : document.documentElement.classList.remove('dark');\\r\\n    }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"flex items-center\\">\\r\\n    <input checked={darkMode} on:click={handleSwitchDarkMode} type=\\"checkbox\\" id=\\"theme-toggle\\" />\\r\\n    <label for=\\"theme-toggle\\" />\\r\\n</div>\\r\\n\\r\\n<style lang=\\"postcss\\">\\r\\n    #theme-toggle {\\r\\n        @apply invisible;\\r\\n    }\\r\\n\\r\\n    #theme-toggle + label {\\r\\n        @apply inline-flex cursor-pointer h-7 w-7 rounded-full duration-300 content-[''];\\r\\n    }\\r\\n\\r\\n    #theme-toggle:not(:checked) + label {\\r\\n        @apply bg-amber-400;\\r\\n    }\\r\\n\\r\\n    #theme-toggle:checked + label {\\r\\n        @apply bg-transparent;\\r\\n        box-shadow: inset -10px -10px 1px 1px #ddd;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAkBI,uCAAc,CACV,OAAO,SAAS,CACpB,CAEA,0BAAa,CAAG,kBAAM,CAClB,OAAO,WAAW,CAAC,cAAc,CAAC,GAAG,CAAC,GAAG,CAAC,YAAY,CAAC,YAAY,CAAC,QAAQ,CAAC,EAAE,CAAC,CACpF,CAEA,0BAAa,KAAK,QAAQ,CAAC,CAAG,kBAAM,CAChC,OAAO,YAAY,CACvB,CAEA,0BAAa,QAAQ,CAAG,kBAAM,CAC1B,OAAO,cAAc,CAAC,CACtB,UAAU,CAAE,KAAK,CAAC,KAAK,CAAC,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,IAC1C"}`
};
const ThemeSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="flex items-center"><input ${"checked"} type="checkbox" id="theme-toggle" class="svelte-n4ccl"> <label for="theme-toggle" class="svelte-n4ccl"></label> </div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex fixed w-full items-center justify-center h-[100px] z-40 pt-8 md:top-0 left-0 max-md:bottom-0 max-md:left-0 max-md:right-0 bg-gradient-to-t from-light-background to-transparent dark:from-dark-background to-transparent md:bg-gradient-to-b "><div class="inline-flex gap-1 bg-light-background items-center justify-center border m-4 p-4 rounded-lg border-1 border-dark-accent/[0.2] max-md:ml-[5%] max-md:mb-20 dark:bg-dark-background dark:text-dark-text "><a href="/" class="px-3 py-1" data-svelte-h="svelte-1guc6d5"><p>Home</p></a> <a href="/about" class="px-3 py-1" data-svelte-h="svelte-deev10"><p>About</p></a> ${validate_component(ThemeSwitch, "ThemeSwitch").$$render($$result, {}, {}, {})} <a href="/blog" class="px-3 py-1" data-svelte-h="svelte-9hz4g4"><p>Blog</p></a> <a href="https://drive.google.com/file/d/1Puny_APyd60U_T_RxMf4vDKnYQIeKOE_/view?usp=sharing" target="_blank" class="px-3 py-1" data-svelte-h="svelte-igloc2"><p>Resume</p></a></div></div>`;
});
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');@import url('https://fonts.cdnfonts.com/css/sf-pro-display');@import url('https://fonts.cdnfonts.com/css/satoshi');@import url('https://fonts.cdnfonts.com/css/giom-mod');@import url('https://fonts.cdnfonts.com/css/casftego');@import url('https://fonts.cdnfonts.com/css/opsi');@import url('https://fonts.cdnfonts.com/css/kemilash');@import url('https://fonts.cdnfonts.com/css/hogbine');@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');body.svelte-1n7lxhd{font-family:"SF Pro Display", sans-serif}`,
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<svelte:head>\\r\\n    <title>Allaine Tan</title> \\r\\n</svelte:head>\\r\\n\\r\\n<script>\\r\\n    import { blogPosts } from '$lib/stores/blogStores.js';\\r\\n\\r\\n\\timport '../app.pcss';\\r\\n    import Footer from '$lib/components/Footer.svelte';\\r\\n    import Navbar from \\"$lib/components/Navbar.svelte\\";\\r\\n\\r\\n    export let data;  \\r\\n\\r\\n    async function fetchAndSetBlogPosts() {\\r\\n        blogPosts.set(data.posts.results); // Set initial blog posts\\r\\n    }\\r\\n\\r\\n    fetchAndSetBlogPosts();\\r\\n<\/script>\\r\\n\\r\\n<Navbar></Navbar>\\r\\n<body class=\\"flex w-full items-center justify-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text\\">\\r\\n    <slot/>\\r\\n</body>\\r\\n<Footer></Footer>\\r\\n\\r\\n<style global>\\r\\n@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\\r\\n@import url('https://fonts.cdnfonts.com/css/sf-pro-display');\\r\\n\\r\\n@import url('https://fonts.cdnfonts.com/css/satoshi');\\r\\n@import url('https://fonts.cdnfonts.com/css/giom-mod');\\r\\n@import url('https://fonts.cdnfonts.com/css/casftego');\\r\\n@import url('https://fonts.cdnfonts.com/css/opsi');\\r\\n@import url('https://fonts.cdnfonts.com/css/kemilash');\\r\\n@import url('https://fonts.cdnfonts.com/css/hogbine');\\r\\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');\\r\\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\\r\\n\\r\\nbody{\\r\\n    font-family: \\"SF Pro Display\\", sans-serif;\\r\\n}\\r\\n</style>"],"names":[],"mappings":"AA2BA,QAAQ,6PAA6P,CACrQ,QAAQ,oDAAoD,CAE5D,QAAQ,6CAA6C,CACrD,QAAQ,8CAA8C,CACtD,QAAQ,8CAA8C,CACtD,QAAQ,0CAA0C,CAClD,QAAQ,8CAA8C,CACtD,QAAQ,6CAA6C,CACrD,QAAQ,gFAAgF,CACxF,QAAQ,gLAAgL,CAExL,mBAAI,CACA,WAAW,CAAE,gBAAgB,CAAC,CAAC,UACnC"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  async function fetchAndSetBlogPosts() {
    blogPosts.set(data.posts.results);
  }
  fetchAndSetBlogPosts();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-dkzpqs_START -->${$$result.title = `<title>Allaine Tan</title>`, ""}<!-- HEAD_svelte-dkzpqs_END -->`, ""}  ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <body class="flex w-full items-center justify-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text svelte-1n7lxhd">${slots.default ? slots.default({}) : ``}</body> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};