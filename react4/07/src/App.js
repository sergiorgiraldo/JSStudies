import React from "react"
import Dice from "./components/Dice"

export default function App() {
    const [dices, setDices] = React.useState(allNewDice())

    function allNewDice(){
        const newDices =  [];

        for (let index = 0; index < 10; index++) {
            newDices.push({
                id: index,
                value: Math.floor(Math.random() * 6) + 1, 
                isHeld: false
            });
        }
        return newDices;
    }

    function rollDices(){
        setDices(allNewDice());
    }

    function toggleDice(which){
        setDices((prevDices)=> {
            const prevDices_ = [...prevDices];
            const idx = prevDices_.findIndex(d => {
                return d.id === which;
            });
            prevDices_[idx].isHeld = !prevDices_[idx].isHeld;    
            return prevDices_;
        });
    }

    return (
        <main>
            <div className="dice-container">
                {dices.map((d)=><Dice key={d.id} id={d.id} value={d.value} isHeld={d.isHeld} toggleDice={toggleDice}/>)}
            </div>

            <button className="roll-dice" onClick={rollDices}>Roll</button>
        </main>
    )
}