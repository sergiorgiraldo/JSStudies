<script lang="ts">
	import MeetupItem from "./MeetupItem.svelte";
    import IMeetup from "../../interfaces/Meetup";

	export let meetups: IMeetup[];
</script>

<section id="meetups">
	{#each meetups as meetup}
		<MeetupItem
			title={meetup.title}
			subtitle={meetup.subtitle}
			description={meetup.description}
			imageUrl={meetup.imageUrl}
			address={meetup.address}
            capacity={meetup.capacity}
			email={meetup.contactEmail} />
	{/each}
</section>

<style>
	section {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}

	@media (min-width: 768px) {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
