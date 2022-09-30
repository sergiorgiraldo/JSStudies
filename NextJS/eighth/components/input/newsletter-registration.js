import classes from "./newsletter-registration.module.css";
import { useRef, useState } from "react";

function NewsletterRegistration() {
	const emailInputRef = useRef();
	const [signedUp, setSignedUp] = useState(false);

	function registrationHandler(event) {
		event.preventDefault();
		const formEmail = emailInputRef.current.value;

		const reqBody = { email: formEmail };

		fetch("/api/newsletter", {
			method: "POST",
			body: JSON.stringify(reqBody),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setSignedUp(true);
			});

		document.getElementById("email").value = "";
	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type="email"
						id="email"
						ref={emailInputRef}
						placeholder="Your email"
						aria-label="Your email"
						/>
					<button>Register</button>
				</div>
			</form>
			{signedUp && <b>Success! Stay tuned for our news!!</b>}
		</section>
	);
}

export default NewsletterRegistration;
