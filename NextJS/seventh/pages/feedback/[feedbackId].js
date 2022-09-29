import { getAllFeedback, getFeedbackById } from "../api/feedback/helpers";

function FeedbackIdPage(props) {
	const feedback = props.feedback;

	if (!feedback) {
		return (
			<div className="center">
				<p>Loading...</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Feedback</h1>
			<h2>Id</h2> {feedback.id}
			<h2>Email</h2> {feedback.email}
			<h2>Text</h2> {feedback.text}
		</div>
	);
}

export async function getStaticProps(context) {
	const feedbackId = context.params.feedbackId;
	const feedback = await getFeedbackById(feedbackId);

	return {
		props: {
			feedback: feedback,
		},
	};
}

export async function getStaticPaths() {
	const feedbacks = await getAllFeedback();

	const ids = feedbacks.map((feedback) => ({
		params: { feedbackId: feedback.id },
	}));

	return {
		paths: ids,
		fallback: true,
	};
}

export default FeedbackIdPage;
