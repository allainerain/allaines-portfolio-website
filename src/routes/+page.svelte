<script>
    import { fly } from "svelte/transition";
    import { blur} from "svelte/transition";
    import { onMount } from 'svelte';

    import Card from "$lib/components/Card.svelte";
    import SmallCard from "$lib/components/SmallCard.svelte";
    import Divider from "$lib/components/Divider.svelte";

    let ready = false;
    onMount(() => {
        ready = true
    });

</script>

{#if ready}

<section class="flex flex-col w-full items-center">
    <section class="grid gap-12 items-center justify-center w-[90%] overflow-hidden">
        <!-- Text Introduction -->
        <section         
            class="Hero flex flex-col gap-8 items-left justify-center md:pt-40 md:pb-20 pt-20 max-w-[1800px]"
        >   
            <span transition:fly={{y: 300, duration: 800}}>
                <h5 in:blur={{amount: 100, duration: 800}}  class="gradient-text-static">Hello there!</h5>

            </span>
            <span transition:fly={{y: 300, duration: 800, delay: 100}} class=" ">
                <h1 in:blur={{amount: 100, duration: 800, delay: 100}} 
                    class="
                    relative inline-block
                    before:content-['']
                    before:absolute
                    before:inset-0
                    before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_10%,rgba(255,255,255,0.4)_90%)]
                    before:pointer-events-none
                    before:dark:bg-[radial-gradient(circle_at_center,rgba(19,19,19,0)_10%,rgba(19,19,19,0.4)_90%)]
                    text:text-dark-accent
                    leading-30
                    "
                >
                    Allaine is a designer and developer from the sunny Philippines, designing and building intuitive interfaces for emerging technologies. She studied Computer Science at University of the Philippines Diliman, and she’s designed for startups. Previously at Samsung.
                </h1>
            </span>
        </section>

        <span transition:fly={{y: 300, duration: 800, delay: 200}}>
            <span in:blur={{amount: 100, duration: 800, delay: 200}}>
                <Divider>RECENT WORK I'M PROUD OF</Divider>
            </span>
        </span>

        <span transition:fly={{y: 300, duration: 800, delay: 300}}>
            <section in:blur={{amount: 20, duration: 800, delay: 300}} class="">
                <div class="cards grid grid-cols-1 gap-8 lg:grid-cols-2">
                <Card 
                    id="suse"
                    title="Avail library services seamlessly with your university ID with SUSe"
                    pill = "Project turned open-source"
                    description="Designer, Frontend Developer"
                    imgsrc="card-photos/suse.png"
                    link="/"
                    case_study="http://localhost:5173/blog/suse"
                    github="http://github.com/bbcarrots/suse"
                    long_description="In five months, our team developed an RFID-powered service availing system for our college's library. Since our library previously used Google Forms, which is a hassle to fill up and can be prone to errors, we decided to automate it with SUSe to leverage the RFID in our university IDs."


                    roles={["Frontend Developer", "Designer"]}
                    team={["1 Designer", "1 Frontend Developer", "1 Backend Developer"]}
                    tools={["Figma", "SvelteKit"]}
                    timeline="Jan 2024 - June 2024"
                />
                <Card 
                    id="berdebox"
                    title="Receive packages remotely and securely from anywhere with BerdeBox"
                    pill = "Personal"
                    description="Designer, Full-stack Developer"
                    imgsrc="card-photos/berdebox.png"
                    link="/"
                    github="https://github.com/bbcarrots/BerdeBox"
                    live="https://berde-box.vercel.app/app"


                    long_description="In two months, our team developed a smart mailbox to claim deliveries remotely, catered towards the Filipino market. Since majority of Filipinos use cash-on delivery to ensure trust, our smart mailbox features a livestream camera and cashbox modules to support cash-on delivery orders."

                    roles={["Fullstack Developer", "Designer"]}
                    team={["1 Designer", "1 Fullstack Developer", "3 Arduino Developers"]}
                    tools={["Figma", "SvelteKit", "Arduino"]}
                    timeline="May 2024 - June 2024"
                />
                </div>
            </section>
        </span>
    </section>

    <br>

    <section class="flex flex-col items-center bg-[#FBFBFB] w-full py-10 dark:bg-[#070707] mt-10">

        <!-- OTHER PROJECTS -->
        <div class="grid lg:grid-cols-3 grid-cols-1 w-[90%]">
            <div class="flex flex-col px-4 gap-8 mb-10">

                <!-- HEADER -->
                <Divider>CONFERENCES</Divider>

                <!-- content -->
                <SmallCard 
                    id='abscbn_conf'
                    title="Poster presentation for EDA on disinformation on twitter"
                    description="Presenter, Designer"
                    imgsrc="card-photos/abscbn-conf.png"
                    videosrc=""

                    long_description="Among 30+ groups, emerged as the best poster presentation, with awards on best visual impact and best social relevance."
                
                    roles={["Poster Designer", "Presenter"]}
                    team={["1 Poster Designer", "3 Presenters", "3 Content Writers"]}
                    tools={["Figma"]}
                    timeline="June 2023"

                />
                <SmallCard 
                    id='suse_conf'
                    title="Poster presentation for our library service availing system"
                    description="Presenter, Designer"
                    imgsrc="card-photos/suse-conf.png"
                    videosrc=""

                    long_description="Only non-final year project presented in our department's final year colloquium. Awarded 2nd Runner-up for Best Presentation, 1st Runner-up for People's Choice, and received a vote for Best Project from one professor."
                
                    roles={["Poster Designer", "Presenter"]}
                    team={["1 Poster Designer", "4 Presenters"]}
                    tools={["Figma"]}
                    timeline="May 2024"
                />

                <SmallCard 
                    id='eba_conf'
                    title="Poster presentation on preventative solutions for industrial diseases in Minamata, Japan"
                    description="Presenter, Designer, Researcher"
                    imgsrc="card-photos/eba-conf.png"
                    videosrc=""

                    long_description="After a 10-day fieldwork in Japan, we conducted research, created a poster, and presented it to stakeholders in Minamata, all within 3 hours. We aimed to answer the question: How might we prevent cases like the Minamata Disease?"
                
                    roles={["Poster Designer", "Presenter", "Content Writer"]}
                    team={["1 Poster Designer", "1 Content Writer", "3 Presenters"]}
                    tools={["Figma"]}
                    timeline="Aug 2023"
                />

            </div>
            <div class="flex flex-col px-4 gap-8 mb-10">
                <!-- HEADER -->
                <Divider>DESIGN & DEVELOPMENT</Divider>

                <!-- CONTENT -->
                <SmallCard 
                    id='hb'
                    title="Website for 3+ million community members of Home Buddies"
                    description="Designer, Webflow Developer"
                    imgsrc=""
                    videosrc="card-photos/homebuddies.mp4"

                    long_description="As a Product Design Intern in Cocomilk Studio, I was involved in designing their website from low fidelity to high fidelity wireframes, to implementing the website using Webflow within 2 months."
                    live="https://www.homebuddies.community/"   
                    
                    roles={["Product Designer", "Webflow Developer"]}
                    team={["3 Product Designers", "2 Webflow Developers"]}
                    tools={["Figma", "Webflow"]}
                    timeline="Aug 2023 - Oct 2023"
                />
                <SmallCard 
                    id='forent_app'
                    title="Growing Forent from 500 to 10,000+ downloads with a redesign"
                    description="Designer"
                    imgsrc="card-photos/forent-mobile.png"
                    videosrc=""

                    long_description="In 2022, I was a UI/UX designer intern in Forent, a start up with a mission to create a centralized renting platform in the Philippines. As a part of the pioneer interns, my work included redesigning outdated screens, creating user flows and layouting new features to create a seamless lessor to renter connection. Now, the Forent App has over 10,000 downloads in the Google Playstore."
                    live="https://play.google.com/store/apps/details?id=com.ph.forent_app&pli=1"   

                    roles={["Product Designer"]}
                    team={["1 Product Designer"]}
                    tools={["Figma"]}
                    timeline="Dec 2021 - May 2022"
                />
                <SmallCard 
                    id='berdebox_web'
                    title="BerdeBox's landing website for consumer trust"
                    description="Designer, Developer"
                    imgsrc=""
                    videosrc="card-photos/berdebox-web.mp4"

                    long_description="Created in less than a week, I designed and developed a landing page featuring 3D models to show our vision for BerdeBox."
                    live="https://berde-box.vercel.app/"   
                    
                    roles={["Designer", "Developer"]}
                    team={["1 Designer", "2 Developers", "1 3D Modeller"]}
                    tools={["Figma", "Svelte", "Blender"]}
                    timeline="May 2024"
                />
                <SmallCard 
                    id='gdsc'
                    title="Website design for Google Developer Student Clubs UP Diliman's 300+ community members"
                    description="Designer"
                    imgsrc="card-photos/gdsc.png"
                    videosrc=""

                    long_description="As a freshman in 2020, UP Diliman's Google Developer Student Clubs hosted an internal website design competition for its 300+ community members. I co-designed this layout with the idea to create a clean yet playful design to encapsulate Google's branding. After a couple of revisions, the output was selected to be the official website design to represent the organization."
                    live="https://gdscupd.com/"   
                    figma="https://www.figma.com/file/SoKB49L9i4hfsquxfOBw7s/DSC-Website-UI-(Project)?type=design&node-id=0%3A1&mode=design&t=cStUvlPrHtVG34Za-1"

                    roles={["Designer"]}
                    team={["2 Designers"]}
                    tools={["Figma"]}
                    timeline="Nov 2021"
                />
                <SmallCard 
                    id="enfa"
                    title="Updated look for Enfagrow's website, with updated branding"
                    description="Designer, Prototyping"
                    imgsrc = ""
                    videosrc="/card-photos/enfa.mp4"

                    long_description="Resigned the Enfagrow website for Communication Technology students' project. My role was to redesign the Enfagrow website in accordance to their new branding "
                    figma="https://www.figma.com/proto/beH6u4mK4YOgTYXoA4Wa2c/Enfa-Redesign?page-id=112%3A2004&node-id=112-2006&node-type=canvas&viewport=1295%2C654%2C0.18&t=Qd8NXBNBv4GnMPOh-1&scaling=min-zoom&content-scaling=fixed"
                
                    roles={["Designer"]}
                    team={["1 Designer"]}
                    tools={["Figma"]}
                    timeline="Mar 2024"
                />
                <SmallCard 
                    id='forent_web'
                    title="Update Forent’s branding as they grew from a small start-up to a recognized one."
                    description="Designer"
                    imgsrc="card-photos/forent-web.png"
                    videosrc=""

                    long_description="In 2022, Forent ventured from being a small start up to a recognized organization. In order to adapt to its growing influence, I was given the solo responsibility of redesigning their website from scratch to accommodate new features, such as testimonials, FAQs and a blog."
                    live="https://www.forent-app.com/"   
                    figma="https://www.figma.com/design/mZfL6mYrNCynrRbfDVi1IT/Forent-Web---Allaine?node-id=0-1"

                    roles={["Designer"]}
                    team={["1 Designer"]}
                    tools={["Figma"]}
                    timeline="Dec 2021 - May 2022"
                />
            </div>
            <div class="flex flex-col px-4 gap-8 mb-10">
                <!-- HEADER -->
                <Divider>AI/ML/DATA</Divider>

                <!-- CONTENT -->
                <SmallCard 
                    id="abm"
                    title="Analyzing disease spread on campus, and policies to maximize student learning"
                    description="Agent Based Modelling"
                    imgsrc = ""
                    videosrc="/card-photos/abm.mp4"

                    long_description="Used Mesa to create an agent based model of disease spread and impact on student productivity in small campuses using the SEIR model. Findings show that health protocols reducing transmission probability should be prioritized. Once the probability of transmission has reached a low enough threshold, it's better to commit to a strict isolation policy than a weak isolation policy to maximize learning productivity."
                    live="https://colab.research.google.com/drive/16SWczdJnxQIFhFeX_kbTlX4wt_WyqG-H?usp=sharing"   

                    roles={["Researcher"]}
                    team={["4 Researchers"]}
                    tools={["Python, Mesa, NetworkX"]}
                    timeline="Nov 2023 - Jan 2024"
                />
                <SmallCard 
                    id='mask_patrol'
                    title="Real-time face mask detection with 97% accuracy with Mask Patrol"
                    description="Computer Vision, Design"
                    imgsrc="card-photos/mask-patrol.png"
                    videosrc=""

                    long_description = "For our AI class, we were challenged to use AI to solve an everyday issue. Within 2 weeks, my group was able to train and deploy a Face Mask Detection and Social Distancing Detection Model using convolutional neural networks with a 97% accuracy. I trained the model over 3,000+ images and designed the UI of the website."
                    github = "https://github.com/allainerain/CS180-MaskPatrol"
                    figma = "https://www.figma.com/file/uoXEo5hwm93aywbjAgJCyW/Mask-Patrol?type=design&node-id=0%3A1&mode=design&t=xXjBaG6H8ZCXAWra-1"

                    roles={["Designer", "AI Developer"]}
                    team={["2 Designers", "2 AI Developers", "2 Web Developers"]}
                    tools={["Python, Tensorflow, HTML/CSS"]}
                    timeline="May 2023"
                />
                <SmallCard 
                    id="abscbn"
                    title="Twitter Disinformation Analysis"
                    description="EDA, Design"
                    imgsrc=""
                    videosrc="/card-photos/abscbn.mp4"

                    long_description = "In 2023, our Data Science class made us explore the disinformation spread on Twitter regarding political issues in the Philippines. Using data analysis, NLP and modeling, my group of 3 created an award winning case analysis over 60 groups regarding the disinformation on the ABS-CBN tax evasion case. I designed the website, performed NLP and created the poster presentation which garnered a special distinction for visual design."
                    github = "https://github.com/allainerain/cs132-data-science-portfolio/tree/main"
                    figma = "https://www.figma.com/file/e8J2k03nZe5kHTqPXIWPmQ/Data-Science-Portfolio?type=design&node-id=0%3A1&mode=design&t=Dy8GkZyLzTafGD66-1"
                    live = "https://overdrivengain.github.io/cs132-portfolio/#portfolio"
                    case_study="none"

                    roles={["Data Analyst", "Designer"]}
                    team={["3 Data Analysts", "1 Designer", "1 Developer"]}
                    tools={["Python, HTML/CSS"]}
                    timeline="Jan 2023 - June 2023"
                />
            </div>
        </div>
    </section>
    
</section>
{/if}

<style lang="postcss">

    @keyframes move-bg-oscillate {
        to {
            background-position: 200% 0;
        }
    }

    .gradient-text-grey {
        --bg-size: 400%;
        --color-one: #7E8187;
        --color-two: #61646A;
        --color-two: #3F4145;
        /* font-size: clamp(3rem, 25vmin, 8rem); */
        background: linear-gradient(
                        90deg,
                        var(--color-one),
                        var(--color-two),
                        var(--color-one)
                    ) 0 0 / var(--bg-size) 100%;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        animation: move-bg-oscillate 120s infinite linear;
    }

    .gradient-text-static {
        --bg-size: 50%;
        --color-one: #7E8187;
        --color-two: #61646A;
        --color-two: #3F4145;
        background: linear-gradient(
                        90deg,
                        var(--color-one),
                        var(--color-two),
                        var(--color-one)
                    ) 0 0 / var(--bg-size) 100%;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
</style>
