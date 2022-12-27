import React from "react";
import boxes from "./boxes";
import Box from "./box";

export default function App() {
	const [myBoxes, setMyBoxes] = React.useState(boxes);

	const boxesRendered = myBoxes.map((item) => (
		<Box key={item.id} box={item} />
	));

	return <main>{boxesRendered}</main>;
}
