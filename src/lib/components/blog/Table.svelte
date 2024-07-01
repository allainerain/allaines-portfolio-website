<script>
    export let block;
    let rows = block.rows;
    let length = rows[0].cells.length
    let colLength = rows.length

    console.log(rows)
</script>

<div class = "flex p-4 rounded-lg border border-1 dark:bg-[#161616] dark:border-[#2D2D2D]">
    {#each Array(colLength) as _, colIndex (colIndex)}
        <table class="text-light-accent rounded-lg border-collapse w-full m-2 dark:text-dark-text">
            <tbody class="block">
                {#each Array(length) as _, rowIndex (rowIndex)}
                    {#if rows[rowIndex].cells[colIndex] !== null}
                        <tr >
                            <p class={rowIndex === 0 ? "font-bold mb-2" : ""}>{rows[rowIndex].cells[colIndex]}</p>
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    {/each}
</div>