import React from "react";
import Counter from "./components/counter";

/**
 * Challenge:
 * - Create a new component named Count
 *    - It should receive a prop called `number`, whose value
 *      is the current value of our count
 *    - Have the component render the whole div.counter--count
 *      and display the incoming prop `number`
 * - Replace the div.counter--count below with an instance of
 *   the new Count component
 */

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
			<Counter number={count} />
			<button className="counter--plus" onClick={handlePlusClick}>
				+
			</button>
		</div>
	);
}
