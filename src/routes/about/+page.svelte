<script>
    import Footer from "../../components/footer.svelte"

    import { onMount } from 'svelte';

    let failure = false;

</script>

<body>    
    <section class = "intro">
        <img class="me" alt = "Me" src="profilepic.jpg"/>
        <p>
            Hey! I'm Allaine, a Filipino-Chinese computer science undergrad presently based in the sunny Philippines 
            (but dreaming of broader horizons). 
        </p>
        <p>
            I think this usually the part where people explain that they took up conputer science  because 
            1. they’ve been coding since they could spell, 
            2. they were good at math, or
            3. they fell in love with the world-changing impact of technology.
            Well, I took up CS because I didn’t really know what I wanted to be. 
            (Can you really expect a 17 year old to know that?)     
        </p>
        <p>
            But I consider myself lucky. 
            As a hobbyist writer, artist, and  designer, I just like creating things. 
            While I still don't really where life will take me, programming and technology just became my medium to create things that do its little good in one way or another.  
        </p>
        <p>
            So, what have I been up to?
        </p>
    </section>
    <section class="work">
        <div class="work-header">
            {#if !failure}
                <h1>Work</h1>
            {:else}
                <h1>On the Side</h1>
            {/if}
            <label class="switch">
                <input type="checkbox" bind:checked={failure}>
                <span class="slider round"></span>
            </label>
        </div>
        <div>
            {#if !failure}
                <div class="work-item">
                    <h4 class="company"><a href="https://www.cocomilkstudio.com/" target="_blank">Cocomilk Studio</a></h4>
                    <span class="position-date">
                        <p class="position">Product Design Intern</p>
                        <p class="date">07/23 - 08/23</p>
                    </span>
                </div>
                <div class="work-item">
                    <h4 class="company"><a href="https://www.forent-app.com/" target="_blank">Forent Group Incorporated</a></h4>
                    <span class="position-date">
                        <p class="position">UI/UX Intern</p>
                        <p class="date">12/21 - 04/22</p>
                    </span>
                </div>
                <div class="work-item">
                    <h4 class="company"><a href="https://www.azeus.com/" target="_blank">Azeus Systems Limited</a></h4>
                    <span class="position-date">
                        <p class="position">Software Developer Intern</p>
                        <p class="date">07/21 - 08/21</p>
                    </span>
                </div>
            {:else}
                <div class="work-item">
                    <h4 class="company">Learning Mandarin</h4>
                    <span class="position-date">
                        <p class="position">to get connected to my heritage</p>
                        <p class="date">2023</p>
                    </span>
                </div>
                <div class="work-item">
                    <h4 class="company">Looking for freelance work</h4>
                    <span class="position-date">
                        <p class="position">to meet my overseas friends again </p>
                        <p class="date">2023</p>
                    </span>
                </div>
                <div class="work-item">
                    <h4 class="company"><a href="https://www.huawei.com/minisite/seeds-for-the-future/index.html" target="_blank">Huawei Seeds for the Future</a></h4>
                    <span class="position-date">
                        <p class="position">Shenzhen and Shanghai, China</p>
                        <p class="date">2023</p>
                    </span>
                </div>
                <div class="work-item">
                    <h4 class="company"><a href="https://eba.soi.asia/" target="_blank">Fieldwork with Keio University</a></h4>
                    <span class="position-date">
                        <p class="position">Tokyo and Minamata, Japan</p>
                        <p class="date">2023</p>
                    </span>
                </div>
                <div class="work-item">
                    <h4 class="company"><a href="https://taiwantoday.tw/news.php?unit=2&post=231290" target="_blank">Exchange at Taipei Tech</a></h4>
                    <span class="position-date">
                        <p class="position">Taipei, Taiwan</p>
                        <p class="date">2022</p>
                    </span>
                </div>


            {/if}
        </div>
    </section>
    <section class="about-site">
        <h1>About This Site</h1>
        <p> In case you were wondering, this site is: </p>
        <ul>
            <li>Designed on Figma based on <a href="https://daleanthony.com/" target="_blank">Dale Anthony</a> and <a href="https://www.augustolopes.design/" target="_blank">Augosto Lopes</a>' sites</li>
            <li>Designed and built using SvelteKit and Visual Studio Code</li>
            <li>Using Notion as a CMS</li>
            <li>Hosted by Vercel</li>
            <li>Set in Gentium, Source Sans and Mono</li>
        </ul>
    </section>

    <Footer/>
</body>

<style>

a{
    text-decoration: none;
    transition: color 0.3s ease; 
    color:  #C2C2C2;
}

a:hover{
    color: #838481;
}

section {
    color: #C2C2C2;
    width: 800px;
    margin: 100px auto 100px auto;
}

.intro p{
    font-family: 'Satoshi', sans-serif;
    text-align: left;
    font-size: 18px;
    line-height: 1.75;
    color: #B3B3B3;
    margin: 30px auto;
}

.me{
    width: 100%;
    height: auto;
    aspect-ratio: 16/10.4; 
    overflow: hidden;
    object-fit: cover;
    border-radius: 20px;
}

.work-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1{
    font-family: 'Hogbine', sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 1.11;
}

.work-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    margin: 20px 0px;;
}

.company{
    font-weight: 600;
    margin: 0px;
}

.position-date{
    display: flex;
    color: #838481;
    margin: 0px;
}

.position{
    margin: 0 20px;
    text-align: right;
}

.date{
    margin: 0px;
    text-align: left;
}

.about-site{
    font-family: 'Satoshi', sans-serif;
    font-size: 18px;
    line-height: 2;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1C1C1C;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #0D0F0A;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #1C1C1C;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* TABLET VIEW */
@media only screen and (max-width: 900px) {
    section{
        width: 94%;
        margin: 150px 3% 150px 3%; /* Adjust the margin for small screens */

    }
    h1{
        font-size: 32px;
    }
    .about-site{
        font-size: 18px;
    }
    .intro p{
        font-size: 18px;
    }
    .work-item{
        font-size: 16px;
    }

}

/* PHONE VIEW */
@media only screen and (max-width:770px){
    section{
        width: 90%;
        margin: 150px 5% 150px 5%; /* Adjust the margin for small screens */
    }
    h1{
        font-size: 30px;
    }
    .intro p{
        font-size: 18px;
    }
    .about-site{
        font-size: 18px;
    }
    .work-item{
        font-size: 16px;
    }

}


</style>