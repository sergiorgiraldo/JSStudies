import { Fragment } from "react";

import { getAllFeedback } from "../api/feedback/index";

function FeedbackPage(props) {
	return (
		<Fragment>
			<ul>
				{props.feedbackItems.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</Fragment>
	);
}

export async function getStaticProps() {
	const data = getAllFeedback();
	return {
		props: {
			feedbackItems: data,
		},
	};
}

export default FeedbackPage;
