import { Fragment, useState } from "react";
import { getAllFeedback } from "../api/feedback/helpers";
import { useRouter } from "next/router";

function FeedbackPage(props) {
	const router = useRouter();
	const [feedbackData, setFeedbackData] = useState();

	function detailsHandler(id) {
		router.push(`/feedback/${id}`);
	}

	function emailHandler(id) {
		fetch(`/api/feedback/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setFeedbackData(data.feedback);
			});
	}

	return (
		<Fragment>
			{feedbackData && <p>{feedbackData.email}</p>}
			<ul>
				{props.feedbackItems.map((item) => (
					<li key={item.id}>
						{item.text}
						<button onClick={detailsHandler.bind(null, item.id)}>
							Get details
						</button>
						<button onClick={emailHandler.bind(null, item.id)}>
							Show the email!
						</button>
					</li>
				))}
			</ul>
		</Fragment>
	);
}

export async function getStaticProps() {
	const data = await getAllFeedback();
	return {
		props: {
			feedbackItems: data,
		},
	};
}

export default FeedbackPage;
