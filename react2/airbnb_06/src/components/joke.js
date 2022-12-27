import React from "react";

function Joke({ setup, punchline, upvote, downvote, isPun }) {
	return (
		<div className="joke-card">
			{setup && (
				<div className="info-group">
					<p>{setup}</p>
				</div>
			)}
			<div className="info-group">
				<p>
					<b>{punchline}</b>
				</p>
			</div>
			<div className="info-group">
				<p>
					Other: {upvote}++, {downvote}--,
					{isPun ? "Pun!!" : "No pun :("}
				</p>
			</div>
		</div>
	);
}

export default Joke;
