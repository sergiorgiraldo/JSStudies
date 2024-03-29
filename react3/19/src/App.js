import React from "react";

export default function App() {
	const [starWarsData, setStarWarsData] = React.useState({});
	const [count, setCount] = React.useState(0);

	console.log("Component rendered");

	// side effects
	React.useEffect(
		function () {
			console.log("Effect ran");
			// fetch("https://swapi.dev/api/people/1")
			//     .then(res => res.json())
			//     .then(data => console.log(data))
		},
		[count]
	); //this array controls which dependencies React watch to run the side effect. If kept empty, it will run only once, s there is nothing for each to watch.

	return (
		<div>
			<pre>{JSON.stringify(starWarsData, null, 2)}</pre>
			<h2>The count is {count}</h2>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Add
			</button>
		</div>
	);
}
