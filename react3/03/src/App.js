import React from "react"

export default function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
    
    function handleClick() {
        if (isImportant == "Yes"){
            setIsImportant("No");
        }    
        else{
            setIsImportant("Yes");
        }    
    }
    
    return (
        <div className="state" onClick={handleClick}>
            <h1 className="state--title">Is state important to know??</h1>
            <div className="state--value">
                <h1>{isImportant}</h1>
            </div>
            <hr />
        </div>
    )
}