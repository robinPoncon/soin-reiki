"use client";

import BlocTextContent from "@/_components/BlocTextContent/BlocTextContent";
import Link from "next/link";
import { useEffect, useState } from "react";

const FullConsciousnessPage = () => {
	const [breakpointResponsiveValue, setBreakpointResponsiveValue] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setBreakpointResponsiveValue(window.innerWidth);
			window.scrollTo(0, 0);
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
							`Fondamentalement, la pleine conscience consiste à diriger notre conscience vers 
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
							de considérablement réduire le flot incessant de pensées. Avec l'expérience, nous réalisons 
							progressivement que nos pensées ne définissent pas qui nous sommes. Ce constat produit un 
							état de lâcher-prise, favorisant ainsi notre bien-être global.`
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
							soi-même. Et ce voyage permet de se libérer de nos comportements et schémas de pensées négatifs.
							En définitive, pratiquer la pleine conscience est un acte d'Amour de Soi 
							favorisant la guérison totale.`
						],
						transitionType: "none"
					}
				]}
			>
				<div className="flex flex-col gap-5">
					<h3 className="text-xl text-center font-semibold italic mt-6 mb-2 px-4">
						Envie de tenter l'expérience ?
					</h3>
					<Link
						href="/reservation"
						className="actionLinkPink mediumBtn"
					>
						<span className="textActionLink">Je réserve ma séance</span>
						<span className="iconActionLink" />
					</Link>
				</div>
			</BlocTextContent>
		</section>
	);
};

export default FullConsciousnessPage;
