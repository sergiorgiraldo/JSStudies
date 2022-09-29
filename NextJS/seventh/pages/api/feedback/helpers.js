import fs from "fs";
import path from "path";

function getFeedbackFilePath() {
	return path.join(process.cwd(), "data", "feedback.json");
}

export function getAllFeedback() {
	const filePath = getFeedbackFilePath();
	const fileData = fs.readFileSync(filePath);
	return JSON.parse(fileData);
}

export function getFeedbackById(id){
    const data = getAllFeedback();
    const feedback = data.filter(f=>f.id == id);
    return feedback[0];
}
