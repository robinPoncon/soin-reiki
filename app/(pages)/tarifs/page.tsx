import Link from "next/link";
import "./page.scss";

const TarifsPage = () => {
	return (
		<section className="flex flex-col gap-20 py-20 px-4 tarifsPageComponent">
			<h1
				className="titleFont font-semibold text-center text-2xl mx-auto w-fit customBorderBlue p-4 md:text-4xl"
			>
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
						Guidance Tirage de Carte <br />
						(1 seule question à la fois)
					</h2>
					<p className="separator1"></p>
					<p className="text-justify">
						Lors de cette séance, je réalise un tirage de 5 cartes minimum, accompagné
						de quelques oracles pour vous guider. Pour plus de détails sur le processus,
						consultez la{" "}
						<Link
							className="redirectLinkYellow"
							href="/guidance"
						>
							page dédiée
						</Link>
						.
					</p>
					<p className="separator1"></p>
					<p>
						<strong>Durée :</strong>
						<span className="italic"> 30 minutes à 45 minutes</span>
					</p>
					<p className="text-lg mt-5">
						<strong>Prix :</strong> <span className="bottom1">50 €</span>
					</p>
				</article>
				<article className="blockOffer2 max-w-xs mx-auto lg:w-1/3">
					<h2 className="text-lg font-semibold italic text-center">
						Soin Reiki Complet <br /> (soin traditionnel)
					</h2>
					<p className="separator2"></p>
					<p className="text-justify">
						Le Soin Reiki Complet est une expérience classique et complète qui se
						déroule sur une table de massage. Vous pouvez en savoir plus sur le
						déroulement d'une séance sur cette{" "}
						<Link
							className="redirectLinkBlue"
							href="/soin-reiki"
						>
							page dédiée
						</Link>
						.
					</p>
					<p className="separator2"></p>
					<p>
						<strong>Durée :</strong>{" "}
						<span className="italic">45 minutes à 1 heure</span>
					</p>
					<p className="text-lg mt-5">
						<strong>Prix :</strong> <span className="bottom2">60 €</span>
					</p>
				</article>

				<article className="blockOffer3 max-w-xs mx-auto lg:w-1/3">
					<h2 className="text-lg font-semibold italic text-center">
						Rééquilibrage des Chakras + Guidance Tirage de Carte
					</h2>
					<p className="separator3"></p>
					<p className="text-justify">
						Cette formule est très appréciée car elle éclaire les pistes de guérison
						grâce aux cartes, puis vous guide à travers un soin Reiki assis, vous
						offrant bien-être et une profonde reconnexion à vous-même.
					</p>
					<p className="separator3"></p>
					<p>
						<strong>Durée :</strong>{" "}
						<span className="italic">1 heure à 1 heure 30</span>
					</p>
					<p className="text-lg mt-5">
						<strong>Prix :</strong> <span className="bottom3">90 €</span>
					</p>
				</article>
			</div>
		</section>
	);
};

export default TarifsPage;
