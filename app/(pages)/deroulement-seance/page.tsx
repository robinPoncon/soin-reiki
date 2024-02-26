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
		<section className="flex flex-col gap-20 py-20">
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
					<p className="text-start max-w-xs my-auto mx-auto md:mx-0">
						Dès le début, nous prenons le temps de discuter de vos intentions et des
						bienfaits que vous recherchez à travers les séances. Je vous partage ensuite
						mes connaissances et mon expérience, afin que nous puissions trouver des
						solutions durables à vos problématiques. De plus, je vous propose une
						guidance énergétique à travers le tirage d'une carte, pour vous guider un
						peu plus loin sur le chemin de la guérison.
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
						Pendant le soin, vous restez confortablement vêtu(e) allongé(e) sur une
						table de massage. L'objectif est que vous soyez à l'aise ! J'accompagne cela
						avec une douce musique apaisante. Je commence le soin en plaçant
						délicatement mes mains sur les zones de votre corps nécessitant un
						rééquilibrage énergétique. Pendant cette étape, des sensations telles que
						chaleur, fraîcheur, picotements, émotions ou autres peuvent se manifester.
						Tout cela est normal et fait partie du processus naturel de la circulation
						de l'énergie en vous.
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
					<p className="text-start max-w-xs my-auto mx-auto md:mx-0">
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
			<article className="mx-auto max-w-xs md:max-w-xl py-10">
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
