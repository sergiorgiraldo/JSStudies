// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))
var h1 = document.createElement("h1");
h1.textContent = "Hello, React!";
var root = document.getElementById("root");
root.appendChild(h1);
