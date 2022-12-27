import React from "react";

export default function App() {
	const [contact, setContact] = React.useState({
		firstName: "John",
		lastName: "Doe",
		phone: "+1 (719) 555-1212",
		email: "itsmyrealname@example.com",
		isFavorite: false
	});

	function toggleFavorite() {
		setContact((prevContact) => {
			return { ...prevContact, isFavorite: !prevContact.isFavorite };
		});
		//no need to create a clone, you can return the object created on the fly
		// setContact((prevContact) => {
		//     const newContact = {...prevContact};
		//     newContact.isFavorite = !newContact.isFavorite;
		//     return newContact;
		// });
	}

	return (
		<main>
			<article className="card">
				<img src="./images/user.png" className="card--image" />
				<div className="card--info">
					<img
						src={
							contact.isFavorite
								? `../images/star-filled.png`
								: `../images/star-empty.png`
						}
						className="card--favorite"
						onClick={toggleFavorite}
					/>
					<h2 className="card--name">
						{contact.firstName} {contact.lastName}
					</h2>
					<p className="card--contact">{contact.phone}</p>
					<p className="card--contact">{contact.email}</p>
				</div>
			</article>
		</main>
	);
}
