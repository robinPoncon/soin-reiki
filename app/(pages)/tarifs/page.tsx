import Link from "next/link";
import "./page.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mes Différents Tarifs",
	description:
		"Découvrez les tarifs pour les séances de Reiki et de tirage de cartes. Ils reflètent mon engagement envers la qualité et la profondeur de chaque séance.",
	keywords: ["tarifs", "prix", "séances", "reiki", "tirage de cartes", "qualité", "énergétique"]
};

const TarifsPage = () => {
	return (
		<section className="flex flex-col gap-20 py-20 px-4 tarifsPageComponent">
			<h1 className="titleFont font-semibold text-center text-2xl mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				Tarifs de mes prestations
			</h1>
			<p className="text-justify italic mx-auto lg:max-w-3xl">
				Pour régler une séance, vous avez actuellement la possibilité de payer en{" "}
				<strong>espèces</strong> ou par <strong>chèque</strong> à la fin de la séance. Je
				prévois d'introduire d'autres moyens de paiement à l'avenir pour plus de commodité.
				Pour les séances à distance, veuillez me contacter par email en utilisant la{" "}
				<Link
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
				</Link>
			</p>
			<div className="flex flex-col justify-around gap-20 lg:flex-row lg:gap-5 xl:gap-0">
				<article className="flex flex-col gap-5 bg-white w-72 max-w-xs rounded-xl mx-auto lg:w-1/3">
					<h2 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-customYellowLighter lg:text-xl">
						Découverte <br />
						<span className="text-base">(1 seule fois par personne)</span>
					</h2>
					<div className="flex flex-col text-center gap-2">
						<p>Identification de la problématique</p>
						<p>Tirage d'un oracle</p>
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
						<p>Tirage d'un oracle</p>
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
						<p>Guérison définitive de la problématique</p>
						<p>Méditation guidée de pleine conscience</p>
						<p>Confiance et Estime de Soi retrouvées</p>
						<p>Des outils pour être plus heureux</p>
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
		</section>
	);
};

export default TarifsPage;
