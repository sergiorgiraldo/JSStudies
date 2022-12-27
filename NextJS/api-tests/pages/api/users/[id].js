export default async function handler(req, res) {
	const userId = req.query.id;
	if (req.method === "GET") {
		const ret = await fetch(`https://reqres.in/api/users/${userId}`, {
			method: "GET"
		});
		const data = await ret.json();
		res.status(200).json(data);
	} 
	else if (req.method === "PUT") {
		const newUser = {
			name: "jane doe",
			job: "doppelganger"
		};
		const ret = await fetch(`https://reqres.in/api/users/${userId}`, {
			method: "PUT",
			body: JSON.stringify(newUser),
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await ret.json();
		res.status(200).json(data);
	} 
	else if (req.method === "DELETE") {
		const ret = await fetch(`https://reqres.in/api/users/${userId}`, {
			method: "DELETE"
		});
		const data = await ret.status;
		res.status(200).json({ status: data });
	}
}
