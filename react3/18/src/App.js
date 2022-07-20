import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    console.log("Component rendered")
    
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))

    // if we set the state inside the fetch, then React calls the function; which fetch the data, setting the state, then React calls the function, which fetch the data, etc., ad infinitum
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}