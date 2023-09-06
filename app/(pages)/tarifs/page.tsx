import Link from "next/link";
import "./page.scss";

const TarifsPage = () => {
	return (
		<section className="tarifsPageComponent">
			<h1 className="text-4xl mb-20 mt-40 mx-auto w-fit customBorderBlue p-4">
				Tarifs de mes Prestations
			</h1>
			<div className="flex justify-around mb-20">
				<article className="w-1/3 max-w-xs blockOffer1">
					<h2 className="text-lg font-semibold italic text-center">
						Guidance Tirage de Carte <br />
						(1 seule question à la fois)
					</h2>
					<p className="separator1"></p>
					<p className="text-justify">
						Lors de cette séance, je réalise un tirage de 5 cartes minimum, accompagné
						de quelques oracles pour vous guider. Pour plus de détails sur le processus,
						consultez la <Link href="/guidance">page dédiée</Link>.
					</p>
					<p className="separator1"></p>
					<p>
						<strong>Durée :</strong>
						<span className="italic"> 30 minutes à 45 minutes</span>
					</p>
					<p className="text-lg mt-5">
						<strong>Prix :</strong> <span className="italic bottom1">50 €</span>
					</p>
				</article>
				<article className="w-1/3 max-w-xs blockOffer2">
					<h2 className="text-lg font-semibold italic text-center">
						Soin Reiki Complet <br /> (soin traditionnel)
					</h2>
					<p className="separator2"></p>
					<p className="text-justify">
						Le Soin Reiki Complet est une expérience classique et complète qui se
						déroule sur une table de massage. Vous pouvez en savoir plus sur le
						déroulement d'une séance sur cette{" "}
						<Link href="/soin-reiki">page dédiée</Link>.
					</p>
					<p className="separator2"></p>
					<p>
						<strong>Durée :</strong>{" "}
						<span className="italic">45 minutes à 1 heure</span>
					</p>
					<p className="text-lg mt-5">
						<strong>Prix :</strong> <span className="italic bottom2">60 €</span>
					</p>
				</article>

				<article className="w-1/3 max-w-xs blockOffer3">
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
						<strong>Prix :</strong> <span className="italic bottom3">90 €</span>
					</p>
				</article>
			</div>
		</section>
	);
};

export default TarifsPage;
