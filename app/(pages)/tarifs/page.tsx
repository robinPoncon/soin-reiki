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
						Guidance Tirage de Cartes <br />
						<span className="text-base">(1 seule question à la fois)</span>
					</h2>
					<div className="flex flex-col text-center gap-2">
						<p>Formulation de votre question</p>
						<p>Tirage de 5 cartes de tarot</p>
						<p>Utilisation de 2/3 cartes d'oracles</p>
						<p>Interprétation intuitive et détaillée</p>
						<p>Accès illimité à la vidéo du tirage</p>
					</div>
					<p className="separator1"></p>
					<p className="text-center">
						<strong>Durée :</strong>
						<span className="italic"> 30 minutes à 45 minutes</span>
					</p>
					<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-customYellow">
						50 €
					</p>
				</article>

				<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
					<h2 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-blueGreenLighter lg:text-xl">
						Soin Reiki Complet <br />{" "}
						<span className="text-base">(soin traditionnel)</span>
					</h2>
					<div className="flex flex-col text-center gap-2">
						<p>Accueil et discussion</p>
						<p>Identification de la problématique</p>
						<p>Tirage d'une carte énergétique</p>
						<p>Réalisation du soin Reiki</p>
						<p>Pistes de guérison à explorer</p>
					</div>
					<p className="separator2"></p>
					<p className="text-center">
						<strong>Durée :</strong>{" "}
						<span className="italic">45 minutes à 1 heure</span>
					</p>
					<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-blueGreen">
						60 €
					</p>
				</article>

				<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
					<h2 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-pinkLighter lg:text-xl">
						Rééquilibrage des Chakras + Guidance Tirage de Cartes
					</h2>
					<div className="flex flex-col text-center gap-2">
						<p>Formulation de votre question</p>
						<p>Tirage tarot et oracles</p>
						<p>Soin Reiki assis après le tirage</p>
						<p>Apaisement, équilibre et bien-être</p>
						<p>Accès illimité à la vidéo du tirage</p>
					</div>
					<p className="separator3"></p>
					<p className="text-center">
						<strong>Durée :</strong>{" "}
						<span className="italic">1 heure à 1 heure 30</span>
					</p>
					<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-pink">
						90 €
					</p>
				</article>
			</div>
		</section>
	);
};

export default TarifsPage;
