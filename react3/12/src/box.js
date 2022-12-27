import React from "react";

export default function Box(props) {
	const [onOff, setOnOff] = React.useState(props.box.on);

	const styles = {
		backgroundColor: onOff ? "cyan" : "white"
	};

	function toggle() {
		setOnOff((prevOnOff) => !prevOnOff);
	}

	return (
		<div className="box" style={styles} onClick={toggle}>
			<span>{props.box.id}</span>
		</div>
	);
}
