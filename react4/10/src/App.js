import React from "react"
import Dice from "./components/Dice"
import Stats from "./components/Stats"
import Confetti from "react-confetti"

export default function App() {
    const [startDate, setStartDate] = React.useState(new Date())
    const [dices, setDices] = React.useState(allNewDice())
    const [rollsNo, setRollsNo] = React.useState(0)
    const [tenzies, setTenzies] = React.useState(false)
    const [stats, setStats] = React.useState(()=> JSON.parse(localStorage.getItem("stats")) || [])

    function allNewDice(){
        const newDices =  [];

        for (let index = 0; index < 10; index++) {
            newDices.push({
                id: index,
                value: getRandomDiceValue(), 
                isHeld: false
            });
        }
        return newDices;
    }

    function getRandomDiceValue(){
        return Math.floor(Math.random() * 6) + 1;
    }

    function rollDices(){
        if(tenzies){
            setRollsNo(0);
            setTenzies(false);
            setStartDate(new Date());
            setDices(allNewDice());
        }
        else{
            setDices(oldDice => oldDice.map(d => {
                return d.isHeld ? 
                    d :
                    {...d, value: getRandomDiceValue()}
            }));
            setRollsNo(current => current + 1);
        }
    }

    React.useEffect(_ => {
        const allHeld = dices.every(d=>d.isHeld);
        const allSame = dices.every(d=>d.value == dices[0].value);

        setTenzies(_ => {
            return allHeld && allSame;
        });
    },[dices]
    );

    React.useEffect(_ => {
        if (tenzies){
            const newStat = {
                startDate: startDate,
                endDate: new Date(),
                count: rollsNo
            }            
            setStats(oldStats => [newStat, ...oldStats]);
        }
    },[tenzies]);

    React.useEffect(() => {
        localStorage.setItem("stats", JSON.stringify(stats));
    }, [stats])

    function toggleDice(which){
        setDices(oldDice => oldDice.map(d => {
            return d.id === which ? 
                {...d, isHeld: !d.isHeld} :
                d
        }));

        // ☝️ much more elegant
        // setDices((prevDices)=> {
        //     const prevDices_ = [...prevDices];
        //     const idx = prevDices_.findIndex(d => {
        //         return d.id === which;
        //     });
        //     prevDices_[idx].isHeld = !prevDices_[idx].isHeld;    
        //     return prevDices_;
        // });
    }

    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>            
            <h2>{rollsNo} roll{rollsNo > 1?"s":""} ...</h2>
            <div className="dice-container">
                {dices.map((d)=><Dice key={d.id} id={d.id} value={d.value} isHeld={d.isHeld} toggleDice={toggleDice}/>)}
            </div>

            <button className="roll-dice" onClick={rollDices}>
                {tenzies ? "New Game" : "Roll"}
            </button>

            <hr/>
            
            <Stats
                stats={stats} />    
        </main>
    )
}