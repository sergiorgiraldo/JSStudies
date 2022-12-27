import React from "react";
import WindowTracker from "./WindowTracker";

export default function App() {
	/**
	 * Challenge:
	 * 1. Create state called `show`, default to `true`
	 * 2. When the button is clicked, toggle `show`
	 * 3. Only display `<WindowTracker>` if `show` is `true`
	 */

	const [isShown, setShown] = React.useState([true]);

	function handleChange() {
		setShown((prevShown) => !prevShown);
	}

	return (
		<div className="container">
			<button onClick={handleChange}>Toggle WindowTracker</button>

			{isShown && <WindowTracker />}
		</div>
	);
}
