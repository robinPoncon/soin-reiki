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
			{/* <h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderYellow p-4 md:text-4xl">
				Déroulement d'une guidance
			</h1>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					En présentiel
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
					<Image
						className="customImgYellow max-h-80 my-auto mx-auto md:mx-0"
						alt="illustration d'une discussion entre deux personnes"
						src="/illustrations/illustration_consultation.png"
						width={320}
						height={320}
					/>
					<p className="text-start max-w-xs my-auto mx-auto md:mx-0 sm:max-w-sm">
						Notre séance débute par un échange afin de définir ensemble la question qui
						sera soumise pour la guidance. Ensuite je vous tirerai au minimum 5 cartes
						de tarot qui serviront de structure principale, que j'accompagnerai par des
						oracles selon les ressentis du moment. Mon approche se caractérise par une
						interprétation intuitive des cartes, dans laquelle je vous ferai part de mes
						observations et de mes analyses personnelles. De plus, je vous fournirai une
						lecture des significations de certaines cartes, afin d'approfondir leur
						compréhension. Enfin, je vous adresserai par courrier électronique un compte
						rendu détaillé et complet du tirage, accompagné d'une photographie du tirage
						réalisé.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">À distance</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row-reverse">
					<Image
						className="customImgYellow max-h-80 my-auto mx-auto md:mx-0"
						alt="illustration d'un homme qui tire les oracles"
						src="/illustrations/illustration_man-solo-with-card.png"
						width={320}
						height={320}
					/>
					<p className="text-justify max-w-xs my-auto mx-auto md:mx-0 sm:max-w-sm">
						Tout d'abord, notre processus démarre par un échange par courrier
						électronique par sms ou par appel, afin de définir votre question et de la
						formuler pour le tirage de cartes. Une fois que la question est clairement
						définie, nous convenons ensemble d'une date qui vous convient. Ensuite, vous
						avez la possibilité de régler la consultation de plusieurs manières,
						notamment par PayPal, Lydia ou par virement bancaire traditionnel. Une fois
						que votre paiement est réceptionné, je me connecte à mon intuition pour vous
						offrir une guidance optimale. Une fois la séance de tirage de cartes
						terminée, je vous envoie un lien privé vers une vidéo YouTube, vous
						permettant ainsi de la visionner à votre convenance, autant de fois que vous
						le souhaitez.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Important à savoir avant une guidance
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
					<Image
						className="customImgYellow max-h-80 my-auto mx-auto md:mx-0"
						alt="illustration d'une carte de tarot avec une étoile"
						src="/illustrations/illustration_oracle.png"
						width={320}
						height={320}
					/>
					<p className="text-start max-w-xs my-auto mx-auto md:mx-0 sm:max-w-sm">
						Ma conception des séances de tirage de cartes ou de guidance repose
						essentiellement sur le développement personnel. Mon objectif premier
						consiste à vous orienter de la meilleure manière possible vers votre propre
						vérité et votre processus de guérison. Il est essentiel de garder à l'esprit
						que nous sommes les artisans de notre propre destinée, et que nos choix
						peuvent influencer le cours des événements. Il est important de noter que la
						guidance par le biais d'un tirage de cartes n'est pas une science exacte, ce
						qui signifie que les conseils que je peux vous offrir ne sont pas gravés
						dans le marbre en ce qui concerne le temps. Néanmoins, les conseils obtenus,
						ainsi que les moments de réflexion et de prise de conscience qui en
						découlent, eux, sont tout à fait réels et bénéfiques pour votre cheminement
						personnel.
					</p>
				</div>
			</article> */}
			<BlocTextContent
				breakpointResponsiveValue={breakpointResponsiveValue}
				mainTitle="La Guidance des Cartes"
				textDatasArray={[
					{
						id: "decode-blockages-bloc",
						imgAlt: "icône d'un puzzle",
						imgSrc: "/icons/icon_puzzle.svg",
						title: "Analyse des blocages",
						content: [
							`Dans un premier temps, les cartes nous offrent la capacité d'explorer l'origine des
								blocages que vous rencontrez. Grâce à mon interprétation des cartes et à mon intuition,
								je peux vous aider à discerner la source de ces blocages, qu'elle soit physique,
								relationnelle, professionnelle ou familiale.`
						],
						transitionType: "none"
					},
					{
						id: "heal-path-bloc",
						imgAlt: "icône d'une plante symbolisant la guérison",
						imgSrc: "/icons/icon_healing.svg",
						title: "Chemins de guérison",
						content: [
							`Dans un second temps, les cartes nous permettent d'identifier les 
								solutions potentielles. Ces pistes de guérison ont le potentiel 
								de vous ouvrir les yeux et de vous offrir une nouvelle perspective sur la situation, 
								vous permettant ainsi d'acquérir un point de vue totalement nouveau.`
						],
						transitionType: "none"
					},
					{
						id: "awareness-bloc",
						imgAlt: "icône d'un oeil'",
						imgSrc: "/icons/icon_eye.svg",
						title: "Prise de conscience",
						content: [
							`Enfin, l'objectif d'un tirage de cartes est de vous orienter vers votre propre vérité
								La simple exploration d'un problème sous un nouvel angle, permet 
								d'en révéler des solutions insoupçonnées. C'est ce qu'on appelle une prise de conscience, 
								et celle-ci peut transformer votre vie !`
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
