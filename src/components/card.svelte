<script>
    export let title;
    export let description;
    export let iconsrc;
    export let imgsrc;
    export let link;
</script>

<a class="button-link" href={link}>
    <div class="card">
        <div class="container">
            <img src={iconsrc} alt="icon"/>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <img src={imgsrc} alt={title} style="width:100%"/>
    </div>
</a>

<style>

h4{
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin: 15px 0px 15px 0px;
    color: #BBBBBB;
}

p{
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
    margin: 0;
    color: #838481;
}

.button-link {
    text-decoration: none;
}

.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: #161A11;
    text-align: left;
    border-radius: 10px; /* Add border-radius for rounded corners */
    overflow: hidden; /* Hide overflowing content */
}

/* On mouse-over, add a deeper shadow and scale the card slightly */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: scale(1.02);
    cursor: pointer;
}


/* Add some padding inside the card container */
.container {
    margin: 40px;
    /* padding: 5px 25px; */
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px; /* 5px rounded corners */
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 0px 0px 10px 10px;
}
</style>
