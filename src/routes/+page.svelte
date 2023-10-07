<script>
    import Card from "../components/card.svelte";
    import Footer from "../components/footer.svelte"

</script>

<body>
    <section class="Hero">
        <h1>Aspiring <span class="moving-gradient gradient-text">Designer & Researcher</span>. Cycling Around the World.</h1>
        <p> Hey, I’m Allaine! I’m a Computer Science undergraduate from the University of the (sunny) Philippines, dabbling in Machine Learning, Data Science and UI/UX design.  </p>
    </section>

    <section class="journey">
        <h1>AI and Data Science Journey</h1>
        <p>
            Yeah, AI is the new hot topic in tech right now, how can I not get myself into it? 
            While I'm still new to AI and ML, I’ve particularly been enjoying Natural Language Processing (as someone who loves learning languages) and Computer Vision.
            Here are some of the projects I've worked on!
        </p>
        <div class="cards">
            <Card 
                iconsrc="icons/icon-placeholder.png"
                title="Mask Patrol"
                description="A deployed face mask and social distancing detection model using computer vision."
                imgsrc="card-photos/mask-patrol.png"
                link="/works#mask-patrol"
            />
            <Card 
                iconsrc="icons/icon-placeholder.png"
                title="Twitter Disinformation Analysis"
                description="An award winning case analysis regarding the disinformation on the ABS-CBN tax evasion case."
                imgsrc="card-photos/abscbn.png"
                link="/works#abs-cbn"
            />
        </div>

    </section>

    <section class="journey">
        <h1>UI/UX Journey</h1>
        <p>
            While I love crunching numbers (really), and staring at neon monospaced text in code editors (really), sometimes, 
            the art girl inside me just gets tired at how tech can be too technical. 
            To me, design isn't just about making things pretty. It's about translating tech into a language that users can understand. 
            Because, what use is technology if it can’t connect with people? 
            Here are some of the projects I've worked on!
        </p>
        <div class="cards">
            <Card 
                iconsrc="icons/icon-placeholder.png"
                title="Home Buddies Website"
                description="Designed the website for a home enthusiast Facebook group with over 3M+ active members."
                imgsrc="card-photos/home-buddies.png"
                link="/works#hb"
            />
            <Card 
                iconsrc="icons/icon-placeholder.png"
                title="GDSC-UPD Website"
                description="Co-designed the official website of UP Diliman’s Google Developer Student Clubs as a freshman."
                imgsrc="card-photos/gdsc.png"
                link="/works#gdsc"
            />
            <Card 
                iconsrc="icons/icon-placeholder.png"
                title="Forent Mobile App"
                description="Designed screens for Forent as they grew from 500 downloads in the Google PlayStore to 10,000+ and counting."
                imgsrc="card-photos/forent-mobile.png"
                link="/works#forent-app"
            />
            <Card 
                iconsrc="icons/icon-placeholder.png"
                title="Forent Website"
                description="Proposed a website redesign to update Forent’s branding as they grew from a small start-up to a recognized one."
                imgsrc="card-photos/forent-web.png"
                link="/works#forent-web"
            />
        </div>
    </section>

    <section class="journey">
        <h1>Miscellaneous Journies</h1>
        <p>
            Away from the keyboard, I can't really keep still.
            Something inside me just wants to keep my feet moving, to see what else is out there. 
            Here's some of the journies I've gone on with people I've met from all over the world.
        </p>
        <div class="cards">
            <Card 
                iconsrc="icons/icon-placeholder.png"
                title="Cycling Journey"
                description="Don't own a bike in the Philippines, but I've (probably) biked over 100km in other countries."
                imgsrc="card-photos/cycling.png"
                link="/blog/cycling-journey"
            />
            <Card 
                iconsrc="icons/icon-placeholder.png"
                title="Photo Album"
                description="Don't own a camera, but here are some snaps of people, places and things that matter to me."
                imgsrc="card-photos/photo-album.png"
                link="/blog/photo-album"
            />
        </div>
        
    </section>
    
    <Footer></Footer>
</body>


<style>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


section {
    color: #C2C2C2;
    width: 800px;
    margin: 150px auto 150px auto;
    text-align: center;
}

h1{
    font-family: 'Gentium Plus', serif;
    font-weight: 400;
    font-size: 100px;
    line-height: 1.11;
}

.journey h1 {
    font-size: 64px;
}

p{
    font-family: 'Source Sans 3', sans-serif;
    font-size: 24px;
    line-height: 1.75;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 50px;
    justify-items: center;
    margin: 100px 0px;
}

/* TABLET VIEW */
@media only screen and (max-width: 900px) {
    section{
        width: 94%;
        margin: 150px 3% 150px 3%; /* Adjust the margin for small screens */

    }
    h1{
        font-size: 80px;
    }
    .journey h1 {
        font-size: 52px;
    }
    p{
        font-size: 20px;
    }

}

/* PHONE VIEW */
@media only screen and (max-width:770px){
    section{
        width: 90%;
        margin: 150px 5% 150px 5%; /* Adjust the margin for small screens */
    }
    h1{
        font-size: 64px;
    }
    .journey h1 {
        font-size: 46px;
    }
    p{
        font-size: 18px;
    }
}

.gradient-text {
    --bg-size: 400%;
    --color-one: #6E48BF;
    --color-two: #E378B1;
    --color-two: #ED885E;
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
    animation: move-bg 15s infinite linear;

}

@keyframes move-bg {
  to {
    background-position: var(--bg-size) 0;
  }
}


</style>
