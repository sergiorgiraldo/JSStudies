import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);
    
    function addItem() {
        setThingsArray((prevArray) => {
            return [...prevArray, `Thing ${prevArray.length + 1}`];
        });
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));