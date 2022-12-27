import React from "react";

function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "Online") {
		badgeText = "ONLINE";
	}
	return (
		//notice there is card not online nor sold out
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img src={`../images/${props.img}`} className="card--image" />
			<div className="card--stats">
				<img src="../images/star.png" className="card--star" />
				<span>{props.rating}</span>
				<span className="gray">({props.reviewCount}) • </span>
				<span className="gray">{props.location}</span>
			</div>
			<p>{props.title}</p>
			<p>
				<span className="bold">From ${props.price}</span> / person
			</p>
		</div>
	);
}
export default Card;
