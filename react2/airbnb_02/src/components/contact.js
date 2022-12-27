import React from "react";

function Contact(params) {
	return (
		<div className="contact-card">
			<img src={params.img} />
			<h3>{params.name}</h3>
			<div className="info-group">
				<img src="./images/phone-icon.png" />
				<p>{params.phone}</p>
			</div>
			<div className="info-group">
				<img src="./images/mail-icon.png" />
				<p>{params.email}</p>
			</div>
		</div>
	);
}

export default Contact;
