import React from "react"
import boxes from "./boxes"

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

    const styles = {
        backgroundColor: "cyan"
    }

    const boxesRendered = myBoxes.map((item) =>
        <div key={item.id} className="box" style={styles} onClick={()=>toggleBox(item.id)}>
            {item.id}
        </div>
    );

    return (
        <main>
            {boxesRendered}
        </main>
    )
}
