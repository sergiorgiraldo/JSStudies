<script lang="ts">
	import Header from "./UI/Header.svelte";
	import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import IMeetup from "../interfaces/Meetup";

	let title:string = "";
	let subtitle:string = "";
	let imageUrl:string = "";
	let description:string = "";
	let address:string = "";
	let email:string = "";
	let capacity:number = 0;

	let meetups:IMeetup[] = [
		{
			id: "m1",
			title: "Coding",
			subtitle: "Learn to code",
			description: "In aute ut officia magna aliqua esse laborum deserunt minim. Cupidatat ex ad aliquip est minim adipisicing laborum non.",
			imageUrl:
				"https://placehold.co/600x400/orange/white?text=Learn+To+Code",
			address: "1st Avenue New York",
			contactEmail: "john@example.com",
			capacity: 30
		}
	];

	function addMeetup(){
		const newMeetup:IMeetup = {
			"id": (Math.floor(Math.random() * 90000000) + 10000000).toString(),
			"title": title,
			"subtitle": subtitle,
			"imageUrl": imageUrl,
			"description": description,
			"address": address,
			"contactEmail": email,
			"capacity": capacity
		};
		meetups = [...meetups, newMeetup];
	}
</script>

<header>
	<Header />
</header>

<main>
	<form on:submit|preventDefault={addMeetup}>
		<div class="form-control">
			<label for="input_title">TITLE<label>:
			<input type="text" id="title" bind:value={title} />
		</div>
			
		<div class="form-control">
			<label for="input_subtitle">SUBTITLE<label>:
			<input type="text" id="subtitle" bind:value={subtitle} />
		</div>
			
		<div class="form-control">
			<label for="input_imageUrl">IMAGEURL<label>:
			<input type="text" id="imageUrl"  bind:value={imageUrl} />
		</div>
			
		<div class="form-control">
			<label for="input_description">DESCRIPTION<label>:
			<input type="text" id="description" bind:value={description} />
		</div>
			
		<div class="form-control">
			<label for="input_address">ADDRESS<label>:
			<input type="text" id="address"  bind:value={address} />
		</div>
			
		<div class="form-control">
			<label for="input_contactEmail">CONTACTEMAIL<label>:
			<input type="text" id="contactEmail" bind:value={email} />
		</div>
			
		<div class="form-control">
			<label for="input_capacity">CAPACITY<label>:
			<input type="text" id="capacity"  bind:value={capacity} />
		</div>   		  
			
		<button>Add Meetup</button>
	</form>
	<MeetupGrid meetups={meetups} />
</main>

<style>
	main{
		margin-top: 5rem;
	}
</style>
