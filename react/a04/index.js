// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page)

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
const navbar = (
	<nav>
		<h1>Sergio Giraldo website</h1>
		<div>
			<ul>
				<li>Pricing</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	</nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
