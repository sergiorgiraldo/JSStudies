import { Fragment } from "react";
import { getAllFeedback } from "../api/feedback/index";

function detailsHandler(id){
	console.log(id);
	//document.location.href = `/feedback/${id}`; 
}

function FeedbackPage(props) {
	return (
		<Fragment>
			<ul>
				{props.feedbackItems.map((item) => (
					<li key={item.id}>
                        {item.text} <button onClick={detailsHandler(item.id)}>Get details</button>
                    </li>
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