
<script>
    import { getRandomName } from "$lib/name-creation";
    import { postSimpleLogin } from "$lib/create-alias"

    let newName = getRandomName();
    $: alias = newName;

    function updateName(){
        newName = getRandomName();
    }

    function createAlias(){
        postSimpleLogin(alias);
    }
</script>
<main class="container">
    <h1>SimpleLogin Create Alias</h1>
    <section id="form">
            <h3>Alias</h3> 
            <p>
                {alias}
            </p>

            <button on:click={updateName}>I didnt like this one</button>
            <br />
            <button on:click={createAlias}>Seems fine</button>
    </section>
</main>