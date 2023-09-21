const ProtectionDonneePage = () => {
	return (
		<section className="flex flex-col gap-12 py-20 px-4 lg:px-24">
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				Protection des données
			</h1>
			<p className="text-justify">
				Bienvenue sur ma page dédiée à la protection de vos données sur{" "}
				<strong className="italic">Les racines de la guérison</strong>. Je tiens à vous
				assurer que je prends très au sérieux la confidentialité et la sécurité de vos
				informations personnelles. Cette politique de protection des données a pour but de
				vous informer sur la manière dont je collecte, utilise, partage et protège vos
				données.
			</p>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Collecte de vos données personnelles</h2>
				<p className="mb-2 text-justify">
					Lorsque vous visitez mon site web, je peux collecter certaines informations
					personnelles, notamment :
				</p>
				<p className="text-justify">
					<strong>- Informations d'identification</strong> : Votre nom, votre prénom,
					votre numéro de téléphone, votre adresse email et éventuellement d'autres
					coordonnées que vous choisissez de me fournir via mes formulaires de contact.
				</p>
				<p className="text-justify">
					<strong>- Informations échangées lors d'une séance</strong> : Dans un second
					temps, je prévois de mettre en place un tableau de bord personnel où nous
					pourrons répertorier toutes les informations échangées lors de nos séances de
					soin ou de guidance. Ce tableau de bord vous permettra de revisiter facilement
					les conseils et les guidances que nous avons partagés, tout en vous offrant la
					possibilité de suivre de près votre évolution personnelle au fil du temps.
				</p>
				<p className="text-justify">
					<strong>- Données de navigation</strong> : Les informations recueillies
					automatiquement lorsque vous visitez mon site, telles que votre adresse IP, le
					type de navigateur que vous utilisez, les pages que vous consultez et la manière
					dont vous interagissez avec mon site.
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Utilisation de vos données personnelles</h2>
				<p className="mb-2 text-justify">
					J'utilise les données personnelles collectées pour les finalités suivantes :
				</p>
				<p className="text-justify">
					<strong>- Répondre à vos demandes</strong> : Si vous me contactez via mon
					formulaire de contact, j'utilise vos informations pour répondre à vos questions
					ou demandes.
				</p>
				<p className="text-justify">
					<strong>- Amélioration de mon site</strong> : Je peux utiliser les données de
					navigation pour comprendre comment les visiteurs utilisent mon site et ainsi
					l'améliorer en conséquence.
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Partage de vos données</h2>
				<p className="mb-2 text-justify">
					Je ne partage pas vos données personnelles avec des tiers, sauf dans le cas
					suivant :
				</p>
				<p className="text-justify">
					<strong>- Obligations légales</strong> : Je peux être tenu de divulguer vos
					informations si la loi l'exige.
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Sécurité de vos données</h2>
				<p className="text-justify">
					Je prends des mesures de sécurité appropriées pour protéger vos données
					personnelles contre la perte, l'accès non autorisé, la divulgation, la
					modification ou la destruction. Cependant, aucune méthode de transmission sur
					Internet ou de stockage électronique n'est totalement sécurisée, et je ne peux
					garantir la sécurité absolue de vos données.
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Vos droits</h2>
				<p className="text-justify">
					Vous avez le droit d'accéder à vos données personnelles, de les rectifier, de
					les supprimer, de vous opposer au traitement ou de demander leur portabilité.
					Pour exercer ces droits ou poser des questions sur ma politique de protection
					des données, n'hésitez pas à me contacter via les coordonnées fournies sur mon
					site.
				</p>
			</article>
			<article>
				<h2 className="text-xl mb-2 font-semibold md:text-2xl">Modifications de la politique</h2>
				<p className="text-justify">
					Je me réserve le droit de mettre à jour cette politique de protection des
					données à tout moment pour refléter les changements apportés à mes pratiques ou
					aux exigences légales. Je vous encourage à consulter régulièrement cette page
					pour rester informé(e) sur la manière dont je protège vos données.
				</p>
			</article>
		</section>
	);
};

export default ProtectionDonneePage;
