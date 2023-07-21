<script>
    import Footer from "../../components/footer.svelte"

    import { onMount } from 'svelte';

    let failure = false;

</script>

<body>    
    <section class = "intro">
        <img class="me" alt = "Me" src="profilepic.jpg"/>
        <p>
            Mask Patrol is a Web Application for Face mask detection and classification. For our AI class in the University of the Philippines, we were tasked to use AI and Machine learning to combat problems in daily life.  In a span of two weeks, my team and I were able to produce a working MVP of our trained model. 
        </p>
        <p>
            Mask Patrol is a Web Application for Face mask detection and classification. For our AI class in the University of the Philippines, we were tasked to use AI and Machine learning to combat problems in daily life.  In a span of two weeks, my team and I were able to produce a working MVP of our trained model. 
        </p>
        <p>
            Mask Patrol is a Web Application for Face mask detection and classification. For our AI class in the University of the Philippines, we were tasked to use AI and Machine learning to combat problems in daily life.  In a span of two weeks, my team and I were able to produce a working MVP of our trained model. 
        </p>
    </section>
    <section class="work">
        <div class="work-header">
            {#if !failure}
                <h1>Work</h1>
            {:else}
                <h1>Failure</h1>
            {/if}
            <label class="switch">
                <input type="checkbox" bind:checked={failure}>
                <span class="slider round"></span>
            </label>
        </div>
        <div>
            {#if !failure}
                <div class="work-item">
                    <h4 class="company">Company One</h4>
                    <span class="position-date">
                        <p class="position">Company Position</p>
                        <p class="date">07/23 - 08/23</p>
                    </span>
                </div>
                <div class="work-item">
                    <h4 class="company">Company One</h4>
                    <span class="position-date">
                        <p class="position">Company Position</p>
                        <p class="date">07/23 - 08/23</p>
                    </span>
                </div>
                <div class="work-item">
                    <h4 class="company">Company One</h4>
                    <span class="position-date">
                        <p class="position">Company Position</p>
                        <p class="date">07/23 - 08/23</p>
                    </span>
                </div>
            {:else}
                <div class="work-item">
                    <h4 class="company">Company One</h4>
                    <span class="position-date">
                        <p class="position">Company Position</p>
                        <p class="date">07/23 - 08/23</p>
                    </span>
                </div>
            {/if}
        </div>
    </section>
    <section class="about-site">
        <h1>About This Site</h1>
        <p> In case you were wondering, this site is: </p>
        <ul>
            <li>Inspired from Dale Anthony and Augosto Lopez's sites</li>
            <li>Designed and built using Figma and Visual Studio Code</li>
            <li>Hosted by Vercel</li>
            <li>Set in Gentium, Source Sans and Mono</li>
        </ul>
    </section>

    <Footer/>
</body>

<style>
section {
    color: #C2C2C2;
    width: 800px;
    margin: 100px auto 100px auto;
}

.intro p{
    font-family: 'Source Sans 3', sans-serif;
    text-align: left;
    font-size: 20px;
    line-height: 2;
    margin: 30px auto;
}

.me{
    width: 100%;
    height: auto;
    aspect-ratio: 16/10.4; /* Adjust the aspect ratio as per your requirement */
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
    font-family: 'Gentium Plus', serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 1.11;
}

.work-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto Mono', monospace;
    font-size: 18px;
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
}

.date{
    margin: 0px;
}

.about-site{
    font-family: 'Source Sans 3', sans-serif;
    font-size: 20px;
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
        font-size: 20px;
    }
    .intro p{
        font-size: 20px;
    }
    .work-item{
        font-size: 18px;
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