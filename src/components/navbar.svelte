<script>

</script>

<section class="navbar">
    <div class="pill">
        <a href="/"> Home </a>
        <a href="/about"> About </a>
        <img src="../icons/diamond.png" alt="Website Icon">
        <a href="/works"> Works </a>
        <a href="/blog"> Blog </a>
    </div>
</section>

<style>

img{
    margin: 0px 25px;
    height: 40px;
    width: 40px;
}
section {
    position: sticky;
    top: 0;
    text-align: center;
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #0D0F0A, transparent);
    z-index: 999; /* Add a high z-index value */
}

.navbar > .pill {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    background-color: #0D0F0A;
    outline-style: solid;
    outline-color: #1C1C1C;
    outline-width: 2px;
}

.navbar a {
    font-family: 'Hogbine', sans-serif;
    margin: 0 20px;
    color: white;
    text-decoration: none;
    font-size: 16px;
}

/* PHONE VIEW */
@media only screen and (max-width: 770px) {
    section {
        position: fixed;
        top: auto;
        bottom: 0;
        background: linear-gradient(to top, #0D0F0A, transparent);
        /* background: white */
    }
    .navbar a{
        margin: 0 10px;
    }
    img{
        margin: 0px 20px;

    }
}
</style>