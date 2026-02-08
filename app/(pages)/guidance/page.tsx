"use client";

import BlocTextContent from "@/_components/BlocTextContent/BlocTextContent";
import Link from "next/link";
import { useEffect, useState } from "react";

const GuidancePage = () => {
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
				mainTitle="La Guidance des Cartes"
				textDatasArray={[
					{
						id: "decode-blockages-bloc",
						imgAlt: "icône d'un puzzle",
						imgSrc: "/icons/icon_puzzle.svg",
						title: "Un support de compréhension",
						content: [
							`Les cartes peuvent être utilisées comme un support pour explorer une situation sous un autre angle. 
							Elles permettent d’ouvrir la discussion, de mettre en lumière certains ressentis ou questionnements, 
							et d’apporter un regard différent sur ce que vous traversez.`
						],
						transitionType: "none"
					},
					{
						id: "heal-path-bloc",
						imgAlt: "icône d'une plante symbolisant la guérison",
						imgSrc: "/icons/icon_healing.svg",
						title: "Ouvrir des pistes",
						content: [
							`Plutôt que d’apporter des réponses toutes faites, les cartes servent à faire émerger des pistes de réflexion. 
							Elles peuvent aider à prendre du recul, à envisager de nouvelles perspectives et à mieux comprendre ce qui est en jeu dans une situation donnée.`
						],
						transitionType: "none"
					},
					{
						id: "awareness-bloc",
						imgAlt: "icône d'un oeil'",
						imgSrc: "/icons/icon_eye.svg",
						title: "Une prise de recul",
						content: [
							`L’objectif n’est pas de prédire ou de décider à votre place, mais de favoriser une prise de recul. 
							En observant une situation autrement, certaines compréhensions peuvent apparaître naturellement, 
							permettant d’avancer avec plus de clarté et de justesse.`
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
						className="flex actionLinkBlue mediumBtn"
					>
						<span className="textActionLink">Je réserve ma séance</span>
						<span className="iconActionLink" />
					</Link>
				</div>
			</BlocTextContent>
			{/* <article className="mx-auto max-w-xs md:max-w-xl py-10">
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Pour aller plus loin
				</h2>
				<p className="text-center mt-5">
					Besoin d'informations sur les prix ?{" "}
					<Link
						className="redirectLinkBlue whitespace-nowrap"
						href="/tarifs"
					>
						Je consulte les tarifs.
					</Link>
				</p>
				<p className="text-center mt-5">
					Envie de tenter l'expérience ?{" "}
					<Link
						className="redirectLinkBlue whitespace-nowrap"
						href="/reservation"
					>
						Je réserve ma séance.
					</Link>
				</p>

				<p className="text-center mt-5">
					Si vous désirez en savoir davantage sur les guidances en tirage de cartes ou
					pour toute autre information, n'hésitez pas à me laisser un message via la{" "}
					<Link
						className="redirectLinkBlue"
						href="/contact"
					>
						page de contact.
					</Link>
				</p>
			</article> */}
		</section>
	);
};

export default GuidancePage;
