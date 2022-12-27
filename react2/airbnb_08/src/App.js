import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import Data from "./data.js";

function App() {
	const cards = Data.map((d) => {
		return (
			<Card
				item={d} //if I use {..item}, then on the card, instead of props.item.whatever I would use props.whatever
			/>
		);
	});

	return (
		<div>
			<NavBar />
			<Hero />
			<section className="cards-list">{cards}</section>
		</div>
	);
}
export default App;
