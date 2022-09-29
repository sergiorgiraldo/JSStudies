import { getAllFeedback } from "./index";

export function getFeedbackById(id){
    const data = getAllFeedback();
    const feedback = data.filter(f=>f.id == id);
    return feedback;
}

function handler(req, res){
    const feedbackId = req.query.feedbackId;
    const feedback = getFeedbackById(feedbackId);
    res.status(200).json({ message: "success!", feedback:feedback });
}

export default handler;