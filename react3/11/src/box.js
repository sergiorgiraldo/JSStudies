import React from "react";

export default function Box(props) {
	const styles = {
		backgroundColor: props.box.on ? "cyan" : "white"
	};
	return (
		<div className="box" style={styles} onClick={props.handleClick}>
			<span>{props.box.id}</span>
		</div>
	);
}
