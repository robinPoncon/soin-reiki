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
		<section className="pt-10">
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
							détendre et à réduire le stress, à stimuler votre créativité ou à accueillir vos émotions,
							chaque voyage sonore est une invitation à la redécouverte de soi. Cette expérience est
							accessible aux adultes comme aux enfants !`
						],
						transitionType: "none"
					},
					{
						id: "intuitive-writing-bloc",
						imgAlt: "icône d'une plume qui écrit sur une feuille",
						imgSrc: "/icons/icon_writing.svg",
						title: "Écriture intuitive",
						content: [
							`En se concentrant pleinement sur notre corps et sur le moment présent, il est possible
							de considérablement réduire le flot incessant de pensées. En développant cette capacité
							de détachement et de recul, nous réalisons progressivement que nos pensées ne définissent 
							pas notre identité individuelle. Ce constat nous conduit naturellement vers un sentiment 
							de lâcher-prise, favorisant ainsi notre bien-être global. En outre, la diminution du 
							nombre de pensées contribue de manière significative à atténuer le stress et l'anxiété.`
						],
						transitionType: "none"
					},
					{
						id: "music-inspiration-bloc",
						imgAlt: "icône d'une note de musique'",
						imgSrc: "/icons/icon_music.svg",
						title: "Inspiration musicale",
						content: [
							`La pleine conscience représente un puissant levier de croissance personnelle. En se 
							reconnectant à son corps et à ses émotions, on s'engage dans un voyage d'exploration de 
							soi-même. Cette démarche nous permet de prendre conscience de nos schémas négatifs, sources 
							de souffrance, et nous donne l'opportunité d'entreprendre des changements progressifs dans 
							nos comportements. En définitive, pratiquer la pleine conscience est un acte d'Amour de Soi 
							favorisant la guérison totale.`
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
							`La pleine conscience, est un état d'être plutôt simple à appréhender, la difficulté 
							réside dans le fait de réussir à maintenir cet état constamment. 
							Fondamentalement, la pleine conscience consiste à diriger notre conscience vers 
							nos sensations corporelles, nos émotions et nos pensées. C'est cette prise 
							de recul et de détachement qui permettent d'observer notre comportement sans porter 
							de jugement. Un exemple classique illustrant ce processus est la simple observation de 
							notre respiration.`
						],
						transitionType: "none"
					},
					{
						id: "emotion-let-go-bloc",
						imgAlt: "icône d'un coeur",
						imgSrc: "/icons/icon_heart-pink.svg",
						title: "Lâcher prise émotionnel",
						content: [
							`En se concentrant pleinement sur notre corps et sur le moment présent, il est possible
							de considérablement réduire le flot incessant de pensées. En développant cette capacité
							de détachement et de recul, nous réalisons progressivement que nos pensées ne définissent 
							pas notre identité individuelle. Ce constat nous conduit naturellement vers un sentiment 
							de lâcher-prise, favorisant ainsi notre bien-être global. En outre, la diminution du 
							nombre de pensées contribue de manière significative à atténuer le stress et l'anxiété.`
						],
						transitionType: "none"
					},
					{
						id: "self-reconnection-bloc",
						imgAlt: "icône du yin yang'",
						imgSrc: "/icons/icon_yin-yang-pink.svg",
						title: "Reconnexion de soi",
						content: [
							`La pleine conscience représente un puissant levier de croissance personnelle. En se 
							reconnectant à son corps et à ses émotions, on s'engage dans un voyage d'exploration de 
							soi-même. Cette démarche nous permet de prendre conscience de nos schémas négatifs, sources 
							de souffrance, et nous donne l'opportunité d'entreprendre des changements progressifs dans 
							nos comportements. En définitive, pratiquer la pleine conscience est un acte d'Amour de Soi 
							favorisant la guérison totale.`
						],
						transitionType: "none"
					}
				]}
			></BlocTextContent>
		</section>
	);
};

export default SoundTravelPage;
