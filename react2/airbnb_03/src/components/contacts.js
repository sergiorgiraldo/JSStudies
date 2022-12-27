import React from "react";
import phoneImg from "../images/phone-icon.png";
import mailImg from "../images/mail-icon.png";
import whiskerson from "../images/mr-whiskerson.png";
import fluffykins from "../images/fluffykins.png";
import felix from "../images/felix.png";
import pumpkin from "../images/pumpkin.png";

function Contacts() {
	return (
		<div className="contacts">
			<div className="contact-card">
				<img src={whiskerson} />
				<h3>Mr. Whiskerson</h3>
				<div className="info-group">
					<img src={phoneImg} />
					<p>(212) 555-1234</p>
				</div>
				<div className="info-group">
					<img src={mailImg} />
					<p>mr.whiskaz@catnap.meow</p>
				</div>
			</div>

			<div className="contact-card">
				<img src={fluffykins} />
				<h3>Fluffykins</h3>
				<div className="info-group">
					<img src={phoneImg} />
					<p>(212) 555-2345</p>
				</div>
				<div className="info-group">
					<img src={mailImg} />
					<p>fluff@me.com</p>
				</div>
			</div>

			<div className="contact-card">
				<img src={felix} />
				<h3>Felix</h3>
				<div className="info-group">
					<img src={phoneImg} />
					<p>(212) 555-4567</p>
				</div>
				<div className="info-group">
					<img src={mailImg} />
					<p>thecat@hotmail.com</p>
				</div>
			</div>

			<div className="contact-card">
				<img src={pumpkin} />
				<h3>Pumpkin</h3>
				<div className="info-group">
					<img src={phoneImg} />
					<p>(0800) CAT KING</p>
				</div>
				<div className="info-group">
					<img src={mailImg} />
					<p>pumpkin@scrimba.com</p>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
