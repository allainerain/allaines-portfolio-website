<script>
    import { fly } from "svelte/transition";
    import { blur} from "svelte/transition";
    import { onMount } from 'svelte';

    import SmallCard from "$lib/components/SmallCard.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Case from "$lib/components/Case.svelte";
    import Intro from "$lib/components/Intro.svelte";
    import Project from "$lib/components/Project.svelte";
    let ready = false;
        
    onMount(() => {
        ready = true
    });

</script>

{#if ready}

<section class="flex flex-col w-full items-center">
    <section class="grid  items-center justify-center w-full">
        <!-- Text Introduction -->
        <Intro></Intro>
        <div class="flex flex-col p-10 gap-12">

        
        <span transition:fly={{y: 300, duration: 800, delay: 200}}>
            <span in:blur={{amount: 100, duration: 800, delay: 200}}>
                <Divider>RECENT WORK I'M PROUD OF</Divider>
            </span>
        </span>

        <span transition:fly={{y: 300, duration: 800, delay: 300}}>
            <span in:blur={{amount: 20, duration: 800, delay: 300}} >
                <div class="w-full grid grid-cols-1 gap-8 lg:grid-cols-3">
                <Case 
                    title="SUSe: Library borrowing made seamless"
                    description="Designer, Frontend Developer"
                    imgsrc="card-photos/suse-small.png"
                    link="/suse"
                    cursor_text="View Case Study"
                />
                <Case 
                    title="Simplifying renting in the Philippines with Dormy"
                    description="Designer"
                    imgsrc="card-photos/dormy.png"
                    link="/"
                    cursor_text="Coming Soon"

                />
                <Case 
                    title="Receive packages securely from anywhere with BerdeBox"
                    description="Designer, Full-stack Developer"
                    imgsrc="card-photos/berde-box-small.png"
                    link="/berde-box"
                    cursor_text="View Case Study"
                />
                </div>
            </span>
        </span>
        </div>
    </section>

    <br>

    <section class="grid items-center bg-[#FBFBFB] w-full p-10 dark:bg-[#070707] mt-10">
        
        <span class="w-full pb-10" transition:fly={{y: 300, duration: 800, delay: 200}}>
            <span in:blur={{amount: 100, duration: 800, delay: 200}}>
                <Divider>OTHER WORKS</Divider>
            </span>
        </span>

        <!-- OTHER PROJECTS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 items-start">

            <!-- CONTENT -->

            <!-- <SmallCard 
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
            /> -->
            <!-- <SmallCard 
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
            /> -->

            <!-- <SmallCard 
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
            /> -->
            <!-- CONTENT -->

            <!-- Home Buddies -->
            <SmallCard 
                id='hb'
                title="Website for 3+ million community members of Home Buddies"
                description="Designer, Webflow Developer"
                imgsrc=""
                videosrc="card-photos/homebuddies-small.mp4"             
            >
            <Project
                    title={"Website for 3+ million community members of Home Buddies"}
                    live="https://www.homebuddies.community/"   
                    
                    roles={["Product Designer", "Webflow Developer"]}
                    team={["3 Product Designers", "2 Webflow Developers"]}
                    tools={["Figma", "Webflow"]}
                    timeline="Aug 2023 - Oct 2023"
                    results={["Delivered a website in 2 months, receiving positive feedback from the community"]}
                >
                    <svelte:fragment slot="description">
                        <p>As a Product Design Intern in Cocomilk Studio, I was involved in designing their website from low fidelity to high fidelity wireframes, to implementing the website using Webflow within 2 months.</p>
                    </svelte:fragment>  

                    <svelte:fragment slot="content">
                        <h4 class="pt-8 text-2xl font-semibold">
                            The Problem: HomeBuddies has a thriving community of over 3 million—how can they consolidate scattered content and craft a unified brand identity?                        
                        </h4>

                        <h2 class="pt-10 text-center">The Website</h2>
                        <hr class="border-t border-gray-200 w-full" />

                        <video playsinline autoplay loop class="transition-transform border border-1 rounded-md duration-300 hover:scale-[102%]">
                            <source src="/home-buddies/website.mp4" type="video/mp4">
                            <track kind="captions">
                            Your browser does not support the video tag.
                        </video>    

                        <h2 class="pt-10 text-center">Feedback from the Community</h2>
                        <hr class="border-t border-gray-200 w-full" />

                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="/home-buddies/feedback.png"/>

                    </svelte:fragment>
                </Project>
            </SmallCard>

            <!-- FORENT -->
            <SmallCard 
                id='forent_app'
                title="Growing Forent from 500 to 10,000+ downloads with a redesign"
                description="Designer"
                imgsrc="card-photos/forent-mobile-small.png"
                videosrc=""
            >
            <Project
                    title={"Growing Forent from 500 to 10,000+ downloads with a redesign"}
                    live="https://play.google.com/store/apps/details?id=com.ph.forent_app&pli=1"   

                    roles={["Product Designer"]}
                    team={["1 Product Designer"]}
                    tools={["Figma"]}
                    results={["Scaled Forent from 500 downloads to 10,000+ downloads in the Google Playstore (Forent took a different direction after I left)"]}
                    timeline="Dec 2021 - May 2022"
                >
                    <svelte:fragment slot="description">
                        <p>In 2022, I was a UI/UX designer intern in Forent, a start up with a mission to create a centralized renting platform in the Philippines. As a part of the pioneer interns, my work included redesigning outdated screens, creating user flows and layouting new features to create a seamless lessor to renter connection. Now, the Forent App has over 10,000 downloads in the Google Playstore.</p>
                    </svelte:fragment>  

                    <svelte:fragment slot="content">
                        <h4 class="pt-8 text-2xl font-semibold">
                            The Problem: As Forent scales, its outdated design hinders its growth—how might a refreshed visual identity help position it as a trusted brand in the rental space?                        
                        </h4>


                        <h2 class="pt-10 text-center">Mobile Screens</h2>
                        <hr class="border-t border-gray-200 w-full" />

                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/forent-app/1.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/forent-app/2.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/forent-app/3.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/forent-app/4.png"/>


                        <h2 class="pt-10 text-center">Website Redesign</h2>
                        <hr class="border-t border-gray-200 w-full" />

                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/forent-web/1.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/forent-web/2.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/forent-web/3.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/forent-web/4.png"/>

                    </svelte:fragment>
                </Project>
            </SmallCard>

            <!-- ENFA -->
            <SmallCard 
                id="enfa"
                title="Updated look for Enfagrow's website, with updated branding"
                description="Designer, Prototyping"
                imgsrc = ""
                videosrc="/card-photos/enfa-small.mp4"            

            >
            <Project
                    title={"Updated look for Enfagrow's website, with updated branding"}
                    figma="https://www.figma.com/proto/beH6u4mK4YOgTYXoA4Wa2c/Enfa-Redesign?page-id=112%3A2004&node-id=112-2006&node-type=canvas&viewport=1295%2C654%2C0.18&t=Qd8NXBNBv4GnMPOh-1&scaling=min-zoom&content-scaling=fixed"
 
                    
                    roles={["Designer"]}
                    team={["1 Designer"]}
                    tools={["Figma"]}
                    timeline="Mar 2024"
                results={["Received positive feedback from moms, showing improvement from the old design", "Client received a good grade for their final marketing capstone project!"]}
                >
                    <svelte:fragment slot="description">
                        <p>I resigned the Enfagrow website for Communication Technology students' project. My role was to redesign the Enfagrow website in accordance to their new branding.</p>
                    </svelte:fragment>  

                    <svelte:fragment slot="content">

                        <h2 class="pt-10 text-center">The Redesign</h2>
                        <hr class="border-t border-gray-200 w-full" />

                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="/works/enfa/1.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="/works/enfa/2.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="/works/enfa/3.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="/works/enfa/4.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="/works/enfa/5.png"/>

                    </svelte:fragment>
                </Project>
            </SmallCard>

            <!-- AGENT BASED MODEL -->
            <SmallCard 
                id="abm"
                title="Analyzing disease spread on campus, and policies to maximize student learning"
                description="Agent Based Modelling"
                imgsrc = ""
                videosrc="/card-photos/abm-small.mp4"
            >
            <Project
                    title={"Analyzing disease spread on campus, and policies to maximize student learning"}
                    live="https://colab.research.google.com/drive/16SWczdJnxQIFhFeX_kbTlX4wt_WyqG-H?usp=sharing"   

                    roles={["Researcher"]}
                    team={["4 Researchers"]}
                    tools={["Python, Mesa, NetworkX"]}
                    timeline="Nov 2023 - Jan 2024"
                >
                    <svelte:fragment slot="description">
                        <p>Used Mesa to create an agent based model of disease spread and impact on student productivity in small campuses using the SEIR model. Findings show that health protocols reducing transmission probability should be prioritized. Once the probability of transmission has reached a low enough threshold, it's better to commit to a strict isolation policy than a weak isolation policy to maximize learning productivity.</p>
                    </svelte:fragment>  

                    <svelte:fragment slot="content">
                        <h4 class="pt-8 text-2xl font-semibold">
                            The Problem: Each flu season, strict attendance policies may unintentionally encourage sick students to attend class—how do different policy approaches impact the spread of illness and overall academic productivity?                       
                        </h4>


                        <h2 class="pt-10 text-center">The Presentation</h2>
                        <hr class="border-t border-gray-200 w-full" />

                        <video controls class=" border border-1 rounded-md hover:scale-[102%]">
                            <source src="/abm/presentation.mp4" type="video/mp4">
                            <track kind="captions">
                            Your browser does not support the video tag.
                        </video>    

                    </svelte:fragment>
                </Project>
            </SmallCard>

            <!-- MASK PATROL -->
            <SmallCard 
                    id='mask_patrol'
                    title="Real-time face mask detection with 97% accuracy with Mask Patrol"
                    description="Computer Vision, Design"
                    imgsrc="card-photos/mask-patrol-small.png"
                    videosrc=""
                >
            <Project
                    title={"Real-time face mask detection with 97% accuracy with Mask Patrol"}
                    github = "https://github.com/allainerain/CS180-MaskPatrol"
                    figma = "https://www.figma.com/file/uoXEo5hwm93aywbjAgJCyW/Mask-Patrol?type=design&node-id=0%3A1&mode=design&t=xXjBaG6H8ZCXAWra-1"

                    roles={["Designer", "AI Developer"]}
                    team={["2 Designers", "2 AI Developers", "2 Web Developers"]}
                    tools={["Python, Tensorflow, HTML/CSS"]}
                    results={["Achieved 97% accuracy across a dataset of 3,000+ images"]}
                    timeline="May 2023"
                >
                    <svelte:fragment slot="description">
                        <p>For our AI class, we were challenged to use AI to solve an everyday issue. Within 2 weeks, my group was able to train and deploy a Face Mask Detection and Social Distancing Detection Model using convolutional neural networks with a 97% accuracy. I trained the model over 3,000+ images and designed the UI of the website. </p>
                    </svelte:fragment>  

                    <svelte:fragment slot="content">
                        <h4 class="pt-8 text-2xl font-semibold">
                            The Problem: In public spaces, improper face mask use poses health risks. How can machine learning detect and respond to incorrect mask wearing in real time?                        
                        </h4>


                        <h2 class="pt-10 text-center">The Presentation</h2>
                        <hr class="border-t border-gray-200 w-full" />

                        <video playsinline autoplay loop class="transition-transform border border-1 rounded-md duration-300 hover:scale-[102%]">
                            <source src="/mask-patrol/presentation.mp4" type="video/mp4">
                            <track kind="captions">
                            Your browser does not support the video tag.
                        </video>    

                    </svelte:fragment>
                </Project>
            </SmallCard>

            <!-- ABS CBN -->
            <SmallCard 
                id="abscbn"
                title="Twitter Disinformation Analysis"
                description="EDA, Design"
                imgsrc=""
                videosrc="/card-photos/abscbn-small.mp4"               
            >
                <Project
                    title={"Twitter Disinformation Analysis"}
                    github = "https://github.com/allainerain/cs132-data-science-portfolio/tree/main"
                    figma = "https://www.figma.com/file/e8J2k03nZe5kHTqPXIWPmQ/Data-Science-Portfolio?type=design&node-id=0%3A1&mode=design&t=Dy8GkZyLzTafGD66-1"
                    live = "https://overdrivengain.github.io/cs132-portfolio/#portfolio"
                    roles={["Data Analyst", "Designer"]}
                    team={["3 Data Analysts", "1 Designer", "1 Developer"]}
                    tools={["Python, HTML/CSS"]}
                    timeline="Jan 2023 - June 2023"
                    results={["Awarded 1st Place among 30 teams at our class's colloquium", "Received the Best Visual Impact Award for outstanding design and communication", "Received the Best Social Impact Award for relevance and potential influence on public discourse"]}
                >
                    <svelte:fragment slot="description">
                        <p>My team of three conducted a data-driven analysis on the spread of disinformation about the ABS-CBN tax evasion case on Twitter, as part of our Data Science class. We used data analysis, natural language processing (NLP), and modeling to investigate which types of rhetorical appeals in false information were most effective in shaping public opinion. Out of over 60 groups, our case study ranked among the top and received special recognition for visual design. </p>
                    </svelte:fragment>  

                    <svelte:fragment slot="content">
                        <h4 class="pt-8 text-2xl font-semibold">
                            The Problem: Disinformation is on the rise. How do misleading tweets use rhetorical appeals—logic, emotion, and credibility—to shape public opinion?                        
                        </h4>


                        <h2 class="pt-10 text-center">The Data Story</h2>
                        <hr class="border-t border-gray-200 w-full" />

                        <video playsinline autoplay loop class="transition-transform border border-1 rounded-md duration-300 hover:scale-[102%]">
                            <source src="/abscbn/abscbn.mp4" type="video/mp4">
                            <track kind="captions">
                            Your browser does not support the video tag.
                        </video>    

                        <h2 class="pt-10 text-center">Watch the Facts! Conference</h2>
                        <hr class="border-t border-gray-200 w-full" />
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="card-photos/abscbn-conf.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/abscbn_conf/1.png"/>
                        <img class="w-full h-full rounded-lg object-cover transition-transform duration-300 hover:scale-[102%]" src="works/abscbn_conf/2.png"/>
                    </svelte:fragment>
                </Project>
            </SmallCard>
            
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
