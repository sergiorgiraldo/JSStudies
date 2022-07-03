import React from "react"

export default function Form() {
    const identification ={
        first:"",
        last:""
    }

    const [id_, setId] = React.useState(identification)
    
    function handleFirst(event) {
        setId((prevId) => {
            prevId.first = event.target.value;
            return prevId;
        })
    }
 
    function handleLast(event) {
        setId((prevId) => {
            prevId.last = event.target.value;
            return prevId;
        })
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleFirst}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleLast}
                />
            </form>
        </div>
    )
}