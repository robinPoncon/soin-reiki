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
							`La pleine conscience consiste à porter son attention sur l’instant présent, en observant simplement les sensations du corps, 
							les émotions et les pensées telles qu’elles apparaissent. Cette observation sans jugement permet de prendre du recul 
							et de mieux comprendre ce qui se vit intérieurement.`
						],
						transitionType: "none"
					},
					{
						id: "heal-path-bloc",
						imgAlt: "icône d'une plante symbolisant la guérison",
						imgSrc: "/icons/icon_think.svg",
						title: "Apaiser le mental",
						content: [
							`En ramenant doucement l’attention au corps et aux sensations, le flot des pensées peut naturellement ralentir. 
							Cette prise de distance permet de ne plus se laisser emporter par le mental et de retrouver un espace plus calme 
							et plus stable face à ce qui est vécu.`
						],
						transitionType: "none"
					},
					{
						id: "awareness-bloc",
						imgAlt: "icône d'un oeil'",
						imgSrc: "/icons/icon_healing-pink.svg",
						title: "Retrouver de la clarté",
						content: [
							`La pleine conscience n’a pas pour objectif de transformer ou de supprimer ce qui est ressenti, mais d’apprendre à l’accueillir différemment. 
							Avec le temps, cette écoute permet de mieux se situer face à ses émotions et d’avancer avec davantage de justesse dans ses choix.`
						],
						transitionType: "none"
					}
				]}
			>
				<div className="flex flex-col gap-2">
					<h3 className="text-lg sm:text-xl text-center font-semibold italic mb-2 px-4">
						Envie de tenter l'expérience ?
					</h3>
					<Link
						href="/reservation"
						className="flex actionLinkPink mediumBtn"
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
