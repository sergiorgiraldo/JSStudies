import react from "react";
import reactDOM from "react-dom";

const navbar = (
	<nav>
		<h1>Bob's Bistro</h1>
		<ul>
			<li>Menu</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
);

reactDOM.render(navbar, document.getElementById("root"));
