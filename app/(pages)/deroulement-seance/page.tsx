"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const SessionSequencePage = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);
		}
	}, []);
	return (
		<section className="flex flex-col gap-20 py-20 px-4">
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit p-4 md:text-4xl customBorderBlue">
				Déroulement d'une séance
			</h1>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Étape 1 : Une Préparation Bienveillante
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
					<Image
						className="customImgBlueGreen mx-auto md:mx-0"
						alt="illustration d'une discussion entre deux personnes assises"
						src="/illustrations/illustration_discussion.png"
						width={320}
						height={320}
						loading="eager"
					/>
					<p className="text-justify md:text-start max-w-xs my-auto mx-auto md:mx-0">
						Dès le début, nous prenons le temps de discuter de vos intentions, des
						bienfaits et de la transformation que vous recherchez à travers les séances.
						Je vous partage ensuite mes connaissances et mon expérience, afin que nous
						puissions trouver des solutions durables à vos problématiques. De plus, je
						vous propose une guidance énergétique à travers le tirage d'une carte, pour
						obtenir plus d'informations sur la source de votre problématique afin de
						vous guider un peu plus loin sur le chemin de la guérison.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Étape 2 : L'Harmonie Énergétique
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row-reverse">
					<Image
						className="customImgBlueGreen mx-auto md:mx-0"
						alt="illustration d'un homme faisant un soin reiki à une femme"
						src="/illustrations/illustration_energetic-heal.png"
						width={320}
						height={320}
					/>
					<p className="text-justify max-w-xs my-auto mx-auto md:mx-0">
						Je commence le soin en plaçant délicatement mes mains sur les zones de votre
						corps nécessitant un rééquilibrage énergétique. Pendant cette étape, des
						sensations telles que du chaud, du froid, des picotements, des émotions ou
						autres peuvent se manifester. Tout cela est normal et fait partie du
						processus de la circulation de l'énergie en vous. Enfin, une fois que vous
						êtes détendu, nous passons à des exercices de pleine conscience pour vous
						libérer définitivement de vos blocages.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Étape 3 : Intégration et Planification
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
					<Image
						className="customImgBlueGreen mx-auto md:mx-0"
						alt="illustration d'un calendrier"
						src="/illustrations/illustration_calendar.png"
						width={320}
						height={320}
					/>
					<p className="text-justify md:text-start max-w-xs my-auto mx-auto md:mx-0">
						Une fois le soin achevé, nous prenons le temps de partager nos impressions
						sur l'expérience vécue. En fonction de vos ressentis et de vos besoins, nous
						planifions d'autres séances si nécessaires. Généralement, pour une véritable
						guérison et transformation, il est recommandé de prévoir 3 à 4 séances
						minimum, espacées d'une à deux semaines. Dans les jours qui suivent le soin,
						hydratez-vous davantage pour favoriser la purification et l'élimination des
						toxines énergétiques.
					</p>
				</div>
			</article>
			<article className="flex flex-col gap-10 mx-auto max-w-xs md:max-w-lg py-5">
				<div className="flex flex-col gap-2">
					<h2 className="text-lg sm:text-xl text-center font-semibold italic mt-6 mb-2 px-4">
						Besoin d'informations sur le prix des accompagnements ?
					</h2>
					<Link
						href="/tarifs"
						className="flex actionLinkPink mediumBtn"
					>
						<span className="textActionLink">Je consulte les tarifs</span>
						<span className="iconActionLink" />
					</Link>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-lg sm:text-xl text-center font-semibold italic mb-2 px-4">
						Envie de tenter l'expérience ?
					</h2>
					<Link
						href="/reservation"
						className="flex actionLinkPink mediumBtn"
					>
						<span className="textActionLink">Je réserve ma séance</span>
						<span className="iconActionLink" />
					</Link>
				</div>

				{/* <p className="text-center mt-5">
					Si vous désirez en savoir davantage sur les guidances en tirage de cartes ou
					pour toute autre information, n'hésitez pas à me laisser un message via la{" "}
					<Link
						className="redirectLinkBlue"
						href="/contact"
					>
						page de contact.
					</Link>
				</p> */}
			</article>
		</section>
	);
};

export default SessionSequencePage;
