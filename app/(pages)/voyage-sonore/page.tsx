"use client";

import BlocTextContent from "@/_components/BlocTextContent/BlocTextContent";
import Link from "next/link";
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
		<section className="flex flex-col gap-10 py-10">
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
							nous définissons ensemble le thème de ce voyage intérieur. Chaque voyage sonore
							est une invitation à la redécouverte de soi !`
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
							l'inspiration et à la créativité. Grâce à la pleine conscience, mon mental s'apaise
							et je peux écouter l'intuition venant de mon cœur. C'est ainsi que je parviens à 
							trouver les mots justes, qui résonneront avec vos expériences et vos émotions.`
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
							Mon instrument de musique est accordé en 432 Hz, les vibrations de cette fréquence qui 
							en découlent sont réputées pour favoriser la relaxation, la guérison et le bien-être.`
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
							le stress et l'anxiété.`
						],
						transitionType: "none"
					},
					{
						id: "emotion-let-go-bloc",
						imgAlt: "icône d'un coeur",
						imgSrc: "/icons/icon_heart-pink.svg",
						title: "Lâcher prise émotionnel",
						content: [
							`Chaque voyage vise à vous fournir un cadre sûr pour exprimer librement vos émotions. 
							Mon objectif premier est de créer un espace de bienveillance, où chacun se sent libre 
							d'exprimer ses ressentis sans crainte de jugement. Ce lâcher-prise permet de renforcer
							l'Amour de Soi !`
						],
						transitionType: "none"
					},
					{
						id: "self-reconnection-bloc",
						imgAlt: "icône du yin yang'",
						imgSrc: "/icons/icon_yin-yang-pink.svg",
						title: "Reconnexion de soi",
						content: [
							`Au cours de ces voyages intérieurs, vous aurez l'opportunité de découvrir vos forces, vos faiblesses, vos 
							blocages et vos émotions. C'est cette reconnexion à vous-même qui redonne du sens à votre existence. 
							Et quand sa vie a du sens, le bonheur s'installe pour un séjour durable !`
						],
						transitionType: "none"
					}
				]}
			>
				<div className="flex flex-col gap-5">
					<h3 className="text-lg sm:text-xl text-center font-semibold italic mb-2 px-4">
						Envie de tenter l'expérience ?
					</h3>
					<Link
						href="/tarifs"
						className="flex actionLinkPink"
					>
						<span className="textActionLink">Je consulte les prestations</span>
						<span className="iconActionLink" />
					</Link>
				</div>
			</BlocTextContent>
			<article className="flex flex-col py-10 gap-10">
				<h2 className="titleFont font-semibold text-center text-2xl mx-auto w-fit customBorderYellow p-4 md:text-4xl">
					Découvrir le Handpan
				</h2>
				<p className="text-justify italic mx-auto px-4 lg:max-w-3xl">
					Vous êtes intéressé par cette expérience, mais vous n'avez aucune idée de ce
					qu'est le Handpan ? Voici deux extraits vidéos ci-dessous qui vous permettront
					de découvrir le potentiel méditatif et relaxant de ce merveilleux instrument !
				</p>
				<div className="flex flex-col justify-center mx-auto px-4 gap-20 md:flex-row lg:gap-48">
					<video
						className="rounded-xl"
						width="320"
						height="320"
						controls
					>
						<source
							src="/videos/handpan-music1.mp4"
							type="video/mp4"
						/>
						Votre navigateur ne supporte pas la lecture de vidéos HTML5.
					</video>
					<video
						className="rounded-xl"
						width="320"
						height="320"
						controls
					>
						<source
							src="/videos/handpan-music2.mp4"
							type="video/mp4"
						/>
						Votre navigateur ne supporte pas la lecture de vidéos HTML5.
					</video>
				</div>
			</article>
		</section>
	);
};

export default SoundTravelPage;
