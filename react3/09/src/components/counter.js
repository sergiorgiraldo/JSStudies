import React from "react";

function Counter(props) {
	return (
		<div className="counter--count">
			<h1>{props.number}</h1>
		</div>
	);
}

export default Counter;
