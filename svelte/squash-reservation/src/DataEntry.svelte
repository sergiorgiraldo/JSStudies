<script>
  import { onMount } from "svelte";
  let date = "";
  let time = "";
  let court_number = 1;
  let name = "Sergio";
  let message = "";

  async function handleSubmit() {
    const response = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, time, court_number, name }),
    });
    if (response.ok) {
      message = "Reservation saved successfully!";
    } else {
      message = "Failed to save the reservation.";
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Date:
    <input type="date" bind:value={date} required />
  </label>
  <label>
    Time:
    <input type="time" bind:value={time} required />
  </label>
  <label>
    Court Number:
    <select bind:value={court_number}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </label>
  <label>
    Name:
    <select bind:value={name}>
      <option value="Sergio">Sergio</option>
      <option value="Luis">Luis</option>
      <option value="Luiz Felipe">Luiz Felipe</option>
      <option value="Mireille">Mireille</option>
      <option value="Diptesh">Diptesh</option>
    </select>
  </label>
  <button type="submit">Submit</button>
  <p>{message}</p>
</form>
