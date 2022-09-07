function UserIdPage(props) {
	return <h1>{props.id}</h1>;
}

export default UserIdPage;

//no need for _getStaticPaths_, this runs on the server only and there is no pre-generated pages

export async function getServerSideProps(context) {
	const { params } = context;
	const userId = params.uid;

	return {
		props: {
			id: `user-id->${userId}`,
		},
	};
}
