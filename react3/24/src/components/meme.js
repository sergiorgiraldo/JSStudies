import React from "react"

export default function Meme() {

     /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

    const [meme, setMeme] = React.useState({
        topInput: "",
        bottomInput: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemeImages(data.data.memes);
        }
        getMemes();
    }, [])

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMemeData => {
            return {
                ...prevMemeData,
                [name]: value
            }
        });
    }

    function generateMeme() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);

        setMeme(prevMemeData => {
            return {
                ...prevMemeData, randomImage: allMemeImages[randomNumber].url
            }
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
    )
}