<script>
    export let rows;
</script>

<table>
    <tbody>
        {#each rows as row, rowIndex}
        <tr class:first-row={rowIndex === 0}>
            {#each row.cells as cell}
                {#if cell === null}
                    <td></td>
                {:else}
                    <td>{cell}</td>
                {/if}
            {/each}
        </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        background: grey;
        width: 100%
    }

    .first-row {
        /* Add your styles for the first row here */
        font-weight: bold;
        background-color: lightgray;
    }
</style>