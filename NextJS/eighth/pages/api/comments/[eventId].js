import { getComments, insertComment } from "../../../helpers/api-util";

async function handler(req, res) {
	if (req.method == "POST") {
		const name = req.body.name;
		const email = req.body.email;
		const comment = req.body.comment;

		const comment_ = {
			name: name,
			email: email,
			comment: comment,
		};

		const data = await insertComment(req.query.eventId, comment_);

		res.status(201).json({
			response: data,
		});
	} else if (req.method == "GET") {
		const data = await getComments(req.query.eventId);

		res.status(201).json({
			allComments: data,
		});
	} else {
		res.status(200).json({ message: "I only know GET & POST ¯_(ツ)_/¯" });
	}
}

export default handler;
