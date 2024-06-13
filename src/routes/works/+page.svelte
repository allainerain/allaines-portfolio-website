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

    let hb =[
    'works/hb/1.png',
    'works/hb/2.png',
    'works/hb/3.png',
    'works/hb/4.png',
    'works/hb/5.png',
    'works/hb/6.png',
    'works/hb/7.png',
    'works/hb/8.png',
    'works/hb/9.png',
    'works/hb/10.png'
    ];

    let berdebox = [
        'works/berdebox/1.png',
        'works/berdebox/2.png',
        'works/berdebox/3.png',
        'works/berdebox/4.png',
        'works/berdebox/5.png',
    ];

    let suse = [
        'works/suse/1.png',
        'works/suse/2.png',
        'works/suse/3.png',
        'works/suse/4.png',
        'works/suse/5.png',
    ];

</script>

<body>

    <hr id="suse">
    <Project
        id="suse"
        title = "SUSe: RFID library service tracker"
        description = "This project is in its MVP stage, aimed to be implemented in our university's College of Engineering library, and released open-source for students to contribute. Availing library services in our university is inconvenient -- you need to fill out lots and lots of forms which makes people just want to cut corners. To make availing library services virtually form-less and provide accurate data reports for librarians, we created SUSe. I was the sole product designer and front-end developer for SUSe."
        gallery_items = {suse}
        github = "https://github.com/bbcarrots/suse"
        figma = "https://www.figma.com/proto/eMRvqJbuP5pXhJqbUC5J0E/CS-191-SUS%C3%AA?page-id=196%3A2205&node-id=447-24008&viewport=-7365%2C-2434%2C0.49&t=XqjRXTh6Yu7UEYSU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=447%3A24008&show-proto-sidebar=1"
        live = "https://suse.vercel.app"
        case_study="none"
    />
    <hr id="berdebox">
    <Project
        id="berdebox"
        title = "BerdeBox: Remote delivery mailbox"
        description = "Receiving deliveries is a hassle, especially in the Philippines where 7 out of 10 Filipinos use Cash-on-Delivery. We created BerdeBox to solve this: a mailbox with livestreaming capabilities to maintain trust and plug-and-play modules for customizability. Created in a month, I was a product designer, web designer and principal full-stack developer for BerdeBox."
        gallery_items = {berdebox}
        github = "https://github.com/bbcarrots/berdebox"
        live = "https://berde-box.vercel.app"
        case_study="none"
    />
    <hr id="mask-patrol">
    <Project
        id="mask-patrol"
        title = "Mask Patrol: Face Mask Detection"
        description = "For our AI class, we were challenged to use AI to solve an everyday issue. Within 2 weeks, my group was able to train and deploy a Face Mask Detection and Social Distancing Detection Model using convolutional neural networks with a 97% accuracy. I trained the model over 3,000+ images and designed the UI of the website."
        gallery_items = {mask_patrol}
        github = "https://github.com/allainerain/CS180-MaskPatrol"
        figma = "https://www.figma.com/file/uoXEo5hwm93aywbjAgJCyW/Mask-Patrol?type=design&node-id=0%3A1&mode=design&t=xXjBaG6H8ZCXAWra-1"
        live = "none"
        case_study="none"
    />
    <hr id="abs-cbn">
    <Project
        id="abs-cbn"
        title = "ABS-CBN Disinformation"
        description = "In 2023, our Data Science class made us explore the disinformation spread on Twitter regarding political issues in the Philippines. Using data analysis, NLP and modeling, my group of 3 created an award winning case analysis over 60 groups regarding the disinformation on the ABS-CBN tax evasion case. I designed the website, performed NLP and created the poster presentation which garnered a special distinction for visual design."
        gallery_items = {abscbn}
        github = "https://github.com/allainerain/cs132-data-science-portfolio/tree/main"
        figma = "https://www.figma.com/file/e8J2k03nZe5kHTqPXIWPmQ/Data-Science-Portfolio?type=design&node-id=0%3A1&mode=design&t=Dy8GkZyLzTafGD66-1"
        live = "https://overdrivengain.github.io/cs132-portfolio/#portfolio"
        case_study="none"
    />
    <hr id="hb">
    <Project
        
        title = "Home Buddies Website"
        description = "As a Product Design Intern in Cocomilk Studio, I got involved in the whole design process of creating a website for Home Buddies, a community of home improvement enthusiasts on Facebook with over 3 million active users. I was involved in designing their website from low fidelity to high fidelity wireframes, to implementing the website using Webflow within 2 months."
        gallery_items = {hb}
        figma = "none"
        github = "none"
        live = "https://www.homebuddies.community/"
        case_study="none"
    />
    <hr id="gdsc">
    <Project
        id="gdsc"
        title = "GDSC-UPD Website"
        description = "As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
        gallery_items = {gdsc}
        github = "none"
        figma = "https://www.figma.com/file/SoKB49L9i4hfsquxfOBw7s/DSC-Website-UI-(Project)?type=design&node-id=0%3A1&mode=design&t=cStUvlPrHtVG34Za-1"
        live = "https://gdscupd.com/"
        case_study="none"
    />
    <hr id="forent-web">
    <Project
        
        title = "Forent Website"
        description = "In 2022, Forent ventured from being a small start up to a recognized organization. In order to adapt to its growing influence, I was given the solo responsibility of redesigning their website from scratch to accommodate new features, such as testimonials, FAQs and a blog."
        gallery_items = {forent_web}
        github = "none"
        figma = "https://www.figma.com/file/mZfL6mYrNCynrRbfDVi1IT/Forent-Web---Allaine?type=design&node-id=0%3A1&mode=design&t=6agIt7BfjDz51cHN-1"
        live = "https://www.forent-app.com/"
        case_study="none"
    />
    <hr id = "forent-app">
    <Project
        
        title = "Forent App Design"
        description = "In 2022, I was a UI/UX designer intern in Forent, a start up with a mission to create a centralized renting platform in the Philippines. As a part of the pioneer interns, my work included redesigning outdated screens, creating user flows and layouting new features to create a seamless lessor to renter connection. Now, the Forent App has over 5,000 downloads in the Google Playstore."
        gallery_items = {forent_app}
        live = "https://play.google.com/store/apps/details?id=com.ph.forent_app&pli=1"
        github = "none"
        figma = "none"
        case_study="none"
    />


    <Footer/>

</body>


<style>

hr {
    height: 0;
    margin: 0;
    border: none;
    border-top: 1px solid transparent;
}
</style>