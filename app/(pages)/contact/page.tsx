"use client";

import CustomInput from "../../_components/Form/CustomInput/CustomInput";
import CustomTextarea from "../../_components/Form/CustomTextarea/CustomTextarea";
import useCustomForm from "../../_components/Form/UseCustomForm/UseCustomForm";
import Image from "next/image";
import { formDataToObject } from "@/_utils/form";
import { useContext, useEffect } from "react";
import FlashMessagesContext from "@/_context/FlashMessagesContext";
import { useLoader } from "@/_context/LoaderContext";

const ContactPage = () => {
	const flashMessage = useContext(FlashMessagesContext);
	const { isLoading, showLoader, hideLoader } = useLoader();

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);
		}
	}, []);

	const getSubmit = async (submitDatas: FormData) => {
		setIsSubmitBtnDisabled(true);
		showLoader();
		const submitDatasConverted = formDataToObject(submitDatas);

		try {
			const response = await fetch("/api/contactEmail", {
				method: "POST",
				body: JSON.stringify(submitDatasConverted)
			});

			if (response.ok) {
				hideLoader();
				flashMessage.addMessage({
					type: "success",
					title: "Succès",
					text: "Merci ! Votre message a bien été envoyé, je vous ferai un retour rapidement."
				});
				resetFormDataValues();
			} else {
				hideLoader();
				setIsSubmitBtnDisabled(false);
				flashMessage.addMessage({
					type: "error",
					title: "Erreur",
					text: "Une erreur est survenue durant l'envoi de votre message, n'hésitez pas à me contacter directement par email. Vous trouverez mon email en bas de la page."
				});
			}
		} catch (error) {
			hideLoader();
			setIsSubmitBtnDisabled(false);
			flashMessage.addMessage({
				type: "error",
				title: "Erreur",
				text: "Une erreur est survenue durant l'envoi de votre message, n'hésitez pas à me contacter directement par email. Vous trouverez mon email en bas de la page."
			});
		}
	};

	const {
		formDatas,
		isSubmitBtnDisabled,
		setIsSubmitBtnDisabled,
		handleChange,
		handleSubmit,
		resetFormDataValues
	} = useCustomForm(
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
		<div className={`flex flex-col gap-20 py-20 px-2 lg:px-24 ${isLoading ? "blur-md" : ""}`}>
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				Ensemble vers votre Guérison !
			</h1>
			<p className="italic text-justify md:max-w-3xl mx-auto px-2">
				Je suis là pour répondre à toutes vos questions et vous fournir des informations
				détaillées sur les différents services, accompagnements et prestations que je
				propose. Utilisez simplement le formulaire ci-dessous pour me contacter, et je vous
				répondrai dans les meilleurs délais !
			</p>
			<div className="flex flex-col-reverse gap-20 px-2 justify-between lg:flex-row">
				<form
					className="gap-5 flex flex-col lg:w-2/3"
					onSubmit={handleSubmit}
				>
					<CustomTextarea
						label="Votre message"
						name="message"
						placeholder="Exemple : Je voudrais plus de renseignements sur un soin reiki"
						required
						validator={formDatas[0].validator}
						defaultValue={formDatas[0].value}
						returnedValue={handleChange}
					/>
					<div className="flex flex-col gap-5 md:flex-row">
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
					<div className="flex flex-col gap-5 md:flex-row">
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
						className={`actionBtn mt-5 ${isSubmitBtnDisabled ? "disabledBtn" : ""}`}
						type="submit"
					>
						Envoyer
					</button>
				</form>
				<figure className="lg:w-1/3">
					<Image
						className="m-auto customImgBlueGreen"
						alt="illustration d'un envoi d'email"
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
