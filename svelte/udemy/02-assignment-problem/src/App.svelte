<script>
	let pwd = "";
	let pwds = [];
	let msg = "input your password";

	function validatePassword(event){
		let val = event.target.value;

		if (val.trim() != "" && val.length < 5) {
			msg = "Too short"
		}	
		else if (val.trim() != "" && val.length > 10){ 
			msg = "Too long"
		}
		else{
			msg = "";
			pwd = val;
		}
	}

	function addPassword(){
		if (msg != "") return;
		pwds = [...pwds, 
		{
			id: Math.floor(Math.random() * 90000000) + 10000000,
			password: pwd
		}];
		msg = "input your password";
		document.getElementById("pwd").value = "";
	}

	function removePassword(index){
		// let pwds_ = pwds.slice();
		// pwds_.splice(index, 1);
		// pwds = pwds_.slice();
		pwds = pwds.filter((pw, idx) => {
			return idx != index;
		});
	}
</script>
<style>
	.err{
		color:red;
	}
</style>
<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
	<li>[X] Add a password input field and save the user input in a variable.</li>
	<li>[X] Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</li>
	<li>[X] Output the password in a paragraph tag if it's between these boundaries.</li>
	<li>[X] Add a button and let the user add the passwords to an array.</li>
	<li>[X] Output the array values (= passwords) in a unordered list (ul tag).</li>
	<li>[X]Bonus: If a password is clicked, remove it from the list.</li>
</ol>
<hr/>
password: <input type="password" name="pwd" id="pwd" on:input={validatePassword}/>
{#if msg.trim() != ""}
	<p class="err">{msg}</p>
{:else}
	<p>{pwd}</p>
{/if}
<button on:click={addPassword}>Add to list</button>
<ul>
	{#each pwds as p,index (p.id)}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li id="{p.id}" on:click="{removePassword.bind(this, index)}">{p.password}</li>
	{/each}
</ul>