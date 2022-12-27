import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topInput: "",
		bottomInput: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});
	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevMemeData) => {
			return {
				...prevMemeData,
				[name]: value
			};
		});
	}

	function generateMeme() {
		const memesArray = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);

		setMeme((prevMemeData) => {
			return {
				...prevMemeData,
				randomImage: memesArray[randomNumber].url
			};
		});
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					placeholder="Top text"
					className="form--input"
					id="topInput"
					name="topInput"
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form--input"
					id="bottomInput"
					name="bottomInput"
					onChange={handleChange}
				/>
				<button className="form--button" onClick={generateMeme}>
					Get a new meme image 🖼
				</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} className="meme--image" />
				<h2 className="meme--text top">{meme.topInput}</h2>
				<h2 className="meme--text bottom">{meme.bottomInput}</h2>
			</div>
		</main>
	);
}
