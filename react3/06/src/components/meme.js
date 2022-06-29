import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [memeImage,setMemeImage] = React.useState("");
    const [topText,setTopText] = React.useState("");
    const [bottomText,setBottomText] = React.useState("");
    
    function generateMeme() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);

        setTopText(document.getElementById("topInput").value);
        setBottomText(document.getElementById("bottomInput").value)
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    id="topInput"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    id="bottomInput"
                />
                <button 
                    className="form--button"
                    onClick={generateMeme}
                >
                    Get a new meme image 🖼
                </button>
                <br/>
                <center>
                    <p>{topText}</p>
                    <img src={memeImage} alt="Meme" className="meme--image"/>
                    <p>{bottomText}</p>
                </center>
            </div>
            
        </main>
    )
}