<script>
  import { onMount } from "svelte";
  let reservations = [];

  onMount(async () => {
    const response = await fetch("http://localhost:3000/api/reservations");
    reservations = await response.json();
  });
</script>

<h1>Reservations</h1>
<ul>
  {#each reservations as { id, date, time, court_number, name }}
    <li>{date} {time} - Court {court_number} - {name}</li>
  {/each}
</ul>
