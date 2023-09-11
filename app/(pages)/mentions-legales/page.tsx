import Link from "next/link";

const MentionsLegalesPage = () => {
	return (
		<section className="my-20 px-24 flex flex-col gap-10 text-justify">
			<h1 className="text-4xl mb-10 mx-auto w-fit customBorderBlue p-4">Mentions légales</h1>
			<p>
				Bienvenue sur la page des mentions légales sur{" "}
				<strong className="italic">Les racines de la guérison</strong>. Je tiens à vous
				informer de manière transparente sur les aspects juridiques de mon site. Veuillez
				prendre quelques instants pour lire les informations suivantes.
			</p>
			<article>
				<h2 className="text-3xl mb-2">Responsable du site</h2>
				<p>
					<strong>- Nom du responsable</strong> : Robin Ponçon
				</p>
				<p>
					<strong>- Adresse</strong> : 59 rue Pierre Renaudel 33130 Bègles
				</p>
				<p>
					<strong>- Adresse e-mail</strong> : poncon.robin@gmail.com
				</p>
			</article>
			<article>
				<h2 className="text-3xl mb-2">Hébergement</h2>
				{/* TODO maj herbegement */}
				<p className="mb-2">Ce site est hébergé par :</p>
				<p>
					<strong>- Adresse de l'hébergeur</strong> :
				</p>
			</article>
			<article>
				<h2 className="text-3xl mb-2">Propriété intellectuelle</h2>
				<p className="mb-2">
					Le contenu de ce site, y compris textes, images, vidéos, et autres éléments, est
					protégé par les lois sur la propriété intellectuelle. Tous les droits sont
					réservés. Vous n'êtes pas autorisé à reproduire, distribuer ou utiliser le
					contenu de ce site sans mon autorisation écrite.
				</p>
			</article>
			<article>
				<h2 className="text-3xl mb-2">Collecte de données personnelles</h2>
				<p>
					Lorsque vous visitez mon site, je peux collecter certaines informations
					personnelles conformément à la politique de protection des données. Veuillez
					vous référer à{" "}
					<Link
						className="redirectLink"
						href="/protection-donnee"
					>
						cette dernière
					</Link>{" "}
					pour plus d'informations sur la collecte et l'utilisation de vos données
					personnelles.
				</p>
			</article>
			<article>
				<h2 className="text-3xl mb-2">Responsabilité</h2>
				<p>
					Je fais de mon mieux pour fournir des informations précises et à jour sur ce
					site. Cependant, je ne peux garantir l'exactitude, la pertinence ou
					l'exhaustivité de ces informations. En tant que visiteur, vous êtes responsable
					de l'utilisation que vous faites des informations présentées sur ce site.
				</p>
			</article>
			<article>
				<h2 className="text-3xl mb-2">Liens externes</h2>
				<p>
					Ce site peut contenir des liens vers des sites web externes. Je ne suis pas
					responsable du contenu ou des pratiques de confidentialité de ces sites, et je
					vous encourage à consulter leurs propres politiques de confidentialité et
					mentions légales.
				</p>
			</article>
			<article>
				<h2 className="text-3xl mb-2">Contact</h2>
				<p>
					Si vous avez des questions concernant ces mentions légales ou le site en
					général, n'hésitez pas à me contacter grâce au{" "}
					<Link
						className="redirectLink"
						href="/contact"
					>
						formulaire de contact
					</Link>{" "}
					ou directement à l'adresse e-mail suivante : poncon.robin@gmail.com
				</p>
			</article>
		</section>
	);
};

export default MentionsLegalesPage;
