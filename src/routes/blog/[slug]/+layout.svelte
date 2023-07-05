<script>

</script>


<body>
    <section>
        <slot/>
    </section>
    
</body>



<style>

section {
    color: #C2C2C2;
    width: 800px;
    margin: 150px auto 150px auto;
    /* text-align: center; */
}
/* TABLET VIEW */
@media only screen and (max-width: 900px) {
    section{
        width: 94%;
        margin: 150px 3% 150px 3%; /* Adjust the margin for small screens */

    }

}

/* PHONE VIEW */
@media only screen and (max-width:770px){
    section{
        width: 90%;
        margin: 150px 5% 150px 5%; /* Adjust the margin for small screens */
    }

}
</style>