"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewsUsers from "./_components/ReviewsUsers/ReviewsUsers";
import { ReviewsUser } from "./_types/reviewsUserTypes";

const MainPage = () => {
	const [age, setAge] = useState<number>(0);
	const [spiritualityAge, setSpiritualityAge] = useState<number>(5);
	const [reviewsUsers, setReviewsUsers] = useState<ReviewsUser[]>([
		{
			name: "Jean-Michèle",
			comment:
				"Je ne connaissais pas cette méthode de soin énergétique et je dois avouer que j'ai été bluffer par son efficacité !",
			note: 5
		},
		{
			name: "Maelly",
			comment:
				"Grâce à Robin j'ai pu récupérer un sommeil convenable après 2 ans de bataille d'insomnies",
			note: 5
		},
		{
			name: "Antoine",
			comment:
				"C'était un ancien collègue et je dois dire que ses capacités de guérisons sont très efficace sur des brûlures.",
			note: 5
		},
		{
			name: "Peggy",
			comment:
				"A chaque fois soin que j'effectue avec Robin c'est un moment de bonheur et de détente profonde. Je recommande à 100% !",
			note: 5
		}
	]);

	const calculateAge = (date: string) => {
		const birthdayDate = new Date(date);
		const today = new Date();

		const yearDif = today.getFullYear() - birthdayDate.getFullYear();
		const monthDif = today.getMonth() - birthdayDate.getMonth();

		const age = monthDif < 0 ? yearDif - 1 : yearDif;

		return age;
	};

	useEffect(() => {
		const getAge = calculateAge("1993-01-22");
		const getSpiritualityAge = calculateAge("2018-07-31");
		setAge(getAge);
		setSpiritualityAge(getSpiritualityAge);
	}, []);

	return (
		<main>
			<figure className="-mt-20">
				<Image
					alt="main image of the site with a tree and energy"
					src="/main-site-image.png"
					height={758}
					width={1556}
					layout="responsive"
				/>
			</figure>
			<section>
				<h1 className="text-4xl text-center">Bienvenue dans l'univers du Reiki !</h1>
				<article>
					<h2 className="text-3xl">Qu'est-ce que le Reiki ?</h2>
					<div>
						<div>
							<h3>Une énergie universelle</h3>
							<p>
								Le Reiki est l'énergie de vie qui englobe toute la matière au sein
								de notre univers. Elle est partout autour de nous, et mon travail
								est de la canaliser pour la diffuser en vous. Vous apportant calme,
								sérénité, lâcher prise et bien être !
							</p>
						</div>
						<div>
							<h3>Un toucher thérapeutique</h3>
							<p>
								L'utilisation du Reiki se fait par apposition des mains sur
								différentes parties du corps. Elles peuvent être posées délicatement
								ou être à 5/10cm au-dessus du corps. Il n'y a aucune manipulation ce
								qui en fait une méthode de soin très douce et agréable !
							</p>
						</div>
						<div>
							<h3>Une harmonisation énergétique</h3>
							<p>
								Durant un soin, l'énergie va circuler dans certaines parties du
								corps au travers des méridiens et des chakras. Cette harmonisation
								apporte un rééquilibre au niveau des pensées, des émotions et du
								corps physique. C'est un moment de reconnexion avec soi !
							</p>
						</div>
					</div>
				</article>
				<article>
					<h2 className="text-3xl">Origine du Reiki</h2>
					<div>
						<div>
							<h3>Des racines japonaises</h3>
							<p>
								Le Reiki a été découvert par Mikao Usui, un érudit et guérisseur
								japonais du XIXe siècle lors d'une retraite introspective de 21
								jours sur le Mont Kurama. Cette expérience transpersonnelle lui a
								transmis les enseignements et techniques du Reiki que nous
								connaissons aujourd'hui.
							</p>
						</div>
						<div>
							<h3>Ses principes et sa philosophie</h3>
							<p>
								Le Reiki repose sur cinq principes essentiels, appelés les "Cinq
								Préceptes du Reiki". Ils guident les praticiens vers l'harmonie
								intérieure et le bien-être en promouvant des valeurs telles que la
								bienveillance, la gratitude et la paix intérieure. Cette
								philosophie, ancrée dans la simplicité et la sagesse, encourage
								chacun à cultiver une connexion profonde avec soi-même et avec
								l'énergie qui nous entoure.
							</p>
						</div>
						<div>
							<h3>Un Développement mondial</h3>
							<p>
								Depuis ses modestes débuts au Japon, le Reiki a transcendé les
								frontières pour devenir une pratique mondiale de guérison et de
								bien-être. Son attrait universel réside dans sa simplicité et son
								efficacité. Au fil des décennies, diverses écoles et approches ont
								émergé, reflétant la diversité culturelle et les besoins
								individuels. Le Reiki ne vise pas à se substituer de la médecine,
								mais plutôt à agir en complémentarité avec elle !
							</p>
						</div>
					</div>
				</article>
				<article>
					<h2 className="text-3xl">Les bienfaits du Reiki</h2>
					<div>
						<div>
							<h3>Sérénité mentale et détente</h3>
							<p>
								Le Reiki, grâce à sa nature apaisante, ouvre la voie à une
								relaxation profonde, offrant ainsi un précieux moyen de diminuer le
								stress et l'anxiété. En encourageant un lâcher-prise mental, il
								permet d'atteindre une clarté mentale qui renforce à la fois la
								concentration et l'estime de soi. Grâce à cette harmonie retrouvée,
								le Reiki offre un refuge de calme au cœur du tumulte quotidien.
							</p>
						</div>
						<div>
							<h3>Apaisement émotionnel profond</h3>
							<p>
								Le Reiki offre bien plus qu'une simple relaxation physique. Il
								travaille également en profondeur pour apaiser les émotions
								tourmentées, libérant ainsi les blocages qui entravent le bien-être
								émotionnel. Cette libération émotionnelle peut vous offrir
								l'opportunité de pratiquer le pardon et de vous reconnecter
								profondément à vous-même.
							</p>
						</div>
						<div>
							<h3>Renforcement de la vitalité</h3>
							<p>
								Le Reiki, de par sa nature énergétique, revitalise le corps et
								l'esprit. En stimulant la circulation énergétique, il renforce la
								vitalité, régénère le corps et favorise un sentiment de vigueur
								renouvelé. Cette vitalité stimule la vitesse de guérison en
								dynamisant l'ensemble du système immunitaire. Cette énergie nouvelle
								se traduit par une qualité de vie améliorée.
							</p>
						</div>
					</div>
				</article>
			</section>
			<section>
				<h2 className="text-3xl">Mon histoire</h2>
				<p>
					Je m'appelle Robin Ponçon et j'ai {age} ans. Tout a débuté lors d'une période
					introspective en quête de spiritualité il y a {spiritualityAge} ans. En
					développant le magnétisme de mes mains, j'ai cherché à apaiser les symptômes du
					cancer de mon chat, espérant prolonger sa vie et minimiser sa souffrance. Cette
					expérience a éveillé en moi la volonté d'approfondir cette capacité pour aider
					autrui.
				</p>
				<p>
					Mon chemin m'a naturellement conduit au Reiki, une approche parallèle au
					magnétisme, mais différente car je n'utilisais pas mon énergie personnelle pour
					guérir les autres. J'ai ainsi franchi les trois niveaux du Reiki auprès de
					Monique Chanoni, une maître Reiki de la lignée de Mikao Usui. Je suis certifié
					maître praticien dans cette discipline, bien que je ne puisse pas initier
					d'autres personnes au Reiki en tant que maître enseignant.
				</p>
				<p>
					Ma conception des soins énergétiques repose sur une collaboration étroite avec
					mes clients. La guérison ne peut advenir sans la volonté consciente ou
					inconsciente du client. Mon but est d'offrir les outils de développement
					personnel et de guérison, de sorte qu'ils n'aient plus besoin de mes services
					sur le long terme. Cela peut sembler idéaliste, mais en guidant chacun vers son
					équilibre et son épanouissement, nous pouvons peut-être façonner un monde et un
					avenir meilleurs pour tous.
				</p>
			</section>
			<section>
				<h2 className="text-3xl">Ils ont essayé, pourquoi pas vous ?</h2>
				<ReviewsUsers reviewsUsers={reviewsUsers} />
			</section>
		</main>
	);
};

export default MainPage;
