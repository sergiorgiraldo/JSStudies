import React from "react";
import Nav from "react-bootstrap/Nav";
import ReactLogo from "../images/logo192.png";

function Header() {
	return (
		<header>
			<Nav variant="tabs" defaultActiveKey="/home">
				<Nav.Item>
					<Nav.Link href="/home">
						<img src={ReactLogo} alt="logo" width={30} />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Inner page</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="disabled" disabled>
						Disabled
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</header>
	);
}

export default Header;
