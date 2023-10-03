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
				pour discuter des modalités de paiement appropriées.
			</p>
			<div className="flex flex-col justify-around gap-20 lg:flex-row lg:gap-5 xl:gap-0">
				<article className="blockOffer1 max-w-xs mx-auto lg:w-1/3">
					<h2 className="text-lg font-semibold italic text-center">
						Guidance Tirage de Cartes <br />
						(1 seule question à la fois)
					</h2>
					<p className="separator1"></p>
					<div className="text-center">
						<p>Formulation de votre question</p>
						<p>Tirage de 5 cartes de tarot</p>
						<p>Utilisation de 2/3 cartes d'oracles</p>
						<p>Interprétation intuitive et détaillée</p>
						<p>Accès illimité à la vidéo du tirage</p>
					</div>
					<p className="separator1"></p>
					<Link
						href="/guidance"
						className="text-center font-semibold redirectLinkYellow"
					>
						En savoir plus sur une Guidance par tirage de cartes
					</Link>
					<p className="separator1"></p>
					<p className="text-center">
						<strong>Durée :</strong>
						<span className="italic"> 30 minutes à 45 minutes</span>
					</p>
					<p className="separator1"></p>
					<p className="text-lg py-2 text-center">
						<strong>Prix :</strong> <span className="bottom1">50 €</span>
					</p>
				</article>
				<article className="blockOffer2 max-w-xs mx-auto lg:w-1/3">
					<h2 className="text-lg font-semibold italic text-center">
						Soin Reiki Complet <br /> (soin traditionnel)
					</h2>
					<p className="separator2"></p>
					<div className="text-center">
						<p>Accueil et discussion</p>
						<p>Identification de la problématique</p>
						<p>Tirage d'une carte énergétique</p>
						<p>Réalisation du soin Reiki</p>
						<p>Pistes de guérison à explorer</p>
					</div>
					<p className="separator2"></p>
					<Link
						href="/soin-reiki"
						className="text-center font-semibold redirectLinkBlue"
					>
						En savoir plus sur un soin Reiki complet traditionnel
					</Link>
					<p className="separator2"></p>
					<p className="text-center">
						<strong>Durée :</strong>{" "}
						<span className="italic">45 minutes à 1 heure</span>
					</p>
					<p className="separator2"></p>
					<p className="text-lg py-2 text-center">
						<strong>Prix :</strong> <span className="bottom2">60 €</span>
					</p>
				</article>

				<article className="blockOffer3 max-w-xs mx-auto lg:w-1/3">
					<h2 className="text-lg font-semibold italic text-center">
						Rééquilibrage des Chakras + Guidance Tirage de Cartes
					</h2>
					<p className="separator3"></p>
					<div className="text-center">
						<p>Formulation de votre question</p>
						<p>Tirage tarot et oracles</p>
						<p>Soin Reiki assis après le tirage</p>
						<p>Apaisement, équilibre et bien-être</p>
						<p>Accès illimité à la vidéo du tirage</p>
					</div>
					<p className="separator3"></p>
					<Link
						href="/guidance"
						className="text-center font-semibold redirectLinkPink"
					>
						En savoir plus sur une Guidance
					</Link>
					<Link
						href="/soin-reiki"
						className="text-center font-semibold redirectLinkPink"
					>
						En savoir plus sur un soin Reiki
					</Link>

					<p className="separator3"></p>
					<p className="text-center">
						<strong>Durée :</strong>{" "}
						<span className="italic">1 heure à 1 heure 30</span>
					</p>
					<p className="separator3"></p>
					<p className="text-lg py-2 text-center">
						<strong>Prix :</strong> <span className="bottom3">90 €</span>
					</p>
				</article>
			</div>
		</section>
	);
};

export default TarifsPage;
