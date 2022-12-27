import React from "react";
import boxes from "./boxes";
import Box from "./box";

export default function App() {
	const [myBoxes, setMyBoxes] = React.useState(boxes);

	function toggleBox(id) {
		//brute force :)
		// setMyBoxes((prevBoxes) => {
		//     const newBoxes = [...prevBoxes];
		//     var index = newBoxes.findIndex(obj => {
		//         return obj.id === id;
		//       });
		//     newBoxes[index].on = !newBoxes[index].on;
		//     return newBoxes;
		// });

		//clever
		setMyBoxes((prevBoxes) => {
			return prevBoxes.map((box) => {
				return box.id === id ? { ...box, on: !box.on } : box;
			});
		});
	}

	const boxesRendered = myBoxes.map((box) => (
		<Box key={box.id} box={box} handleClick={() => toggleBox(box.id)} />
	));

	return <main>{boxesRendered}</main>;
}
