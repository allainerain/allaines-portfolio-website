<script>
  export let paragraph;

  console.log(paragraph.paragraph);
  let initialText = "";
  let color = paragraph.paragraph.color;
  $: paraText = paragraph.paragraph?.rich_text?.reduce(
    (accumulator, para) => {
      if (para.href) {
        return accumulator +
          `<a href="${para.href}" target="_blank" 
          style="
              color: #D9D9D9; 
              text-decoration: none; 
              border-bottom: 3.5px solid #D9D9D9; 
              transition: border-bottom; 
              transition: color; 
              text-decoration-skip-ink: none;" 
          
          onmouseover="
              this.style.borderBottom='3.5px solid #C2C2C2'; 
              this.style.color='#C2C2C2'" 
              
          onmouseout="
              this.style.borderBottom='4px solid #D9D9D9'; 
              this.style.color='#D9D9D9'">
          
          ${para.plain_text}
          
          </a>`;
      } else {
        let text = para.plain_text;
        if (para.annotations.bold) text = `<b>${text}</b>`;
        if (para.annotations.italic) text = `<i>${text}</i>`;
        if (para.annotations.strikethrough) text = `<s>${text}</s>`;
        if (para.annotations.underline) text = `<u>${text}</u>`;
        if (color == "blue") {
          text = `<span style="font-family: 'Roboto Mono', monospace;
        font-size: 16px;
        color: #838481;">${text}</span>`;
        }
        return accumulator + text;
      }
    },
    initialText
  );
</script>


  
  {#if paraText}
    <p>{@html paraText}</p>
  {/if}
  
  <style>
    p {
      font-family: 'Satoshi', sans-serif;

      font-size: 16px;
      line-height: 1.75;
    }

    @media only screen and (max-width: 900px) {


    }

    /* PHONE VIEW */
    @media only screen and (max-width:770px){
        p{
            font-size: 18px;
        }


    }
  </style>
  