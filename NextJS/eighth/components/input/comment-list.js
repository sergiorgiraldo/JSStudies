import classes from "./comment-list.module.css";
import { useState, useEffect, Fragment } from "react";
import useSWR from "swr";

function CommentList(props) {
	const { eventId } = props;
	const { data } = useSWR(`/api/comments/${eventId}`);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (data) {
			setComments(data.allComments);
		}
	}, [data]);

	if (!comments) {
		return (
			<Fragment>
				<p className="center">Loading...</p>
			</Fragment>
		);
	}

	return (
		<ul className={classes.comments}>
			{comments.map((item) => (
				<li key={item.id}>
					<p>{item.comment}</p>
					<div>
						By <address>{item.name}</address> (
						<address>{item.email}</address>)
					</div>
				</li>
			))}
		</ul>
	);
}

export default CommentList;
