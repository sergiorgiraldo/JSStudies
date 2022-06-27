import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    function getRandomMeme(){
        const total = memesData.data.memes.length;
        const randomMeme = memesData.data.memes[Math.floor(Math.random() * total)];
        console.log(randomMeme.url);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getRandomMeme}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}