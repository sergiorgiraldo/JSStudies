import {getAllSignup, insertSignup} from "../../../helpers/api-util";

async function handler(req,res){
	if (req.method == "POST") {
		const email = req.body.email;

		const signup = {
			dt: new Date().toISOString(),
            email: email
		};

        const data = await insertSignup(signup);

		res.status(201).json({
			response: data,
		});
	} else if (req.method == "GET") {
        const data = await getAllSignup();
        
		res.status(201).json({
			allSignup: data,
		});
	} else {
		res.status(200).json({ message: "I only know GET & POST ¯\_(ツ)_/¯" });
	}
}

export default handler;