export const sendingMail = async (submitDatas: Record<string, FormDataEntryValue>) => {
	const SibApiV3Sdk = require("sib-api-v3-typescript");
	const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

	const apiKey = apiInstance.authentications["apiKey"];
	apiKey.apiKey = process.env.API_KEY;

	var sendSmtpEmail = {
		senders: {
			name: "client test",
			email: "poncon.robin@gmail.com"
		},
		to: [
			{
				email: "poncon.robin@gmail.com",
				name: "Admin"
			}
		],
		templateId: 6,
		params: submitDatas,
		subject: "Prise de contact depuis le site",
		headers: {
			"X-Mailin-custom": "custom_header_1:custom_value_1|custom_header_2:custom_value_2"
		}
	};

	try {
		const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
		return response;
	} catch (error) {
		throw error;
	}
};
