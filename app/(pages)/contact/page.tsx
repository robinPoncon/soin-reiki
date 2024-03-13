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
		<div className={`flex flex-col gap-16 py-20 px-4 lg:px-24 ${isLoading ? "blur-md" : ""}`}>
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				Ensemble vers votre Guérison !
			</h1>
			<p className="italic text-justify md:max-w-3xl mx-auto">
				Je suis là pour répondre à toutes vos questions et vous fournir des informations
				détaillées sur les différents services, accompagnements et prestations que je
				propose. Utilisez simplement le formulaire ci-dessous pour me contacter, et je vous
				répondrai dans les meilleurs délais !
			</p>
			<div className="flex flex-col gap-16 justify-between lg:flex-row">
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
					<div className="flex flex-col gap-5 xl:flex-row">
						<CustomInput
							label="Votre prénom"
							name="firstName"
							placeholder="Exemple : Arthur"
							required
							validator={formDatas[1].validator}
							defaultValue={formDatas[1].value}
							returnedValue={handleChange}
						/>
						<CustomInput
							label="Votre nom"
							name="lastName"
							placeholder="Exemple : Pendragon"
							required
							validator={formDatas[2].validator}
							defaultValue={formDatas[2].value}
							returnedValue={handleChange}
						/>
					</div>
					<div className="flex flex-col gap-5 xl:flex-row">
						<CustomInput
							label="Votre email"
							name="email"
							placeholder="Exemple : arthur.pendragon@gmail.com"
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
				<iframe
					title="map google avec l'adresse de l'entreprise"
					className="hidden mx-auto customImgBlueGreen sm:block"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.674599562002!2d-0.5713973000000001!3d44.8078198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527a2a84c3b35%3A0x2ce7908c3dc9906e!2sLes%20Racines%20de%20la%20Gu%C3%A9rison%20-%20Accompagnement%20%C3%89nerg%C3%A9tique%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1710323655363!5m2!1sfr!2sfr"
					width="400"
					height="400"
					style={{ border: "none" }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
				<iframe
					title="map google avec l'adresse de l'entreprise"
					className="mx-auto customImgBlueGreen sm:hidden"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.674599562002!2d-0.5713973000000001!3d44.8078198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527a2a84c3b35%3A0x2ce7908c3dc9906e!2sLes%20Racines%20de%20la%20Gu%C3%A9rison%20-%20Accompagnement%20%C3%89nerg%C3%A9tique%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1710323655363!5m2!1sfr!2sfr"
					width="280"
					height="280"
					style={{ border: "none" }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
				{/* <figure className="lg:w-1/3">
					<Image
						className="m-auto customImgBlueGreen"
						alt="illustration d'un envoi d'email"
						src="/illustrations/illustration-mail.png"
						height={350}
						width={350}
					/>
				</figure> */}
			</div>
		</div>
	);
};

export default ContactPage;
