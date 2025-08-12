"use server";

import { sendMail } from "@/_lib/mail";
import { CustomObject } from "../_types/formType";

export async function sendMailAction(formData: CustomObject) {
	const { firstName, lastName, email, message, phoneNumber } = formData;

	await sendMail({
		to: "poncon.robin@gmail.com",
		name: "Robin",
		subject: "Prise de contact Site Reiki",
		body: `<section><h1>Salut Robin !</h1>
		<p>Quelqu'un vous a contacté sur les racines de la guérison !</p>
		<div>
		    <h2>Voici ses infos : </h2>
		    <p>Prénom : ${firstName}</p>
		    <p>Nom : ${lastName}</p>
		    <p>Email : ${email}</p>
			<p>Numéro de téléphone : ${phoneNumber}</p>
		    <p>Message : ${message}</p>
		</div></section>`
	});
}
