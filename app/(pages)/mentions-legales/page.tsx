import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Mentions légales",
	description:
		"Consultez mes mentions légales pour obtenir des informations importantes sur Les Racines de la Guérison dans un but de transparence et de confiance !",
	keywords: ["mentions légales", "transparence", "confiance", "informations"]
};

const MentionsLegalesPage = () => {
	return (
		<section className="flex flex-col gap-12 py-20 px-4 lg:px-24">
			<h1 className="titleFont font-semibold text-2xl mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				Mentions légales
			</h1>
			<p className="text-justify">
				Bienvenue sur la page des mentions légales sur{" "}
				<strong className="italic">Les Racines de la Guérison</strong>. Je tiens à vous
				informer de manière transparente sur les aspects juridiques de mon site. Veuillez
				prendre quelques instants pour lire les informations suivantes.
			</p>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Responsable du site</h2>
				<p className="flex flex-col">
					<strong>- Nom du responsable :</strong>
					<span className="italic ml-2">Robin Ponçon</span>
				</p>
				<p className="flex flex-col">
					<strong>- Adresse :</strong>
					<span className="italic ml-2">59 rue Pierre Renaudel 33130 Bègles</span>
				</p>
				<p className="flex flex-col">
					<strong>- Adresse email :</strong>
					<span className="italic ml-2">poncon.robin@gmail.com</span>
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Hébergement</h2>
				{/* TODO maj herbegement */}
				<p className="mb-2">Ce site est hébergé par : o2switch</p>
				<p className="flex flex-col">
					<strong>- Adresse de l'hébergeur :</strong>
					<span className="italic ml-2">https://www.o2switch.fr/</span>
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Propriété intellectuelle</h2>
				<p className="mb-2 text-justify">
					Le contenu de ce site, y compris textes, images, vidéos, et autres éléments, est
					protégé par les lois sur la propriété intellectuelle. Tous les droits sont
					réservés. Vous n'êtes pas autorisé à reproduire, distribuer ou utiliser le
					contenu de ce site sans mon autorisation écrite.
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">
					Collecte de données personnelles
				</h2>
				<p className="text-justify">
					Lorsque vous visitez mon site, je peux collecter certaines informations
					personnelles conformément à la politique de protection des données. Veuillez
					vous référer à{" "}
					<Link
						className="redirectLinkBlue"
						href="/protection-donnee"
					>
						cette dernière
					</Link>{" "}
					pour plus d'informations sur la collecte et l'utilisation de vos données
					personnelles.
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Responsabilité</h2>
				<p className="text-justify">
					Je fais de mon mieux pour fournir des informations précises et à jour sur ce
					site. Cependant, je ne peux garantir l'exactitude, la pertinence ou
					l'exhaustivité de ces informations. En tant que visiteur, vous êtes responsable
					de l'utilisation que vous faites des informations présentées sur ce site.
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Liens externes</h2>
				<p className="text-justify">
					Ce site peut contenir des liens vers des sites web externes. Je ne suis pas
					responsable du contenu ou des pratiques de confidentialité de ces sites, et je
					vous encourage à consulter leurs propres politiques de confidentialité et
					mentions légales.
				</p>
			</article>
			<article>
				<h2 className="text-2xl mb-2 font-semibold md:text-2xl">Contact</h2>
				<p className="text-justify">
					Si vous avez des questions concernant ces mentions légales ou le site en
					général, n'hésitez pas à me contacter grâce au{" "}
					<Link
						className="redirectLinkBlue"
						href="/contact"
					>
						formulaire de contact
					</Link>{" "}
					ou directement à l'adresse email suivante : poncon.robin@gmail.com
				</p>
			</article>
		</section>
	);
};

export default MentionsLegalesPage;
