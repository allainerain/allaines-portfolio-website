<script>
    import Project from "../../components/project.svelte";
    import Footer from "../../components/footer.svelte";

    let mask_patrol = [
    'works/mask-patrol/1.png',
    'works/mask-patrol/2.png'
    ];

    let abscbn = [
    'works/abscbn/1.png',
    'works/abscbn/2.png',
    'works/abscbn/3.png',
    'works/abscbn/4.png',
    'works/abscbn/5.png',
    ];

    let gdsc = [
    'works/gdsc/gdsc1.png',
    'works/gdsc/gdsc2.png',
    'works/gdsc/gdsc3.png',
    'works/gdsc/gdsc4.png',
    'works/gdsc/gdsc5.png',
    'works/gdsc/gdsc6.png',
    ];

    let forent_web = [
    'works/forent-web/1.png',
    'works/forent-web/2.png',
    'works/forent-web/3.png',
    'works/forent-web/4.png',
    'works/forent-web/5.png',
    'works/forent-web/6.png',
    'works/forent-web/7.png',
    'works/forent-web/8.png',
    ];
</script>

<body>
    <Project
        title = "Mask Patrol"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {mask_patrol}
        github = "https://github.com/"
        figma = "https://github.com/"
        live = "https://github.com/"
    />
    <Project
        title = "ABS-CBN Disinformation"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {abscbn}
    />


    <Project
        title = "GDSC-UPD Website"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {gdsc}
    />
    <Project
        title = "Forent Website"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {forent_web}
    />

    <Footer/>

</body>


<style>

</style>