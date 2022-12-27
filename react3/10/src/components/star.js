import React from "react";

function Star(props) {
	return (
		<img
			src={
				props.isFavorite
					? `../images/star-filled.png`
					: `../images/star-empty.png`
			}
			className="card--favorite"
			onClick={props.handleClick}
		/>
	);
}

export default Star;
