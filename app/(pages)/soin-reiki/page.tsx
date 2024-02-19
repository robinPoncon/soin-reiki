"use client";

import BlocTextContent from "@/_components/BlocTextContent/BlocTextContent";
import { useEffect, useState } from "react";

const SoinReikiPage = () => {
	const [breakpointResponsiveValue, setBreakpointResponsiveValue] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setBreakpointResponsiveValue(window.innerWidth);
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
							`Le Reiki est l'énergie de vie qui englobe toute la matière au sein
								de notre univers. Elle est partout autour de nous, et mon travail
								est de la canaliser pour la diffuser en vous. Vous apportant calme,
								sérénité, lâcher prise et bien être !`
						],
						transitionType: "none"
					},
					{
						id: "yin-yang-bloc",
						imgAlt: "icône du yin yang",
						imgSrc: "/icons/icon_yin-yang.svg",
						title: "Une harmonisation énergétique",
						content: [
							`Durant un soin, l'énergie va circuler dans certaines parties du
								corps au travers des méridiens et des chakras. Cette harmonisation
								apporte un rééquilibre au niveau des pensées, des émotions et du
								corps physique. C'est un moment de reconnexion avec soi !`
						],
						transitionType: "none"
					},
					{
						id: "hands-bloc",
						imgAlt: "icône de mains jointes",
						imgSrc: "/icons/icon_hands.svg",
						title: "Un toucher thérapeutique",
						content: [
							`L'utilisation du Reiki se fait par apposition des mains sur
								différentes parties du corps. Elles peuvent être posées délicatement
								ou être à 5/10cm au-dessus du corps. Il n'y a aucune manipulation ce
								qui en fait une méthode de soins très douce et agréable !`
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
							`Le Reiki fut révélé à Mikao Usui, érudit et guérisseur japonais du
								XIXe siècle, durant une retraite introspective de 21 jours au Mont
								Kurama. Cette expérience transpersonnelle lui transmit les
								enseignements et techniques du Reiki, que nous pratiquons
								actuellement. Son attrait universel réside dans sa simplicité et son
								efficacité. Le Reiki continue d'évoluer tout en restant fidèle à ses 
								principes fondamentaux.`
						],
						transitionType: "none"
					},
					{
						id: "light-bloc",
						imgAlt: "icône d'une ampoule",
						imgSrc: "/icons/icon_light.svg",
						title: "Ses principes et sa philosophie",
						content: [
							`Le Reiki repose sur cinq principes essentiels, appelés les "Cinq
								Préceptes du Reiki". Ils guident les praticiens vers l'harmonie
								intérieure et le bien-être en promouvant des valeurs telles que la
								bienveillance, la gratitude et la paix intérieure. Cette
								philosophie, ancrée dans la simplicité et la sagesse, encourage
								chacun à cultiver une connexion profonde avec soi-même et avec
								l'énergie qui nous entoure.`
						],
						transitionType: "none"
					},
					{
						id: "globe-bloc",
						imgAlt: "icône de la planète terre",
						imgSrc: "/icons/icon_globe.svg",
						title: "Un développement mondial",
						content: [
							`Depuis ses modestes débuts au Japon, le Reiki a transcendé les
								frontières pour devenir une pratique mondiale de guérison et de
								bien-être. Son attrait universel réside dans sa simplicité et son
								efficacité. Au fil des décennies, diverses écoles et approches ont
								émergé, reflétant la diversité culturelle et les besoins
								individuels. Le Reiki ne vise pas à se substituer de la médecine,
								mais plutôt à agir en complémentarité avec elle !`
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
							`Le Reiki, grâce à sa nature apaisante, ouvre la voie à une
								relaxation profonde, offrant ainsi un précieux moyen de diminuer le
								stress et l'anxiété. En encourageant le lâcher-prise, il
								permet d'atteindre une clarté mentale qui renforce à la fois la
								concentration et l'estime de soi. Grâce à cette harmonie retrouvée,
								le Reiki offre une profonde paix intérieure.`
						],
						transitionType: "none"
					},
					{
						id: "heart-bloc",
						imgAlt: "icône d'un coeur",
						imgSrc: "/icons/icon_heart-pink.svg",
						title: "Apaisement émotionnel profond",
						content: [
							`Le Reiki offre bien plus qu'une simple relaxation physique. Il
								travaille également en profondeur pour apaiser les émotions
								tourmentées, libérant ainsi les blocages qui entravent le bien-être
								émotionnel. Cette libération émotionnelle peut vous offrir
								l'opportunité de pratiquer le pardon et de vous reconnecter
								profondément à vous-même.`
						],
						transitionType: "none"
					},
					{
						id: "energy-bloc",
						imgAlt: "icône d'un éclair représentant l'énergie",
						imgSrc: "/icons/icon_energy.svg",
						title: "Renforcement de la vitalité",
						content: [
							`Le Reiki, de par sa nature énergétique, revitalise le corps et
								l'esprit. En stimulant la circulation énergétique, il renforce la
								vitalité, régénère le corps et favorise un sentiment de vigueur
								renouvelé. Cette vitalité stimule la vitesse de guérison en
								dynamisant l'ensemble du système immunitaire. Cette énergie nouvelle
								se traduit par une qualité de vie améliorée.`
						],
						transitionType: "none"
					}
				]}
			>
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
