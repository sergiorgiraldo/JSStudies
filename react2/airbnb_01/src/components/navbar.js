import React from "react";
import Nav from "react-bootstrap/Nav";
import AirbnbLogo from "../images/airbnb-logo.png";

function NavBar() {
	return (
		<div>
			<Nav>
				<Nav.Item>
					<Nav.Link href="/home">
						<img
							src={AirbnbLogo}
							alt="logo"
							className="nav--logo"
						/>
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
}

export default NavBar;
