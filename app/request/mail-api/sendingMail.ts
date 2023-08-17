import { CustomObject } from "@/_types/formType";

export const sendingMail = async (submitDatas: CustomObject) => {
	const SibApiV3Sdk = require("sib-api-v3-typescript");
	const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

	const apiKey = apiInstance.authentications["apiKey"];
	apiKey.apiKey = process.env.API_KEY;

	var sendSmtpEmail = {
		to: [
			{
				email: "poncon.robin@gmail.com",
				name: "Admin"
			}
		],
		templateId: 6,
		params: submitDatas,
		subject: "Prise de contact depuis le site"
	};

	try {
		const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
		return response;
	} catch (error) {
		throw error;
	}
};
