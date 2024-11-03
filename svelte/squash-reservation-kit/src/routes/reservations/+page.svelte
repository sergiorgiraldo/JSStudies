<script>
	import { onMount } from "svelte";
	let reservations = [];

	onMount(async () => {
		const response = await fetch("api");
		reservations = await response.json();
	});
</script>

<h1>Reservations</h1>
<ul>
	{#each reservations as { id, date, time, court_number, name }}
		<li>{date} {time} - Court {court_number} - {name}</li>
	{/each}
</ul>
