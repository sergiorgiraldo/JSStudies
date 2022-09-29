import {getFeedbackById} from "./helpers";

function handler(req, res){
    const feedbackId = req.query.feedbackId;
    const feedback = getFeedbackById(feedbackId);
    res.status(200).json({ message: "success!", feedback:feedback });
}



export default handler;