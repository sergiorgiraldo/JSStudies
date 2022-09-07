function UserProfilePage(props) {
	return <h1>{props.userName}</h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
	//this runs on every access to the page
	const { params, req, res } = context;
	console.log("running on server");

	return {
		props: { userName: "Sergio Rodrigues Giraldo" },
	};
}
