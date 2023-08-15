import { sendingMail } from "../../request/mail-api/sendingMail";

export async function POST(req: Request) {
	const body = await req.json();
	const result = await sendingMail(body);
	return new Response(JSON.stringify(result));
}
