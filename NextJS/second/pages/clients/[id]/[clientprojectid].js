import { useRouter } from "next/router";

function ClientProjectPage() {
	const router = useRouter();

	return (
		<div>
			<h1>Specific Project for a given client</h1>
			<h2>
				Project {router.query.clientprojectid} for client{" "}
				{router.query.id}
			</h2>
		</div>
	);
}
export default ClientProjectPage;
