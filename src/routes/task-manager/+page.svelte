<script>
	let count = 0;

    $: {
        console.log(count)
    }

    $: doubled = count*2;
</script>

<div class="text-white">
	<div>I am task manager page - {count}</div>
    <div>Doubled value: {doubled}</div>
	<button on:click={() => count++}> Increment </button>
</div>
