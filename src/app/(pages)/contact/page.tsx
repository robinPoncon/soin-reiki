"use client";

import CustomInput from "@/app/_components/Form/CustomInput/CustomInput";
import CustomTextarea from "@/app/_components/Form/CustomTextarea/CustomTextarea";
import useCustomForm from "@/app/_components/Form/UseCustomForm/UseCustomForm";
import Image from "next/image";
import "./page.scss";

const ContactPage = () => {
	const getSubmit = (submitDatas: FormData) => {
		console.log(submitDatas);
		setIsSubmitBtnDisabled(true);
	};

	const { formDatas, isSubmitBtnDisabled, setIsSubmitBtnDisabled, handleChange, handleSubmit } = useCustomForm(
		[
			{
				name: "message",
				value: "",
				validator: "notEmpty"
			},
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
		<div className="mt-48">
			<h1 className="text-3xl mb-12 pl-24">Vous désirez plus d'informations ? Envoyez-moi un message !</h1>
			<div className="flex justify-between">
				<form
					className="w-2/3 px-24 gap-5 flex flex-col"
					onSubmit={handleSubmit}
				>
					<CustomTextarea
						label="Votre message"
						name="message"
						placeholder="Exemple : Je voudrais plus de renseignements"
						required
						validator={formDatas[0].validator}
						defaultValue={formDatas[0].value}
						returnedValue={handleChange}
					/>
					<div className="flex gap-10">
						<CustomInput
							label="Votre prénom"
							name="firstName"
							placeholder="Exemple : Cécile"
							required
							validator={formDatas[1].validator}
							defaultValue={formDatas[1].value}
							returnedValue={handleChange}
						/>
						<CustomInput
							label="Votre nom"
							name="lastName"
							placeholder="Exemple : Encieux"
							required
							validator={formDatas[2].validator}
							defaultValue={formDatas[2].value}
							returnedValue={handleChange}
						/>
					</div>
					<div className="flex gap-10">
						<CustomInput
							label="Votre email"
							name="email"
							placeholder="Exemple : cecile.encieux@gmail.com"
							required
							validator={formDatas[3].validator}
							defaultValue={formDatas[3].value}
							returnedValue={handleChange}
						/>
						<CustomInput
							label="Votre numéro de téléphone"
							name="phoneNumber"
							placeholder="Exemple : 0634567865"
							required
							validator={formDatas[4].validator}
							defaultValue={formDatas[4].value}
							returnedValue={handleChange}
						/>
					</div>
					<button
						className={`submitBtn ${isSubmitBtnDisabled ? "disabledBtn" : ""}`}
						type="submit"
					>
						Envoyer
					</button>
				</form>
				<figure className="w-1/3 pr-24">
					<Image
						className="m-auto rounded-[30px]"
						alt="illustration of sending email"
						src="/illustrations/illustration-mail.png"
						height={350}
						width={350}
					/>
				</figure>
			</div>
		</div>
	);
};

export default ContactPage;
