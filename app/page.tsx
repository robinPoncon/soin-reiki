"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewsUsers from "./_components/ReviewsUsers/ReviewsUsers";
import ScrollAnimation from "./_components/ScrollAnimation/ScrollAnimation";
import { useDatas } from "./_context/ReviewsUsersDataContext";
import Link from "next/link";
import BlocTextContent from "./_components/BlocTextContent/BlocTextContent";

const MainPage = () => {
	const { reviewsUsers } = useDatas();
	const [age, setAge] = useState<number>(0);
	const [spiritualityAge, setSpiritualityAge] = useState<number>(5);

	const [breakpointResponsiveValue, setBreakpointResponsiveValue] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setBreakpointResponsiveValue(window.innerWidth);
		}
	}, []);

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
		<main className="flex flex-col gap-20">
			<figure className="bg-blackBackground sm:-mt-5 md:-mt-10 lg:-mt-20">
				<Image
					className="mx-auto"
					loading="eager"
					alt="image principal du site avec un arbre et des boules d'énergie"
					src="/main-site-image.png"
					height={758}
					width={1556}
				/>
			</figure>
			<section className="flex flex-col gap-10 px-2">
				<h2 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
					Bienvenue sur <span className="italic">Les Racines de la Guérison !</span>
				</h2>
				{breakpointResponsiveValue < 1024 ? (
					<div className="flex flex-col gap-10 px-2">
						<p className="text-justify max-w-2xl mx-auto">
							Je suis ravi de vous accueillir sur mon site internet dédié au Reiki et
							à la guidance en tirage de cartes sur Bordeaux. Je crois profondément en
							l'importance de prendre soin de son corps, de son esprit et de ses
							émotions pour atteindre un épanouissement complet dans tous les domaines
							de sa vie. Vous trouverez toutes les informations nécessaires sur les
							différents services que je propose au sein des différentes pages de mon
							site. Je vous souhaite une agréable visite !
						</p>
					</div>
				) : (
					<ScrollAnimation
						id="text-welcome-bloc"
						classContent="flex flex-col gap-10 px-2"
						styleBeforeTransition={{
							opacity: "0",
							transition: "opacity 2.5s, margin-left 2.5s",
							marginLeft: "200px"
						}}
						styleAfterTransition={{
							opacity: "1",
							marginLeft: "0px"
						}}
					>
						<p className="text-justify max-w-2xl mx-auto">
							Je suis ravi de vous accueillir sur mon site internet dédié au Reiki et
							à la guidance en tirage de cartes sur Bordeaux. Je crois profondément en
							l'importance de prendre soin de son corps, de son esprit et de ses
							émotions pour atteindre un épanouissement complet dans tous les domaines
							de sa vie. Vous trouverez toutes les informations nécessaires sur les
							différents services que je propose au sein des différentes pages de mon
							site. Je vous souhaite une agréable visite !
						</p>
					</ScrollAnimation>
				)}
				<p className="separatorBlue max-w-sm mx-auto md:max-w-xl" />
				<ScrollAnimation
					id="citation-welcome-bloc"
					classContent="flex flex-col gap-10 px-2"
					styleBeforeTransition={
						breakpointResponsiveValue < 1024
							? {
									opacity: "0",
									transition: "opacity 2.5s, margin-top 2.5s",
									marginTop: "100px"
							  }
							: {
									opacity: "0",
									transition: "opacity 2.5s, margin-right 2.5s",
									marginRight: "200px"
							  }
					}
					styleAfterTransition={
						breakpointResponsiveValue < 1024
							? {
									opacity: "1",
									marginTop: "0px"
							  }
							: {
									opacity: "1",
									marginRight: "0px"
							  }
					}
				>
					<p className="font-semibold italic text-center max-w-2xl mx-auto">
						"Mon but est de trouver la source des problèmes et de les traiter ou
						idéalement, de les apaiser. Plus profondes sont nos racines, moins nous
						sommes affectés par les événements de la vie, et plus nous pouvons faire
						éclore les fleurs de notre épanouissement."
					</p>
				</ScrollAnimation>
			</section>
			<section className="flex flex-col gap-10">
				<BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					darkMode
					mainTitle="Qu'est-ce que le Reiki ?"
					textDatasArray={[
						{
							id: "universe-bloc",
							imgAlt: "icône représentant l'énergie universelle",
							imgSrc: "/icons/icon_universe.svg",
							title: "Une énergie universelle",
							content: `Le Reiki est l'énergie de vie qui englobe toute la matière au sein
								de notre univers. Elle est partout autour de nous, et mon travail
								est de la canaliser pour la diffuser en vous. Vous apportant calme,
								sérénité, lâcher prise et bien être !`,
							transitionType: "left"
						},
						{
							id: "yin-yang-bloc",
							imgAlt: "icône du yin yang",
							imgSrc: "/icons/icon_yin-yang.svg",
							title: "Une harmonisation énergétique",
							content: `Durant un soin, l'énergie va circuler dans certaines parties du
								corps au travers des méridiens et des chakras. Cette harmonisation
								apporte un rééquilibre au niveau des pensées, des émotions et du
								corps physique. C'est un moment de reconnexion avec soi !`,
							transitionType: "center"
						},
						{
							id: "hands-bloc",
							imgAlt: "icône de mains jointes",
							imgSrc: "/icons/icon_hands.svg",
							title: "Un toucher thérapeutique",
							content: `L'utilisation du Reiki se fait par apposition des mains sur
								différentes parties du corps. Elles peuvent être posées délicatement
								ou être à 5/10cm au-dessus du corps. Il n'y a aucune manipulation ce
								qui en fait une méthode de soins très douce et agréable !`,
							transitionType: "right"
						}
					]}
				/>
				<BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					mainTitle="Origines du Reiki"
					textDatasArray={[
						{
							id: "japanese-bloc",
							imgAlt: "icône d'une plante",
							imgSrc: "/icons/icon_plant.svg",
							title: "Des racines japonaises",
							content: `Le Reiki fut révélé à Mikao Usui, érudit et guérisseur japonais du
								XIXe siècle, durant une retraite introspective de 21 jours au Mont
								Kurama. Cette expérience transpersonnelle lui transmit les
								enseignements et techniques du Reiki, que nous pratiquons
								actuellement. Son attrait universel réside dans sa simplicité et son
								efficacité. Le Reiki continue d'évoluer tout en restant fidèle à ses 
								principes fondamentaux.`,
							transitionType: "left"
						},
						{
							id: "light-bloc",
							imgAlt: "icône d'une ampoule",
							imgSrc: "/icons/icon_light.svg",
							title: "Ses principes et sa philosophie",
							content: `Le Reiki repose sur cinq principes essentiels, appelés les "Cinq
								Préceptes du Reiki". Ils guident les praticiens vers l'harmonie
								intérieure et le bien-être en promouvant des valeurs telles que la
								bienveillance, la gratitude et la paix intérieure. Cette
								philosophie, ancrée dans la simplicité et la sagesse, encourage
								chacun à cultiver une connexion profonde avec soi-même et avec
								l'énergie qui nous entoure.`,
							transitionType: "center"
						},
						{
							id: "globe-bloc",
							imgAlt: "icône de la planète terre",
							imgSrc: "/icons/icon_globe.svg",
							title: "Un développement mondial",
							content: `Depuis ses modestes débuts au Japon, le Reiki a transcendé les
								frontières pour devenir une pratique mondiale de guérison et de
								bien-être. Son attrait universel réside dans sa simplicité et son
								efficacité. Au fil des décennies, diverses écoles et approches ont
								émergé, reflétant la diversité culturelle et les besoins
								individuels. Le Reiki ne vise pas à se substituer de la médecine,
								mais plutôt à agir en complémentarité avec elle !`,
							transitionType: "right"
						}
					]}
				/>
				<BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					darkMode
					mainTitle="Les bienfaits du Reiki"
					textDatasArray={[
						{
							id: "brain-bloc",
							imgAlt: "icône d'un cerveau",
							imgSrc: "/icons/icon_brain.svg",
							title: "Sérénité mentale et détente",
							content: `Le Reiki, grâce à sa nature apaisante, ouvre la voie à une
								relaxation profonde, offrant ainsi un précieux moyen de diminuer le
								stress et l'anxiété. En encourageant le lâcher-prise, il
								permet d'atteindre une clarté mentale qui renforce à la fois la
								concentration et l'estime de soi. Grâce à cette harmonie retrouvée,
								le Reiki offre une profonde paix intérieure.`,
							transitionType: "left"
						},
						{
							id: "heart-bloc",
							imgAlt: "icône d'un coeur",
							imgSrc: "/icons/icon_heart.svg",
							title: "Apaisement émotionnel profond",
							content: `Le Reiki offre bien plus qu'une simple relaxation physique. Il
								travaille également en profondeur pour apaiser les émotions
								tourmentées, libérant ainsi les blocages qui entravent le bien-être
								émotionnel. Cette libération émotionnelle peut vous offrir
								l'opportunité de pratiquer le pardon et de vous reconnecter
								profondément à vous-même.`,
							transitionType: "center"
						},
						{
							id: "energy-bloc",
							imgAlt: "icône d'un éclair représentant l'énergie",
							imgSrc: "/icons/icon_energy.svg",
							title: "Renforcement de la vitalité",
							content: `Le Reiki, de par sa nature énergétique, revitalise le corps et
								l'esprit. En stimulant la circulation énergétique, il renforce la
								vitalité, régénère le corps et favorise un sentiment de vigueur
								renouvelé. Cette vitalité stimule la vitesse de guérison en
								dynamisant l'ensemble du système immunitaire. Cette énergie nouvelle
								se traduit par une qualité de vie améliorée.`,
							transitionType: "right"
						}
					]}
				>
					<ScrollAnimation
						id="redirectLinkSoinReiki"
						classContent="flex flex-col gap-5"
						styleBeforeTransition={{
							opacity: "0",
							transition: "opacity 2.5s, margin-top 2.5s",
							marginTop: "100px"
						}}
						styleAfterTransition={{
							opacity: "1",
							marginTop: "0"
						}}
					>
						<h3 className="text-xl text-center font-semibold italic mt-6 mb-2 px-4">
							Souhaitez-vous expérimenter une séance de Reiki ?
						</h3>
						<Link
							href="/soin-reiki"
							className="actionLinkYellow"
						>
							<span className="textActionLink">Déroulement d'une séance</span>
							<span className="iconActionLink" />
						</Link>
					</ScrollAnimation>
				</BlocTextContent>
				<BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					mainTitle="Les vertus du tirage de cartes"
					textDatasArray={[
						{
							id: "decode-blockages-bloc",
							imgAlt: "icône d'un puzzle",
							imgSrc: "/icons/icon_puzzle.svg",
							title: "Analyse des blocages",
							content: `Dans un premier temps, les cartes nous offrent la capacité d'explorer l'origine des
								blocages que vous rencontrez. Grâce à mon interprétation des cartes, combinée avec mon intuition,
								je peux vous aider à discerner la source de ces blocages, qu'ils relèvent du domaine physique,
								relationnel, professionnel ou familial. Une fois que nous avons identifié leur source,
								nous pouvons élaborer des solutions en vue de résoudre ces problèmes.`,
							transitionType: "left"
						},
						{
							id: "heal-path-bloc",
							imgAlt: "icône d'une plante symbolisant la guérison",
							imgSrc: "/icons/icon_healing.svg",
							title: "Chemins de guérison",
							content: `Dans un second temps, les cartes nous permettent d'identifier les soutiens et les 
								solutions potentielles. Ces pistes de guérison peuvent évoquer des pensées ou des conseils 
								qui vous ont peut-être déjà été transmis et recommandé. De plus, elles ont le potentiel 
								de vous ouvrir les yeux et de vous offrir une nouvelle perspective sur la situation, 
								vous permettant ainsi d'acquérir un point de vue totalement nouveau.`,
							transitionType: "center"
						},
						{
							id: "awareness-bloc",
							imgAlt: "icône d'un oeil'",
							imgSrc: "/icons/icon_eye.svg",
							title: "Prise de conscience",
							content: `Enfin, l'objectif d'un tirage de cartes est de vous orienter vers votre vérité
								personnelle. Cela équivaut à une meilleure compréhension de vous-même et de vos expériences. 
								Il arrive souvent que la simple exploration d'un problème sous un angle nouveau permette 
								d'en révéler des solutions insoupçonnées. C'est ce qu'on appelle une prise de conscience, 
								et cela peut transformer profondément tous les aspects de votre vie.`,
							transitionType: "right"
						}
					]}
				>
					<ScrollAnimation
						id="redirectLinkGuidance"
						classContent="flex flex-col gap-5"
						styleBeforeTransition={{
							opacity: "0",
							transition: "opacity 2.5s, margin-top 2.5s",
							marginTop: "100px"
						}}
						styleAfterTransition={{
							opacity: "1",
							marginTop: "0"
						}}
					>
						<h3 className="text-xl text-center font-semibold italic mt-6 mb-2 px-4">
							Souhaitez-vous expérimenter une séance de guidance au travers des cartes
							?
						</h3>
						<Link
							href="/guidance"
							className="actionLinkBlue"
						>
							<span className="textActionLink">Déroulement d'une séance</span>
							<span className="iconActionLink" />
						</Link>
					</ScrollAnimation>
				</BlocTextContent>
			</section>
			<section className="flex flex-col gap-10">
				<h2 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderPink p-4 md:text-4xl lg:hidden">
					Mon histoire
				</h2>
				<ScrollAnimation
					id="profil-picture-bloc"
					styleBeforeTransition={{
						opacity: "0",
						transition: "opacity 2.5s, margin-top 2.5s",
						marginTop: "100px"
					}}
					styleAfterTransition={{
						opacity: "1",
						marginTop: "0"
					}}
				>
					<div className="flex flex-col justify-center p-4 gap-10 lg:flex-row lg:gap-0 lg:mx-auto">
						<Image
							className="rounded-lg mx-auto -scale-x-100 lg:hidden"
							alt="photo de profil de robin ponçon"
							src="/photo-profil-pro.jpeg"
							width={300}
							height={300}
						></Image>
						<Image
							className="hidden rounded-t-lg mr-0 ml-auto -scale-x-100 lg:block"
							alt="photo de profil de robin ponçon"
							src="/photo-profil-pro.jpeg"
							width={400}
							height={400}
						></Image>
						<div className="text-customWhite flex flex-col relative gap-6 rounded-lg p-5 text-center mx-auto max-w-lg bg-darkBackground lg:p-8 lg:text-start lg:-ml-10 lg:rounded-none lg:rounded-tr-lg">
							<h2 className="hidden titleFont font-semibold text-3xl italic text-pink lg:block">
								Mon Histoire
							</h2>
							<p>
								Je m'appelle Robin Ponçon et j'ai {age} ans. Tout a débuté lors
								d'une période introspective en quête de spiritualité il y a{" "}
								{spiritualityAge} ans. En développant le magnétisme de mes mains,
								j'ai cherché à apaiser les symptômes du cancer de mon chat, espérant
								prolonger sa vie et minimiser ses souffrances. Cette expérience a
								éveillé en moi la volonté d'approfondir cette capacité pour aider
								autrui.
							</p>
							<p>
								Mon chemin m'a naturellement conduit vers le Reiki, une technique
								parallèle au magnétisme, mais avec une approche différente car je
								n'utilise plus ma propre énergie pour guérir les autres mais celle
								qui est partout autour de nous. J'ai ainsi franchi les trois niveaux
								du Reiki auprès de Monique Chanoni, maître Reiki de la lignée de
								Mikao Usui. Je suis certifié maître praticien dans cette discipline,
								bien que je ne puisse pas initier d'autres personnes au Reiki en
								tant que maître enseignant.
							</p>
							<p className="lg:hidden">
								Ma conception des soins énergétiques repose sur une collaboration
								étroite avec mes clients. La guérison ne peut advenir sans la
								volonté consciente ou inconsciente du client. Mon but est d'offrir
								les outils de développement personnel et de guérison, de sorte
								qu'ils n'aient plus besoin de mes services sur le long terme. Cela
								peut sembler idéaliste, mais en guidant chacun vers son équilibre et
								son épanouissement, nous pouvons peut-être façonner un monde et un
								avenir meilleurs pour tous.
							</p>
						</div>
					</div>
					<p className=" text-customWhite relative hidden bg-darkBackground p-8 w-[872px] rounded-b-lg mx-auto -mt-5 lg:block">
						Ma conception des soins énergétiques repose sur une collaboration étroite
						avec mes clients. La guérison ne peut advenir sans la volonté consciente ou
						inconsciente du client. Mon but est d'offrir les outils de développement
						personnel et de guérison, de sorte qu'ils n'aient plus besoin de mes
						services sur le long terme. Cela peut sembler idéaliste, mais en guidant
						chacun vers son équilibre et son épanouissement, nous pouvons peut-être
						façonner un monde et un avenir meilleurs pour tous.
					</p>
				</ScrollAnimation>
			</section>
			<section className="flex flex-col gap-20 py-10 px-4">
				<h2 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
					Ils ont essayé, pourquoi pas vous ?
				</h2>
				<ScrollAnimation
					id="reviewsUsers-bloc"
					styleBeforeTransition={{
						opacity: "0",
						transition: "opacity 2s, margin-top 2s",
						marginTop: "-50px"
					}}
					styleAfterTransition={{
						opacity: "1",
						marginTop: "0"
					}}
				>
					<ReviewsUsers reviewsUsers={reviewsUsers} />
				</ScrollAnimation>
			</section>
		</main>
	);
};

export default MainPage;
