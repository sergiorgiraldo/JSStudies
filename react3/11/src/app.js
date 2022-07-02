import React from "react"
import boxes from "./boxes"
import Box from "./box"

export default function App() {
    const [myBoxes, setMyBoxes] = React.useState(boxes);

    function toggleBox(id){
        setMyBoxes((prevBoxes) => {
            const newBoxes = [...prevBoxes];
            var index = newBoxes.findIndex(obj => {
                return obj.id === id;
              });
            newBoxes[index].on = !newBoxes[index].on;
            return newBoxes;
        });
    }

    const boxesRendered = myBoxes.map((item) =>
        <Box 
            key={item.id} 
            box={item} 
            handleClick={()=>toggleBox(item.id)}
            />
    );

    return (
        <main>
            {boxesRendered}
        </main>
    )
}
