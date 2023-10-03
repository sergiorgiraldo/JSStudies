<script>
	import ContactCard from "./ContactCard.svelte";

	export let name;
	let age = 10;

	$: uppercaseName = name.toUpperCase();

	$: console.log(name);

	$: if (name == "Sergio"){
		age = 51;
	}

	function incrementAge(){
		age += 1;
	}

	function changeName(){
		name = "Sergio";
	}

	function supplyName(event){
		name = event.target.value;
	}

</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}, age is {age}!</h1>
<button on:click={incrementAge}>Change age</button>
<!-- <button on:click={changeName}>Change name</button> -->
<br/>
<!-- <input type="text" value={name} on:input={supplyName}/> -->
<input type="text" bind:value={name} />
<br/>
<ContactCard />
