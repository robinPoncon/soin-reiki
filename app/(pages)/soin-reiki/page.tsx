"use client";

import BlocTextContent from "@/_components/BlocTextContent/BlocTextContent";
import Link from "next/link";
import { useEffect, useState } from "react";

const SoinReikiPage = () => {
	const [breakpointResponsiveValue, setBreakpointResponsiveValue] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setBreakpointResponsiveValue(window.innerWidth);
			window.scrollTo(0, 0);
		}
	}, []);

	return (
		<section className="flex flex-col gap-10 py-10">
			<BlocTextContent
				breakpointResponsiveValue={breakpointResponsiveValue}
				mainTitle="Qu'est-ce que le Reiki ?"
				textDatasArray={[
					{
						id: "universe-bloc",
						imgAlt: "icône représentant l'énergie universelle",
						imgSrc: "/icons/icon_universe.svg",
						title: "Une énergie universelle",
						content: [
							`Le Reiki est une pratique énergétique d’origine japonaise favorisant la détente et le relâchement. 
							Durant la séance, il est utilisé comme un support permettant au corps et au mental de ralentir, 
							afin de créer un espace propice à l’écoute de soi.`
						],
						transitionType: "none"
					},
					{
						id: "yin-yang-bloc",
						imgAlt: "icône du yin yang",
						imgSrc: "/icons/icon_yin-yang.svg",
						title: "Une harmonisation énergétique",
						content: [
							`Le Reiki est souvent décrit comme une pratique d’harmonisation énergétique. Pendant la séance, 
							il invite à un relâchement global du corps et du mental, permettant de prendre du recul sur ce qui est vécu 
							et de retrouver une sensation d’équilibre intérieur.`
						],
						transitionType: "none"
					},
					{
						id: "hands-bloc",
						imgAlt: "icône de mains jointes",
						imgSrc: "/icons/icon_hands.svg",
						title: "Un toucher thérapeutique",
						content: [
							`Le Reiki se pratique par apposition des mains sur différentes zones du corps, ou légèrement au-dessus. 
							Il n’y a aucune manipulation. La séance se déroule dans un cadre calme et respectueux, favorisant la détente et le lâcher-prise.`
						],
						transitionType: "none"
					}
				]}
			/>
			<BlocTextContent
				breakpointResponsiveValue={breakpointResponsiveValue}
				darkMode
				mainTitle="Les Origines du Reiki"
				textDatasArray={[
					{
						id: "japanese-bloc",
						imgAlt: "icône d'une plante",
						imgSrc: "/icons/icon_plant.svg",
						title: "Des racines japonaises",
						content: [
							`Le Reiki a été découvert au Japon au début du XXe siècle par Mikao Usui, à la suite d’une démarche personnelle de recherche et d’introspection. 
							Cette pratique s’est ensuite transmise au fil du temps, conservant une approche simple, centrée sur la présence, le relâchement et l’écoute de soi.`
						],
						transitionType: "none"
					},
					{
						id: "light-bloc",
						imgAlt: "icône d'une ampoule",
						imgSrc: "/icons/icon_light.svg",
						title: "Ses principes et sa philosophie",
						content: [
							`Le Reiki s’appuie sur cinq principes de vie, souvent appelés les « Cinq Préceptes du Reiki ». Ils invitent à cultiver 
							une relation plus apaisée à soi-même et aux autres, en mettant l’accent sur des valeurs telles que la gratitude, le respect, 
							la bienveillance et la simplicité dans le quotidien.`
						],
						transitionType: "none"
					},
					{
						id: "globe-bloc",
						imgAlt: "icône de la planète terre",
						imgSrc: "/icons/icon_globe.svg",
						title: "Un développement mondial",
						content: [
							`Au fil des années, le Reiki s’est diffusé dans de nombreux pays et est aujourd’hui pratiqué comme une approche de relaxation et 
							de bien-être complémentaire. Il ne se substitue pas à un suivi médical, mais peut s’inscrire en complément, 
							comme un temps de pause favorisant l’écoute intérieure.`
						],
						transitionType: "none"
					}
				]}
			/>

			<BlocTextContent
				breakpointResponsiveValue={breakpointResponsiveValue}
				pinkColor
				mainTitle="Les Bienfaits du Reiki"
				textDatasArray={[
					{
						id: "brain-bloc",
						imgAlt: "icône d'un cerveau",
						imgSrc: "/icons/icon_brain-pink.svg",
						title: "Sérénité mentale et détente",
						content: [
							`Le Reiki favorise un état de relaxation profonde, permettant au corps et au mental de ralentir. 
							Cet apaisement peut aider à prendre du recul sur ce qui est vécu et à retrouver une sensation de calme et de clarté intérieure.`
						],
						transitionType: "none"
					},
					{
						id: "heart-bloc",
						imgAlt: "icône d'un coeur",
						imgSrc: "/icons/icon_heart-pink.svg",
						title: "Apaisement émotionnel profond",
						content: [
							`Dans cet état de détente, certaines émotions ou prises de conscience peuvent émerger naturellement. 
							Elles sont simplement accueillies comme faisant partie du moment, offrant parfois un espace pour mieux comprendre ce qui se vit intérieurement.`
						],
						transitionType: "none"
					},
					{
						id: "energy-bloc",
						imgAlt: "icône d'un éclair représentant l'énergie",
						imgSrc: "/icons/icon_energy.svg",
						title: "Retrouver de l’énergie",
						content: [
							`En permettant un temps de pause et de relâchement, la séance peut donner la sensation de retrouver de l’espace 
							et de la disponibilité intérieure. Certaines personnes ressentent ainsi un regain d’énergie dans les jours qui suivent.`
						],
						transitionType: "none"
					}
				]}
			>
				<div className="flex flex-col gap-2">
					<h2 className="text-lg sm:text-xl text-center font-semibold italic mb-2 px-4">
						Envie de tenter l'expérience ?
					</h2>
					<Link
						href="/reservation"
						className="flex actionLinkPink mediumBtn"
					>
						<span className="textActionLink">Je réserve ma séance</span>
						<span className="iconActionLink" />
					</Link>
				</div>
				{/* // <ScrollAnimation
					// 	id="redirectLinkSoinReiki"
					// 	classContent="flex flex-col gap-5"
					// 	styleBeforeTransition={{
					// 		opacity: "0",
					// 		transition: "opacity 2.5s, margin-top 2.5s",
					// 		marginTop: "100px"
					// 	}}
					// 	styleAfterTransition={{
					// 		opacity: "1",
					// 		marginTop: "0"
					// 	}}
					// >
					// 	<h3 className="text-xl text-center font-semibold italic mt-6 mb-2 px-4">
					// 		Souhaitez-vous expérimenter une séance de Reiki ?
					// 	</h3>
					// 	<Link
					// 		href="/soin-reiki"
					// 		className="actionLinkYellow"
					// 	>
					// 		<span className="textActionLink">Déroulement d'une séance</span>
					// 		<span className="iconActionLink" />
					// 	</Link>
					// </ScrollAnimation> */}
			</BlocTextContent>
		</section>
	);
};

export default SoinReikiPage;
