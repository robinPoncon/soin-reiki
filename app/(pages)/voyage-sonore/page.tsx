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
						title: "Un thème partagé",
						content: [
							`Le voyage sonore associe un temps de relaxation guidée et les sonorités du Handpan. 
							Chaque séance s’articule autour d’un thème ou d’une intention simple, créant un espace propice au relâchement, 
							à l’écoute et à l’immersion sonore.`
						],
						transitionType: "none"
					},
					{
						id: "intuitive-writing-bloc",
						imgAlt: "icône d'une plume qui écrit sur une feuille",
						imgSrc: "/icons/icon_writing.svg",
						title: "Une trame intuitive",
						content: [
							`Le récit du voyage est écrit en amont, de manière intuitive, autour d’un thème ou d’une intention. 
							Les mots servent de fil conducteur, permettant au mental de se déposer progressivement et de laisser émerger sensations, 
							images ou ressentis, sans attente particulière.`
						],
						transitionType: "none"
					},
					{
						id: "music-inspiration-bloc",
						imgAlt: "icône d'une note de musique'",
						imgSrc: "/icons/icon_music.svg",
						title: "Une immersion musicale",
						content: [
							`La musique accompagne ce temps d’expérience en soutenant la détente et l’attention portée aux sensations. 
							Les compositions au Handpan créent une ambiance douce et enveloppante, favorisant un moment de calme et d’intégration.`
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
						title: "Un temps de relaxation",
						content: [
							`Les sonorités du Handpan invitent naturellement au ralentissement et à la détente. 
							Ce moment permet au corps et au mental de se relâcher progressivement, offrant un espace de calme où les pensées peuvent s’apaiser.`
						],
						transitionType: "none"
					},
					{
						id: "emotion-let-go-bloc",
						imgAlt: "icône d'un coeur",
						imgSrc: "/icons/icon_heart-pink.svg",
						title: "Un espace d’accueil émotionnel",
						content: [
							`Le voyage sonore propose un cadre doux et sécurisant, dans lequel chacun peut simplement accueillir ce qui est présent. 
							Les ressentis ou émotions qui émergent sont reçus sans jugement, dans une atmosphère de présence et d’écoute.`
						],
						transitionType: "none"
					},
					{
						id: "self-reconnection-bloc",
						imgAlt: "icône du yin yang'",
						imgSrc: "/icons/icon_yin-yang-pink.svg",
						title: "Un moment pour se reconnecter à soi",
						content: [
							`En se laissant porter par la musique et l’expérience intérieure, certaines personnes ressentent une sensation 
							de recentrage ou de clarté. Ce moment permet avant tout de revenir à ses sensations et de prendre un temps pour soi,
							sans attente particulière.`
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
					Vous ne connaissez pas encore le Handpan ? Ces deux extraits vous permettent de
					découvrir les sonorités de cet instrument et l’atmosphère musicale qui
					accompagne les voyages sonores.
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
