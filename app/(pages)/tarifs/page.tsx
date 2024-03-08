"use client";

import Link from "next/link";
import "./page.scss";
import Image from "next/image";
import { useEffect } from "react";

const TarifsPage = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);
		}
	}, []);
	return (
		<section className="flex flex-col gap-24 pt-20 tarifsPageComponent">
			<div className="flex flex-col gap-12 px-4">
				<h1 className="titleFont font-semibold text-center text-2xl mx-auto w-fit customBorderPink p-4 md:text-4xl">
					Tarifs des Accompagnements
				</h1>
				<p className="text-justify italic mx-auto lg:max-w-3xl">
					Mon objectif est de prendre le temps de bien comprendre votre problématique et
					de vous accompagner au mieux pour la résoudre. C'est donc pour ça que mes
					séances durent <strong>1h30</strong> au lieu de 1h. Pour régler une séance, vous
					avez actuellement la possibilité de payer en <strong>espèces</strong> ou par{" "}
					<strong>chèque</strong> à la fin de la séance. Je prévois d'introduire d'autres
					moyens de paiement à l'avenir pour plus de commodité.
					{/* <Link
					href="/contact"
					className="redirectLinkBlue"
				>
					page de contact
				</Link>{" "}
				pour discuter des modalités de paiement appropriées. Si vous souhaitez en savoir
				plus sur le soin Reiki c'est{" "}
				<Link
					className="redirectLinkBlue"
					href="/soin-reiki"
				>
					par ici.
				</Link>{" "}
				Si vous souhaitez en savoir plus sur une Guidance c'est{" "}
				<Link
					className="redirectLinkBlue"
					href="/guidance"
				>
					par là.
				</Link> */}
				</p>
				<div className="flex flex-col justify-around gap-20 lg:flex-row lg:gap-5 xl:gap-0">
					<article className="flex flex-col gap-5 bg-white w-72 max-w-xs rounded-xl mx-auto lg:w-1/3">
						<h2 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-customYellowLighter lg:text-xl">
							Découverte <br />
							<span className="text-base">(1 seule fois par personne)</span>
						</h2>
						<div className="flex flex-col text-center gap-2">
							<p>Identification de la problématique</p>
							<p>Tirage d'un oracle spécifique</p>
							<p>Équilibrage & libération énergétique</p>
							<p>Pistes de guérison à explorer</p>
							<p>Suivi personnalisé</p>
						</div>
						<p className="separator1"></p>
						<p className="text-center">
							<strong>Durée :</strong>
							<span className="italic"> 1 heure et 30 minutes</span>
						</p>
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-customYellow">
							60 €
						</p>
					</article>

					<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
						<h2 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-blueGreenLighter lg:text-xl">
							Guérison <br /> <span className="text-base">(séance classique)</span>
						</h2>
						<div className="flex flex-col text-center gap-2">
							<p>Identification de la problématique</p>
							<p>Tirage d'un oracle spécifique</p>
							<p>Équilibrage & libération énergétique</p>
							<p>Pistes de guérison à explorer</p>
							<p>Suivi personnalisé</p>
						</div>
						<p className="separator2"></p>
						<p className="text-center">
							<strong>Durée :</strong>{" "}
							<span className="italic">1 heure et 30 minutes</span>
						</p>
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-blueGreen">
							90 €
						</p>
					</article>

					<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
						<h2 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-pinkLighter lg:text-xl">
							Amour de Soi
							<br /> <span className="text-base">5 séances (4 + 1 offerte)</span>
						</h2>
						<div className="flex flex-col text-center gap-2">
							<p>Tous les bienfaits des séances classiques</p>
							<p>+ Guidance de cartes complète offerte</p>
							<p>+ Méditation guidée de pleine conscience</p>
							<p>+ Identification de votre chemin de vie</p>
							<p>Suivi personnalisé sur 3 à 6 mois</p>
						</div>
						<p className="separator3"></p>
						<p className="text-center">
							<strong>Durée :</strong>{" "}
							<span className="italic">7 heures et 30 minutes</span>
						</p>
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-pink">
							360 €
						</p>
					</article>
				</div>
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
			</div>
			<div className="flex flex-col gap-14 bg-darkBackground px-4 py-20 shadow-darkTurquoise">
				<h2 className="titleFont text-customWhite font-semibold text-center text-2xl mx-auto w-fit customBorderYellow p-4 md:text-4xl">
					Tarifs des Prestations Musicales
				</h2>
				<div className="flex flex-col gap-4">
					<p className="text-justify text-customWhite italic mx-auto lg:max-w-3xl">
						Mes prestations musicales ont pour but la relaxation et le développement de
						la créativité. Mais elles ont aussi la capacité de vous aider à accepter et
						libérer vos émotions ! Mes voyages sonores sont donc très efficaces dans des
						espaces de coworking, entreprises, maison de retraite ou lieu avec des
						enfants.
					</p>
					<p className="text-justify text-customWhite italic mx-auto lg:max-w-3xl">
						Envie d'en savoir plus sur le voyage sonore ? C'est par{" "}
						<Link
							className="text-customYellow redirectLinkYellow"
							href={"/voyage-sonore"}
						>
							ICI.
						</Link>
					</p>
				</div>
				<div className="flex flex-col justify-around gap-20 lg:flex-row lg:gap-5 xl:gap-0">
					<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
						<h3 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-blueGreenLighter lg:text-xl">
							Voyage Sonore
							<br /> <span className="text-base">(individuel)</span>
						</h3>
						<div className="flex flex-col text-center gap-2">
							<p>Thème du voyage personnalisé</p>
							<p>Rééquilibrage énergétique</p>
							<p>Méditation guidée de pleine conscience</p>
							<p>Reconnexion profonde à vos émotions</p>
							<p>Réduction du stress et de l'anxiété</p>
							<p>Tirage d'un oracle en fin de séance</p>
						</div>
						<p className="separator2"></p>
						<p className="text-center">
							<strong>Durée :</strong>{" "}
							<span className="italic">1 heure et 30 minutes</span>
						</p>
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-blueGreen">
							90 €
						</p>
					</article>
					<div className="flex-col justify-between max-w-xs mx-auto hidden lg:flex lg:w-1/3 xl:-mx-20 ">
						<Image
							className="h-80"
							alt="illustration d'une discussion entre deux personnes assises"
							src="/handpan-design.png"
							width={320}
							height={320}
							loading="eager"
						/>
						<div className="flex flex-col gap-2">
							<h4 className="text-customWhite text-lg sm:text-xl text-center font-semibold italic mb-2 px-4">
								Envie de tenter l'expérience ?
							</h4>
							<Link
								href="/contact"
								className="flex actionLinkYellow xsmallBtn"
							>
								<span className="textActionLink">Je prends contact</span>
								<span className="iconActionLink" />
							</Link>
						</div>
					</div>

					<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
						<h3 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-pinkLighter lg:text-xl">
							Voyage Sonore
							<br /> <span className="text-base">(groupe)</span>
						</h3>
						<div className="flex flex-col text-center gap-2">
							<p>Thème du voyage personnalisé</p>
							<p>Reiki pour la détente en début de séance</p>
							<p>Méditation guidée de pleine conscience</p>
							<p>Reconnexion profonde à vos émotions</p>
							<p>Réduction du stress et de l'anxiété</p>
							<p>Tirage d'un oracle en fin de séance</p>
						</div>
						<p className="separator3"></p>
						<p className="text-center">
							<strong>Durée :</strong>{" "}
							<span className="italic">1 heure et 30 minutes</span>
						</p>
						<p className="py-5 h-20 text-center rounded-b-xl font-semibold bg-pink">
							<Link
								href="/tarifs-groupe"
								className="flex actionLinkPink smallBtn noborder"
							>
								<span className="textActionLink">Consulter les tarifs</span>
								<span className="iconActionLink" />
							</Link>
						</p>
					</article>
					<div className="flex flex-col gap-2 lg:hidden">
						<h4 className="text-customWhite text-lg sm:text-xl text-center font-semibold italic mb-2 px-4">
							Envie de tenter l'expérience ?
						</h4>
						<Link
							href="/contact"
							className="flex actionLinkYellow xsmallBtn"
						>
							<span className="textActionLink">Je prends contact</span>
							<span className="iconActionLink" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TarifsPage;
