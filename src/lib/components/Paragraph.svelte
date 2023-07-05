<script>
    export let paragraph;
    let initialText = "";
    $: paraText = paragraph.paragraph?.rich_text?.reduce(
      (accumulator, para) =>
        para.href
          ? accumulator +
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
            
            </a>`
          : accumulator + para.plain_text,
      initialText
    );
  </script>
  
  {#if paraText}
    <p>{@html paraText}</p>
  {/if}
  
  <style>
    p {
      font-family: 'Source Sans 3', sans-serif;
      font-size: 20px;
      line-height: 1.75;
    }
  </style>
  