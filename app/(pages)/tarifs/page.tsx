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
		<section className="flex flex-col gap-24 py-20 px-4 tarifsPageComponent">
			<div className="flex flex-col gap-12">
				<h1 className="titleFont font-semibold text-center text-2xl mx-auto w-fit customBorderPink p-4 md:text-4xl">
					Tarifs des Soins Énergétiques
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
						<h3 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-customYellowLighter lg:text-xl">
							Découverte <br />
							<span className="text-base">(1 seule fois par personne)</span>
						</h3>
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
						<h3 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-blueGreenLighter lg:text-xl">
							Guérison <br /> <span className="text-base">(séance classique)</span>
						</h3>
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
						<h3 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-pinkLighter lg:text-xl">
							Amour de Soi
							<br /> <span className="text-base">5 séances (4 + 1 offerte)</span>
						</h3>
						<div className="flex flex-col text-center gap-2">
							<p>Tous les bienfaits d'une séance classique</p>
							<p>+ Guidance de cartes complète offerte</p>
							<p>+ Méditation guidée de pleine conscience</p>
							<p>+ Des outils pour être plus heureux</p>
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
			</div>
			<div className="flex flex-col gap-14">
				<h2 className="titleFont font-semibold text-center text-2xl mx-auto w-fit customBorderBlue p-4 md:text-4xl">
					Tarifs des Prestations Musicales
				</h2>
				<div className="flex flex-col justify-around gap-20 lg:flex-row lg:gap-5 xl:gap-0">
					<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
						<h3 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-customYellowLighter lg:text-xl">
							Essence du Handpan
						</h3>
						<div className="flex flex-col text-center gap-2">
							<p>Découverte d'un instrument atypique</p>
							<p>Sonorités apaisantes et envoutantes</p>
							<p>Réduction du stress et de l'anxiété</p>
							<p>Très captivant pour les enfants</p>
						</div>
						<p className="separator1"></p>
						<p className="text-center">
							<strong>Durée :</strong> <span className="italic">30 à 45 minutes</span>
						</p>
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-customYellow">
							150 €
						</p>
					</article>

					<article className="flex flex-col gap-5 bg-white w-72 max-w-xs mx-auto rounded-xl lg:w-1/3">
						<h3 className="text-lg rounded-t-xl font-semibold italic py-5 text-center bg-pinkLighter lg:text-xl">
							Voyage Sonore
						</h3>
						<div className="flex flex-col text-center gap-2">
							<p>Méditation guidée</p>
							<p>Guidance de cartes complète offerte</p>
							<p>Méditation guidée de pleine conscience</p>
							<p>Des outils pour être plus heureux</p>
							<p>Suivi personnalisé sur 3 à 6 mois</p>
						</div>
						<p className="separator3"></p>
						<p className="text-center">
							<strong>Durée :</strong>{" "}
							<span className="italic">7 heures et 30 minutes</span>
						</p>
						<p className="text-4xl py-5 text-center rounded-b-xl font-semibold bg-pink">
							250 €
						</p>
					</article>
				</div>
			</div>
		</section>
	);
};

export default TarifsPage;
