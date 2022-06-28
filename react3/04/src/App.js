import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)

    function handlePlusClick() {
        const newCount = count + 1;
        setCount(newCount);
    }

    function handleMinusClick() {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={handleMinusClick}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={handlePlusClick}>+</button>
        </div>
    )
}
