<script lang="ts">
	import Header from "./UI/Header.svelte";
	import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import IMeetup from "../interfaces/Meetup";

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
			subtitle: "Learn to code",
			description: "Pariatur officia adipisicing fugiat eiusmod nisi sit amet esse. Nisi sunt amet veniam excepteur sint ea officia elit nostrud.",
			imageUrl:
				"https://placehold.co/600x400/cyan/white?text=Learn+To+Code",
			address: "2nd Avenue New York",
			contactEmail: "jane@example.com",
			capacity: 120
		}
	];
</script>

<header>
	<Header />
</header>

<main>
	<MeetupGrid meetups={meetups} />
</main>

<style>
	main{
		margin-top: 5rem;
	}
</style>
