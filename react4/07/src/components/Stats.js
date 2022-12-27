import React from "react";

export default function Stats(props) {
	const stats_ = props.stats.map((s, index) => {
		return (
			<ul key={index}>
				<li>
					{Math.ceil(
						Math.round(
							new Date(s.endDate).getTime() -
								new Date(s.startDate).getTime()
						) / 1000
					)}{" "}
					seconds, {s.count} roll(s)
				</li>
			</ul>
		);
	});

	return <div>{stats_}</div>;
}
