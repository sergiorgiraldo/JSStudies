import React from "react";

export default function App() {
	const [count, setCount] = React.useState(0);

	function handlePlusClick() {
		setCount((prevCount) => prevCount + 1);
	}

	function handleMinusClick() {
		setCount((prevCount) => prevCount - 1);
	}

	return (
		<div className="counter">
			<button className="counter--minus" onClick={handleMinusClick}>
				–
			</button>
			<div className="counter--count">
				<h1>{count}</h1>
			</div>
			<button className="counter--plus" onClick={handlePlusClick}>
				+
			</button>
		</div>
	);
}
