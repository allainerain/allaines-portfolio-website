<script>
    import Navbar from "../../components/navbar.svelte";
    import Project from "../../components/project.svelte";
    import Footer from "../../components/footer.svelte";

    let gdsc = [
    'works/gdsc/gdsc1.png',
    'works/gdsc/gdsc2.png',
    'works/gdsc/gdsc3.png',
    'works/gdsc/gdsc4.png',
    'works/gdsc/gdsc5.png',
    'works/gdsc/gdsc6.png',
    ];
</script>

<body>
    <Navbar/>
    <Project
        title = "GDSC-Website"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {gdsc}
    />
    <Project
        title = "GDSC-Website"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {gdsc}
    />
    <Project
        title = "GDSC-Website"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {gdsc}
    />

    <Footer/>


</body>


<style>

body {
    margin: 0;
    width: 100%;
    background-color: #0D0F0A;
}
</style>