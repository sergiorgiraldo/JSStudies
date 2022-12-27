import { useRouter } from "next/router";

function ClientProjectsPage() {
	const router = useRouter();

	function loadProjectHandler() {
		//load data, etc
		router.push(`/clients/${router.query.id}/foo`); //replace can be used and then one cant go back (navigate)
	}

	return (
		<div>
			<h1>Projects for a given client</h1>
			<h2>Client :: {router.query.id}</h2>
			<button onClick={loadProjectHandler}>Load project Foo</button>
		</div>
	);
}
export default ClientProjectsPage;
