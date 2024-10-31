<script>
	import { Router, Route, Link } from "svelte-routing";
	import DataEntry from "./DataEntry.svelte";
	import Reservations from "./Reservations.svelte";
</script>

<main>
	<h1>Squash Reservations</h1>
	<Router>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/reservations">Reservations</Link>
		</nav>
    <hr />
		<Route path="/" component={DataEntry} />
		<Route path="/reservations" component={Reservations} />
	</Router>
</main>
