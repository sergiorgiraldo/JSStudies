<script>
	import { createEventDispatcher } from "svelte";

	export let productTitle = "";

	const dispatch = createEventDispatcher();

	function addtoCart() {
		dispatch("add-cart", "p1");
	}
</script>

<article>
	<h1>{productTitle}</h1>
	<button on:click={addtoCart}>Add to Cart</button>
	<button on:click={() => dispatch("delete-cart")}>Delete from Cart</button>
</article>
