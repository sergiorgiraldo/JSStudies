export default async function handler(req, res) {
	if (req.method === "GET") {
		const ret = await fetch("https://reqres.in/api/users/", {
			method: "GET"
		});
		const data = await ret.json();
		res.status(200).json(data);
	} 
	else if (req.method === "POST") {
		const newUser = {
			"name": "john doe",
			"job": "aleph"
		};
		const ret = await fetch("https://reqres.in/api/users/", {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await ret.json();
		res.status(200).json(data);
	}
}
