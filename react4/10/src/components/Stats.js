import React from "react"

export default function Stats(props) {


    const stats_ = props.stats.map((s,index) => {
        return (
        <ul key={index}>
          <li>{s.duration} seconds, {s.count} roll(s)</li>
        </ul>
        )});

    return (
        <div>
            {stats_}
        </div>
    )
}