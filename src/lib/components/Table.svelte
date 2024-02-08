<script>
    export let block;
    let rows = block.rows;
    let length = rows[0].cells.length
    let colLength = rows.length

    console.log(rows)
</script>

<div class = "container">
    {#each Array(colLength) as _, colIndex (colIndex)}
        <table>
            <tbody>
                {#each Array(length) as _, rowIndex (rowIndex)}
                    {#if rows[rowIndex].cells[colIndex] !== null}
                        <tr class:first-row={rowIndex === 0}>
                            {rows[rowIndex].cells[colIndex]}
                        </tr>
                    {/if}
                {/each}
            </tbody>
        </table>
    {/each}
</div>


<style>

    .container {
        display:flex;
        background: #181818;
        padding: 24px;
        border-radius: 5px;
        border: 1.5px solid #292929;
    }

    table {
        border-collapse: collapse;
        border-radius: 5px;
        width: 100%;
        margin: 4px;
    }

    table tbody{
        display: block;
    }

    .first-row {
        color: #f6f6f6;
        padding: 4px;
    }

    table tbody tr{
        padding: 8px;
        font-family: 'Roboto Mono', monospace;
        font-size: 14px;
        color: #838481;
    }

    @media (max-width: 600px) {
        .container {
            display: block;
            gap: 32px;
        }
        table{
            margin-top:  16px;
        }
    }

</style>