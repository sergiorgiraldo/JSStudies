import { useEffect, useState, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {

	function getComments(showNotification){
		if (showNotification){
		notificationContext.showNotification({
			title: "Comments",
			message: "Loading ...",
			status: "pending",
		  });
		}

		fetch("/api/comments/" + eventId)
			.then((response) => response.json())
			.then((data) => {
				setComments(data.comments);
				if (showNotification) notificationContext.hideNotification();	
			});

	}

	const { eventId } = props;

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const [commentOK, setCommentOK] = useState(false);

	const notificationContext = useContext(NotificationContext);

	useEffect(()=> {
		if (commentOK) {
			getComments(false);
		}
	},
	[commentOK]);

	useEffect(() => {
		if (showComments) {
			getComments(true);
		}
	}, [showComments]);

	function toggleCommentsHandler() {
		setShowComments((prevStatus) => !prevStatus);
	}

	function addCommentHandler(commentData) {
		notificationContext.showNotification({
			title: "Comments",
			message: "Saving ...",
			status: "pending",
		  });
		  
		fetch("/api/comments/" + eventId, {
			method: "POST",
			body: JSON.stringify(commentData),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((response) => {
			if (response.ok) {
			  return response.json();
			}
	
			return response.json().then((data) => {
			  throw new Error(data.message || "Something went wrong!");
			});
		  })
		  .then((data) => {
			setCommentOK(true);
			notificationContext.showNotification({
			  title: "Success!",
			  message: "Thanks for interacting!",
			  status: "success",
			});
			setCommentOK(false);
		  })
		  .catch((error) => {
			notificationContext.showNotification({
			  title: "Error!",
			  message: error.message || "Something went wrong!",
			  status: "error",
			});
		  });
		}

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? "Hide" : "Show"} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} commentOK={commentOK} />}
			{showComments && <CommentList items={comments} />}
		</section>
	);
}

export default Comments;
