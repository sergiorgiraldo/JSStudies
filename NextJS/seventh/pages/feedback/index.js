import { Fragment } from "react";
import { getAllFeedback } from "../api/feedback/helpers";
import { useRouter} from 'next/router'

function FeedbackPage(props) {
	const router = useRouter();

	function detailsHandler(id){
		router.push(`/feedback/${id}`);
	}
	
	return (
		<Fragment>
			<ul>
				{props.feedbackItems.map((item) => (
					<li key={item.id}>
                        {item.text} <button onClick={detailsHandler.bind(null, item.id)}>Get details</button>
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