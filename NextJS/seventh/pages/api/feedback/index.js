import fs from "fs";
import path from "path";

function getFeedbackFilePath(){
    return path.join(process.cwd(), "data", "feedback.json");
}

export function getAllFeedback(){
    const filePath = getFeedbackFilePath();
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);    
}

function handler(req, res) {
	if (req.method == "POST") {
		const email = req.body.email;
		const text = req.body.text;

		const newFeedback = {
			id: new Date().toISOString(),
			email: email,
			text: text,
		};

		const data = getAllFeedback();
		data.push(newFeedback);
        const filePath = getFeedbackFilePath();
		fs.writeFileSync(filePath, JSON.stringify(data));
		res.status(201).json({
			message: "Success, data file updated",
			newFeedback: newFeedback,
		});
	} 
    else if (req.method == "GET") {
		const data = getAllFeedback();
		res.status(201).json({
			message: "Success, data file retrieved",
			allFeedback: data,
		});    
    }
    else {
		res.status(200).json({ message: "This works!" });
	}
}

export default handler;
