"use client";

import BlocTextContent from "@/_components/BlocTextContent/BlocTextContent";
import { useEffect, useState } from "react";

const SoundTravelPage = () => {
	const [breakpointResponsiveValue, setBreakpointResponsiveValue] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setBreakpointResponsiveValue(window.innerWidth);
			window.scrollTo(0, 0);
		}
	}, []);
	return (
		<section className="flex flex-col gap-10 pt-10">
			<BlocTextContent
				breakpointResponsiveValue={breakpointResponsiveValue}
				mainTitle="Le Voyage Sonore"
				textDatasArray={[
					{
						id: "custom-theme-bloc",
						imgAlt: "icône d'une boussole",
						imgSrc: "/icons/icon_explore.svg",
						title: "Thème personnalisé",
						content: [
							`Le voyage sonore représente une fusion harmonieuse entre une méditation guidée
							en pleine conscience et les sonorités envoûtantes du Handpan. Dans un premier temps, 
							nous définissons ensemble le thème de ce voyage intérieur. Que vous cherchiez à vous 
							détendre, à stimuler votre créativité ou à accueillir vos émotions, chaque voyage sonore
							est une invitation à la redécouverte de soi. Cette expérience est accessible aux adultes
							comme aux enfants !`
						],
						transitionType: "none"
					},
					{
						id: "intuitive-writing-bloc",
						imgAlt: "icône d'une plume qui écrit sur une feuille",
						imgSrc: "/icons/icon_writing.svg",
						title: "Écriture intuitive",
						content: [
							`L'écriture intuitive se révèle être un outil précieux pour laisser libre cours à 
							l'inspiration et à la créativité intérieure. Dans cette démarche, la pleine 
							conscience joue un rôle central, me permettant de libérer mon esprit des agitations
							mentales pour me connecter à mon intuition, émanant du cœur. C'est ainsi que je 
							parviens à trouver les mots justes et les rimes harmonieuses, qui résonneront avec 
							vos expériences et vos émotions.`
						],
						transitionType: "none"
					},
					{
						id: "music-inspiration-bloc",
						imgAlt: "icône d'une note de musique'",
						imgSrc: "/icons/icon_music.svg",
						title: "Inspiration musicale",
						content: [
							`Une fois que la trame narrative est établie, je m'attèle à adapter et créer des 
							compositions musicales qui se fondent harmonieusement dans chaque récit de voyage.
							Mon instrument le Handpan est accordé en 432Hz, une fréquence réputée pour favoriser
							la relaxation, la guérison et le bien-être. Ses vibrations sont spécialement conçues
							pour harmoniser les énergies du corps humain, offrant ainsi une expérience qui 
							transcende le temps.`
						],
						transitionType: "none"
					}
				]}
			></BlocTextContent>
			<BlocTextContent
				breakpointResponsiveValue={breakpointResponsiveValue}
				darkMode
				pinkColor
				mainTitle="Une Expérience Unique"
				textDatasArray={[
					{
						id: "deep-relax-bloc",
						imgAlt: "icône d'une fleur de lotus",
						imgSrc: "/icons/icon_healing-pink.svg",
						title: "Relaxation profonde",
						content: [
							`Les sonorités du Handpan exercent une empreinte envoûtante et méditative. Cette 
							forme de relaxation s'avère particulièrement efficace pour apaiser le mental et 
							dissiper les pensées tumultueuses, contribuant ainsi à réduire considérablement 
							le stress et l'anxiété. Ce relâchement mental vous offre l'opportunité de vous 
							immerger pleinement dans le moment présent, favorisant ainsi une reconnexion profonde 
							à vous-même. Cette prise de conscience peut vous éveiller à des aspects essentiels de 
							votre vie, ouvrant ainsi la voie à un enrichissement personnel.`
						],
						transitionType: "none"
					},
					{
						id: "emotion-let-go-bloc",
						imgAlt: "icône d'un coeur",
						imgSrc: "/icons/icon_heart-pink.svg",
						title: "Lâcher prise émotionnel",
						content: [
							`Chaque voyage est constitué d'une guidance à travers ma voix et d'accompagnements 
							musicaux soigneusement composés. Chaque histoire vise à vous fournir un cadre sûr 
							pour exprimer librement vos émotions. Mon objectif premier est de créer un espace 
							empreint de bienveillance, où chacun se sent libre d'exprimer ses ressentis sans 
							crainte de jugement. En accueillant pleinement les émotions que votre corps souhaite 
							exprimer, vous vous offrez la reconnexion avec l’Amour de Soi qui a le pouvoir de 
							transformer votre existence.`
						],
						transitionType: "none"
					},
					{
						id: "self-reconnection-bloc",
						imgAlt: "icône du yin yang'",
						imgSrc: "/icons/icon_yin-yang-pink.svg",
						title: "Reconnexion de soi",
						content: [
							`Enfin, l'objectif de chacun de mes voyages est de vous guider vers une destination
							bien précise : celle de retrouver votre essence véritable. Au cours de ces explorations 
							intérieures, vous aurez l'opportunité de découvrir vos forces, vos faiblesses, vos 
							blocages et vos émotions. Cette profonde reconnexion avec vous-même vous permettra de 
							redonner du sens à votre quotidien et à votre vie. Et lorsque votre existence retrouve sa 
							signification profonde, la joie, l'amour et le bonheur s'installent pour un séjour 
							durable et épanouissant.`
						],
						transitionType: "none"
					}
				]}
			></BlocTextContent>
		</section>
	);
};

export default SoundTravelPage;
