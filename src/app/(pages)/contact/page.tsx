"use client";

import CustomInput from "@/app/_components/Form/CustomInput/CustomInput";
import useCustomForm from "@/app/_components/Form/UseCustomForm/UseCustomForm";

const ContactPage = () => {
	const getSubmit = (submitDatas: FormData) => {
		console.log(submitDatas);
		setIsSubmitBtnDisabled(true);
	};

	const { formDatas, isSubmitBtnDisabled, setIsSubmitBtnDisabled, handleChange, handleSubmit } = useCustomForm(
		[
			{
				name: "firstName",
				value: "",
				validator: "notEmpty"
			},
			{
				name: "lastName",
				value: "",
				validator: "notEmpty"
			},
			{
				name: "email",
				value: "",
				validator: "email"
			},
			{
				name: "phoneNumber",
				value: "",
				validator: "phoneNumber"
			}
		],
		getSubmit
	);
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CustomInput
					label="Votre prénom"
					name={formDatas[0].name}
					placeholder="Cécile"
					required
					validator={formDatas[0].validator}
					defaultValue={formDatas[0].value}
					returnedValue={handleChange}
				/>
				<CustomInput
					label="Votre nom"
					name="lastName"
					placeholder="Encieux"
					required
					validator={formDatas[1].validator}
					defaultValue={formDatas[1].value}
					returnedValue={handleChange}
				/>
				<CustomInput
					label="Votre email"
					name="firstname"
					placeholder="cecile.encieux@gmail.com"
					required
					validator={formDatas[2].validator}
					defaultValue={formDatas[2].value}
					returnedValue={handleChange}
				/>
				<CustomInput
					label="Votre téléphone"
					name="phoneNumber"
					placeholder="0634567865"
					required
					validator={formDatas[3].validator}
					defaultValue={formDatas[3].value}
					returnedValue={handleChange}
				/>
				<button
					className={isSubmitBtnDisabled ? "disabled" : ""}
					type="submit"
				>
					Envoyer
				</button>
			</form>
		</div>
	);
};

export default ContactPage;
