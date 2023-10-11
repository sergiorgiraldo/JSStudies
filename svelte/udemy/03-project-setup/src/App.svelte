<script lang="ts">
	import Header from "./UI/Header.svelte";
	import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import IMeetup from "../interfaces/Meetup";
	import TextInput from "./UI/TextInput.svelte";
	import Button from "./UI/Button.svelte";

	let title:string = "";
	let subtitle:string = "";
	let imageUrl:string = "";
	let description:string = "";
	let address:string = "";
	let email:string = "";
	let capacity:string = "0";

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
		},
		{
			id: "m2",
			title: "Coding",
			subtitle: "Learn CSS",
			description: "In aute ut officia magna aliqua esse laborum deserunt minim. Cupidatat ex ad aliquip est minim adipisicing laborum non.",
			imageUrl:
				"https://placehold.co/600x400/violet/black?text=Learn+CSS",
			address: "1st Avenue Chicago",
			contactEmail: "jane@example.com",
			capacity: 45
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
			"capacity": parseInt(capacity, 10)
		};
		meetups = [...meetups, newMeetup];
	}
</script>

<header>
	<Header />
</header>

<main>
	<form on:submit|preventDefault={addMeetup}>

		<TextInput
		id="title"
		label="Title"
		controlType="text"
		value={title}
		on:input={(event) => (title = event.target?event.target.value:"")} />

		<TextInput
		id="subtitle"
		label="Subtitle"
		controlType="text"
		value={subtitle}
		on:input={event => (subtitle = event.target?event.target.value:"")} />
		
		<TextInput
		id="address"
		label="Address"
		controlType="text"
		value={address}
		on:input={event => (address = event.target?event.target.value:"")} />
		
		<TextInput
		id="capacity"
		label="Capacity"
		controlType="number"
		value={capacity}
		on:input={event => (capacity = event.target?event.target.value:"")} />
		
		<TextInput
		id="imageUrl"
		label="Image URL"
		controlType="text"
		value={imageUrl}
		on:input={event => (imageUrl = event.target?event.target.value:"")} />
		
		<TextInput
		id="email"
		label="E-Mail"
		controlType="email"
		value={email}
		on:input={event => (email = event.target?event.target.value:"")} />
		
		<TextInput
		id="description"
		label="Description"
		controlType="textarea"
		rows={3}
		value={description}
		on:input={event => (description = event.target?event.target.value:"")} />
					  
		<Button type="button" caption="Add Meetup" />
	</form>
	<MeetupGrid meetups={meetups} />
</main>

<style>
	main{
		margin-top: 5rem;
		background-color:whitesmoke;
	}
	form{
		width: 30rem;
		max-width: 90%;
		margin:auto;
	}
</style>
