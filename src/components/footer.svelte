<script>

</script>

<section>
    Made with Love

    <div class="links">
        <a href="https://www.linkedin.com/in/allaine-tan/" target="_blank"> LinkedIn </a>
        <a href="https://github.com/allainerain" target="_blank"> Github </a>
        <a href="mailto:allainericci@gmail.com" target="_blank"> Email </a>
    </div>
</section>

<style>

    section {
        display: flex;
        justify-content: space-between;
        font-family: 'Source Sans 3', sans-serif;
        color: #838481;
        width: 800px;
        margin: 100px auto;
        text-align: center;
        font-size: 20px;
    }

    section .links {
        margin: 0;
    }

    a{
        text-decoration: none;
        margin: 0 10px;
        color: #838481;
        transition: color 0.3s ease; 
    }

    a:hover{
        color:  #C2C2C2;
    }

    @media only screen and (max-width: 900px) {
        section{
            width: 94%;
            margin: 150px 3% 150px 3%;
            font-size: 18px;
        }
    }

    /* PHONE VIEW */
    @media only screen and (max-width: 770px){
        section{
            width: 90%;
            margin: 150px 5% 150px 5%; 
            font-size: 16px;
        }
    }

</style>