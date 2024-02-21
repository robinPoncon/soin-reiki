"use client";

import BlocTextContent from "@/_components/BlocTextContent/BlocTextContent";
import { useEffect, useState } from "react";

const FullConsciousnessPage = () => {
	const [breakpointResponsiveValue, setBreakpointResponsiveValue] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setBreakpointResponsiveValue(window.innerWidth);
		}
	}, []);
	return (
		<section className="py-10">
			<BlocTextContent
				breakpointResponsiveValue={breakpointResponsiveValue}
				pinkColor
				mainTitle="La Pleine Conscience"
				textDatasArray={[
					{
						id: "observe-moment-bloc",
						imgAlt: "icône d'un oeil",
						imgSrc: "/icons/icon_eye-pink.svg",
						title: "Observer l'instant présent",
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
						id: "heal-path-bloc",
						imgAlt: "icône d'une plante symbolisant la guérison",
						imgSrc: "/icons/icon_think.svg",
						title: "Apprivoiser ses pensées",
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
						id: "awareness-bloc",
						imgAlt: "icône d'un oeil'",
						imgSrc: "/icons/icon_healing-pink.svg",
						title: "Transformer sa vie",
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

export default FullConsciousnessPage;
