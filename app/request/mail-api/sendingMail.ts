type ContactDatas = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
};

export const sendingMail = (datas: ContactDatas) => {
	// This example is for Typescript-node

	var SibApiV3Sdk = require("sib-api-v3-typescript");

	var apiInstance = new SibApiV3Sdk.SMTPApi();

	// Configure API key authorization: api-key

	var apiKey = apiInstance.authentications["apiKey"];
	apiKey.apiKey = process.env.NEXT_PUBLIC_API_KEY;

	// Configure API key authorization: partner-key

	var partnerKey = apiInstance.authentications["partnerKey"];
	partnerKey.apiKey = process.env.NEXT_PUBLIC_API_KEY;

	// Set headers for the request
	const headers = {
		"api-key": process.env.NEXT_PUBLIC_API_KEY,
		"content-type": "application/json",
		accept: "application/json"
	};

	var sendSmtpEmail = {
		to: [
			{
				email: "poncon.robin@gmail.com",
				name: "John Doe"
			}
		],
		templateId: 6,
		params: {
			firstName: datas.firstName,
			lastName: datas.lastName,
			email: datas.email,
			phoneNumber: datas.phoneNumber,
			message: datas.message
		},
		headers: headers
	};

	return apiInstance.sendTransacEmail(sendSmtpEmail);
};
