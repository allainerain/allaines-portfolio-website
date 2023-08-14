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

    let forent_app = [
    'works/forent-app/1.png',
    'works/forent-app/2.png',
    'works/forent-app/3.png',
    'works/forent-app/4.png'
    ];

</script>

<body>
    <Project
        title = "Mask Patrol"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {mask_patrol}
        github = "https://github.com/allainerain/CS180-MaskPatrol"
        figma = "https://www.figma.com/file/uoXEo5hwm93aywbjAgJCyW/Mask-Patrol?type=design&node-id=0%3A1&mode=design&t=xXjBaG6H8ZCXAWra-1"
        live = "none"
        case_study="none"
    />
    <Project
        title = "ABS-CBN Disinformation"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {abscbn}
        github = "https://github.com/allainerain/cs132-data-science-portfolio/tree/main"
        figma = "https://www.figma.com/file/e8J2k03nZe5kHTqPXIWPmQ/Data-Science-Portfolio?type=design&node-id=0%3A1&mode=design&t=Dy8GkZyLzTafGD66-1"
        live = "https://overdrivengain.github.io/cs132-portfolio/#portfolio"
        case_study="none"
    />

    <Project
        title = "GDSC-UPD Website"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {gdsc}
        github = "none"
        figma = "https://www.figma.com/file/SoKB49L9i4hfsquxfOBw7s/DSC-Website-UI-(Project)?type=design&node-id=0%3A1&mode=design&t=cStUvlPrHtVG34Za-1"
        live = "https://gdscupd.com/"
        case_study="none"
    />
    <Project
        title = "Forent Website"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {forent_web}
        github = "none"
        figma = "https://www.figma.com/file/mZfL6mYrNCynrRbfDVi1IT/Forent-Web---Allaine?type=design&node-id=0%3A1&mode=design&t=6agIt7BfjDz51cHN-1"
        live = "https://www.forent-app.com/"
        case_study="none"
    />

    <Project
        title = "Forent App"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {forent_app}
        live = "https://play.google.com/store/apps/details?id=com.ph.forent_app&pli=1"
        case_study="none"
    />
        <Footer/>

</body>


<style>

</style>