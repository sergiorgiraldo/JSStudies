<template>
	<div>
		<button @click="init">Initialize app base state</button>
		<button @click="get">Get</button>
	</div>
</template>
<script>
export default {
	name: "InitializeData",
	methods: {
		init() {
			this.$store.dispatch("users/seed");
			this.$store.dispatch("conversations/seed");
		},
		get() {
			// todo
		}
	}
};
</script>
<style></style>
