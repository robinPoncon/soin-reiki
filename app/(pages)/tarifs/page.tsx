"use client";

import Link from "next/link";
import "./page.scss";
import Image from "next/image";
import { useEffect } from "react";

const PricesPage = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);
		}
	}, []);
	return (
		<section className="flex flex-col gap-24 pt-20 tarifsPageComponent">
			<div className="flex flex-col gap-12 px-4">
				<h1 className="titleFont font-semibold text-center text-2xl mx-auto w-fit customBorderPink p-4 md:text-4xl">
					Tarifs des séances
				</h1>
				<p className="text-justify italic mx-auto lg:max-w-3xl">
					Une séance dure généralement entre <strong>1h et 1h30</strong>, afin de prendre
					le temps d’échanger, de se poser, d’accueillir et de mieux comprendre ce que
					vous traversez. Le règlement s’effectue à la fin de la séance, en{" "}
					<strong>espèces ou par chèque</strong>.
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
						<div className="flex flex-col px-2 text-center gap-2">
							<p>Première rencontre</p>
							<p className="separator1"></p>
							<p>Poser ce que vous traversez</p>
							<p className="separator1"></p>
							<p>Espace d’écoute et de relâchement</p>
							<p className="separator1"></p>
							<p>Découvrir l’accompagnement</p>
						</div>
						{/* <p className="separator1"></p>
						<p className="text-center">
							<strong>Durée :</strong>
							<span className="italic"> 1 heure et 30 minutes</span>
						</p> */}
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-customYellow">
							50 €
						</p>
					</article>

					<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
						<h2 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-blueGreenLighter lg:text-xl">
							Approfondissement <br />{" "}
							<span className="text-base">(séance classique)</span>
						</h2>
						<div className="flex flex-col px-2 text-center gap-2">
							<p>Prendre du recul</p>
							<p className="separator2"></p>
							<p>Clarifier la situation</p>
							<p className="separator2"></p>
							<p>Écoute et présence</p>
							<p className="separator2"></p>
							<p>Avancer à votre rythme</p>
						</div>
						{/* <p className="text-center">
							<strong>Durée :</strong>{" "}
							<span className="italic">1 heure et 30 minutes</span>
						</p> */}
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-blueGreen">
							60 €
						</p>
					</article>

					<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
						<h2 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-pinkLighter lg:text-xl">
							Dans la durée
							<br /> <span className="text-base">(3 séances)</span>
						</h2>
						<div className="flex flex-col px-2 text-center gap-2">
							<p>Inscrire le travail dans le temps</p>
							<p className="separator3"></p>
							<p>Observer les évolutions</p>
							<p className="separator3"></p>
							<p>Approfondir progressivement</p>
							<p className="separator3"></p>
							<p>Plus de clarté pas à pas</p>
							{/* <p>Suivi personnalisé sur 3 à 6 mois</p> */}
						</div>

						{/* <p className="text-center">
							<strong>Durée :</strong>{" "}
							<span className="italic">7 heures et 30 minutes</span>
						</p> */}
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-pink">
							150 €
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
						Les prestations musicales autour du Handpan proposent un moment de pause et
						d’écoute, invitant à la détente et à l’exploration sonore. Ces voyages
						musicaux peuvent s’intégrer dans différents contextes : espaces de
						coworking, entreprises, maisons de retraite ou événements accueillant
						enfants et adultes.
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
							Voyage Sonore petit groupe
							<br /> <span className="text-base">(jusqu'à 10 personnes)</span>
						</h3>
						<div className="flex flex-col px-2 text-center gap-2">
							<p>Voyage sonore guidé au Handpan</p>
							<p className="separator2"></p>
							<p>Thème adapté au groupe présent</p>
							<p className="separator2"></p>
							<p>Installation simple assis ou allongés</p>
							<p className="separator2"></p>
							<p>Expérience immersive accessible à tous</p>
							<p className="separator2"></p>
							<p>Moment de pause et de relaxation</p>
						</div>

						{/* <p className="text-center">
							<strong>Durée :</strong>{" "}
							<span className="italic">1 heure et 30 minutes</span>
						</p> */}
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-blueGreen">
							200 €
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
							Voyage Sonore grand groupe
							<br /> <span className="text-base">(plus de 10 personnes)</span>
						</h3>
						<div className="flex flex-col px-2 text-center gap-2">
							<p>Voyage sonore guidé au Handpan</p>
							<p className="separator3"></p>
							<p>Thème adapté au groupe présent</p>
							<p className="separator3"></p>
							<p>Installation simple assis ou allongés</p>
							<p className="separator3"></p>
							<p>Expérience immersive accessible à tous</p>
							<p className="separator3"></p>
							<p>Moment de pause et de relaxation</p>
						</div>
						{/* <p className="text-center">
							<strong>Durée :</strong>{" "}
							<span className="italic">1 heure et 30 minutes</span>
						</p> */}
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-pink">
							300 €
						</p>
						{/* <p className="py-5 h-20 text-center rounded-b-xl font-semibold bg-pink">
							<Link
								href="/tarifs-groupe"
								className="flex actionLinkPink smallBtn noborder"
							>
								<span className="textActionLink">Consulter les tarifs</span>
								<span className="iconActionLink" />
							</Link>
						</p> */}
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

export default PricesPage;
