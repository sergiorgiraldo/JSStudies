<script>
	import ContactCard from "./ContactCard.svelte";

	export let name;

	let age = 10;
	let title = "";
	let description = "";
	let random;

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
		random = Math.floor(Math.random() * 90000000) + 10000000;
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
<!-- <input type="text" id="inputName" bind:value={name} /> -->
<label for="inputName">Name: </label> 
<input type="text" id="inputName" value={name} on:input={supplyName}/>
<br/>
<label for="inputTitle">Job title: </label> 
<input type="text" id="inputTitle" bind:value={title} />
<br/>
<label for="inputDesc">Description: </label> 
<input type="text" id="inputDesc" bind:value={description} />

<ContactCard 
	userName="{name}" 
	jobTitle="{title}" 
	shortDescription="{description}" 
	randomImage="{random}" />
