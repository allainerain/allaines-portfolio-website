<script>
    import Card from "../components/card.svelte";
</script>

<body>
    <section class="Hero">
        <h1>Designer at Sketch. Having fun cycling around.</h1>
        <p>Hey, I’m Allaine -- a Computer Science undergraduate from the University of the Philippines. I dabble in Artificial Intelligence, Data Science and UI/UX Design. </p>
    </section>

    <section class="AI">
        <h1>AI and Data Science Journey</h1>
        <p>Something has brought me to discover more about data science. These are the projects that I have made so far More story to come, kind of narrative style. These words are just a placeholder for the future.</p>
        <div class="cards">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </section>
</body>




<style>
@import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    margin: 0;
    width: 100%;
    background-color: #0D0F0A;
}

section {
    color: #D9D9D9;
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

.AI h1 {
    font-size: 64px;
}

p{
    font-family: 'Source Sans 3', sans-serif;
    font-size: 20px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 50px;
    justify-items: center;
    margin: 100px 0px
}

/* TABLET VIEW */
@media only screen and (max-width: 900px) {
    section{
        width: 90%;
        margin: 150px 5% 150px 5%; /* Adjust the margin for small screens */

    }

}

/* PHONE VIEW */
@media only screen and (max-width:770px){
    h1{
        font-size: 80px;
    }

}
</style>
