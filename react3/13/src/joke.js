import React from "react";

export default function Joke(props) {
	/**
	 * Challenge:
	 * - Create state `isShown` (boolean, default to `false`)
	 * - Add a button that toggles the value back and forth
	 */
	const [isShown, setShown] = React.useState(false);

	function toggle() {
		setShown((prevShown) => !prevShown);
	}

	return (
		<div>
			{props.setup && <h3>{props.setup}</h3>}
			{isShown && <p>{props.punchline}</p>}
			<button onClick={toggle}>
				{isShown ? "Hide" : "Show"} Punchline
			</button>
			<hr />
		</div>
	);
}
