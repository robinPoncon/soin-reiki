import { sendingMail } from "../../request/mail-api/sendingMail";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	try {
		const result = await sendingMail(req.body);

		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: "An error occurred while sending the email." });
	}
}
