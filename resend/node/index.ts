import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const apiKey: string = process.env.APIKEY;

const resend: Resend = new Resend(apiKey);

(async function () {
	try {
		const data = await resend.emails.send({
			from: "quenti@bravotango.nl",
			to: ["sergiorgiraldo@gmail.com"],
			subject: "Hello World 2",
			html: "<strong>It works!</strong>"
		});

		console.log(data);
	} catch (error) {
		console.error(error);
	}
})();
