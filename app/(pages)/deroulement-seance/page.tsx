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
					Étape 1 : Un temps d’accueil et d’écoute
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
						Au début de la séance, nous prenons le temps d’échanger sur ce que vous
						traversez actuellement, vos ressentis et les questions qui vous amènent. Cet
						espace permet de poser les choses simplement, sans jugement, et de clarifier
						ce qui a besoin d’être entendu ou compris. Selon le moment et ce qui émerge,
						un tirage de cartes peut être proposé comme support de réflexion, afin
						d’ouvrir un autre regard ou d’apporter une piste de compréhension
						supplémentaire.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Étape 2 : Un temps de relaxation corporelle
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
						La séance se poursuit par un temps de soin énergétique et de relaxation. Le
						Reiki est utilisé comme un support pour favoriser la détente du corps et un
						apaisement global. Des sensations physiques ou émotionnelles peuvent
						apparaître et sont simplement accueillies comme faisant partie du processus.
						Selon les besoins, des temps de pleine conscience ou un voyage sonore
						peuvent accompagner cette phase, afin de soutenir l’écoute intérieure et
						laisser émerger ce qui a besoin de se déposer.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Étape 3 : Intégration et mise en perspective
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
						En fin de séance, nous prenons un moment pour revenir sur ce qui a été vécu
						et mettre des mots sur ce qui a pu émerger. Ce temps permet de prendre du
						recul et d’identifier, lorsque cela fait sens, un prochain pas juste à
						explorer dans votre quotidien. Pour beaucoup de personnes, ce travail
						s’inscrit naturellement sur plusieurs séances espacées dans le temps, afin
						d’observer ce qui évolue, d’affiner la compréhension et d’avancer
						progressivement à son propre rythme.
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
						className="flex actionLinkBlue mediumBtn"
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
						className="flex actionLinkBlue mediumBtn"
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
