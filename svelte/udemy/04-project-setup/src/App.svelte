<script>
	import Product from "./Product.svelte";
</script>

<Product
	ProductTitle="My Product"
	on:add-cart={(e) => alert("Added to cart:" + e.detail)}
	on:delete-cart={() => alert("Deleted from cart")} />
