"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewsUsers from "./_components/ReviewsUsers/ReviewsUsers";
import ScrollAnimation from "./_components/ScrollAnimation/ScrollAnimation";
import { useDatas } from "./_context/ReviewsUsersDataContext";

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
			<figure className="md:-mt-20 shadow-darkTurquoise">
				<Image
					alt="image principal du site avec un arbre et des boules d'énergie"
					src="/main-site-image.png"
					height={758}
					width={1556}
				/>
			</figure>
			<section className="flex flex-col gap-20">
				<article className="flex flex-col gap-10">
					<h2 className="font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
						Qu'est-ce que le Reiki ?
					</h2>
					<div className="flex flex-col justify-center px-4 gap-10 lg:flex-row">
						<ScrollAnimation
							id="universe-bloc"
							classContent="flex flex-col lg:w-1/3"
							styleBeforeTransition={
								breakpointResponsiveValue < 1024
									? {
											opacity: "0",
											transition: "opacity 2.5s, margin-top 2.5s",
											marginTop: "100px"
									  }
									: {
											opacity: "0",
											transition: "opacity 2.5s, margin-left 2.5s",
											marginLeft: "100px"
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
											marginLeft: "0px"
									  }
							}
						>
							<p className="bg-darkBackground rounded-full w-fit p-2.5 mx-auto">
								<Image
									className="mx-auto"
									alt="icône représentant l'énergie universelle"
									src="/icons/icon_universe.svg"
									width={48}
									height={48}
								/>
							</p>
							<h3 className="text-xl text-center font-semibold italic mt-6 mb-2">
								Une énergie universelle
							</h3>
							<p className="text-justify max-w-xs mx-auto">
								Le Reiki est l'énergie de vie qui englobe toute la matière au sein
								de notre univers. Elle est partout autour de nous, et mon travail
								est de la canaliser pour la diffuser en vous. Vous apportant calme,
								sérénité, lâcher prise et bien être !
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							id="yin-yang-bloc"
							classContent="flex flex-col lg:w-1/3"
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
							<p className="bg-darkBackground rounded-full w-fit p-2.5 mx-auto">
								<Image
									className="mx-auto"
									alt="icône du yin yang"
									src="/icons/icon_yin-yang.svg"
									width={48}
									height={48}
								/>
							</p>
							<h3 className="text-xl text-center font-semibold italic mt-6 mb-2">
								Une harmonisation énergétique
							</h3>
							<p className="text-justify max-w-xs mx-auto">
								Durant un soin, l'énergie va circuler dans certaines parties du
								corps au travers des méridiens et des chakras. Cette harmonisation
								apporte un rééquilibre au niveau des pensées, des émotions et du
								corps physique. C'est un moment de reconnexion avec soi !
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							id="hands-bloc"
							classContent="flex flex-col lg:w-1/3"
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
											marginRight: "100px"
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
							<p className="bg-darkBackground rounded-full w-fit p-2.5 mx-auto">
								<Image
									className="mx-auto"
									alt="icône de mains jointes"
									src="/icons/icon_hands.svg"
									width={48}
									height={48}
								/>
							</p>
							<h3 className="text-xl text-center font-semibold italic mt-6 mb-2">
								Un toucher thérapeutique
							</h3>
							<p className="text-justify max-w-xs mx-auto">
								L'utilisation du Reiki se fait par apposition des mains sur
								différentes parties du corps. Elles peuvent être posées délicatement
								ou être à 5/10cm au-dessus du corps. Il n'y a aucune manipulation ce
								qui en fait une méthode de soin très douce et agréable !
							</p>
						</ScrollAnimation>
					</div>
				</article>
				<article className="flex flex-col gap-10 bg-darkBackground text-customWhite py-12 shadow-darkTurquoise">
					<h2 className="font-semibold text-2xl text-center mx-auto w-fit customBorderYellow p-4 md:text-4xl">
						Origines du Reiki
					</h2>
					<div className="flex flex-col justify-center px-4 gap-10 lg:flex-row">
						<ScrollAnimation
							id="japanese-bloc"
							classContent="flex flex-col lg:w-1/3"
							styleBeforeTransition={
								breakpointResponsiveValue < 1024
									? {
											opacity: "0",
											transition: "opacity 2.5s, margin-top 2.5s",
											marginTop: "100px"
									  }
									: {
											opacity: "0",
											transition: "opacity 2.5s, margin-left 2.5s",
											marginLeft: "100px"
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
											marginLeft: "0px"
									  }
							}
						>
							<p className="bg-darkBackground rounded-full w-fit p-2.5 mx-auto shadow-customYellow">
								<Image
									alt="icône d'une plante"
									src="/icons/icon_plant.svg"
									width={48}
									height={48}
								/>
							</p>
							<h3 className="text-xl text-center font-semibold italic mt-6 mb-2 text-customYellow">
								Des racines japonaises
							</h3>
							<p className="text-justify max-w-xs mx-auto">
								Le Reiki fut révélé à Mikao Usui, érudit et guérisseur japonais du
								XIXe siècle, durant une retraite introspective de 21 jours au Mont
								Kurama. Cette expérience transpersonnelle lui transmit les
								enseignements et techniques du Reiki, que nous pratiquons
								actuellement. Son attrait universel réside dans sa simplicité et son
								efficacité. Le Reiki ne cherche pas à se substituer à la médecine,
								mais plutôt à agir en complémentarité avec elle !
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							id="light-bloc"
							classContent="flex flex-col lg:w-1/3"
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
							<p className="bg-darkBackground rounded-full w-fit p-2.5 mx-auto shadow-customYellow">
								<Image
									alt="icône d'une ampoule"
									src="/icons/icon_light.svg"
									width={48}
									height={48}
								/>
							</p>
							<h3 className="text-xl text-center font-semibold italic mt-6 mb-2 text-customYellow">
								Ses principes et sa philosophie
							</h3>
							<p className="text-justify max-w-xs mx-auto">
								Le Reiki repose sur cinq principes essentiels, appelés les "Cinq
								Préceptes du Reiki". Ils guident les praticiens vers l'harmonie
								intérieure et le bien-être en promouvant des valeurs telles que la
								bienveillance, la gratitude et la paix intérieure. Cette
								philosophie, ancrée dans la simplicité et la sagesse, encourage
								chacun à cultiver une connexion profonde avec soi-même et avec
								l'énergie qui nous entoure.
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							id="globe-bloc"
							classContent="flex flex-col lg:w-1/3"
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
											marginRight: "100px"
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
							<p className="bg-darkBackground rounded-full w-fit p-2.5 mx-auto shadow-customYellow">
								<Image
									alt="icône de la planète terre"
									src="/icons/icon_globe.svg"
									width={48}
									height={48}
								/>
							</p>
							<h3 className="text-xl text-center font-semibold italic mt-6 mb-2 text-customYellow">
								Un développement mondial
							</h3>
							<p className="text-justify max-w-xs mx-auto">
								Depuis ses modestes débuts au Japon, le Reiki a transcendé les
								frontières pour devenir une pratique mondiale de guérison et de
								bien-être. Son attrait universel réside dans sa simplicité et son
								efficacité. Au fil des décennies, diverses écoles et approches ont
								émergé, reflétant la diversité culturelle et les besoins
								individuels. Le Reiki ne vise pas à se substituer de la médecine,
								mais plutôt à agir en complémentarité avec elle !
							</p>
						</ScrollAnimation>
					</div>
				</article>
				<article className="flex flex-col gap-10">
					<h2 className="font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
						Les bienfaits du Reiki
					</h2>
					<div className="flex flex-col justify-center px-4 gap-10 lg:flex-row">
						<ScrollAnimation
							id="brain-bloc"
							classContent="flex flex-col lg:w-1/3"
							styleBeforeTransition={
								breakpointResponsiveValue < 1024
									? {
											opacity: "0",
											transition: "opacity 2.5s, margin-top 2.5s",
											marginTop: "100px"
									  }
									: {
											opacity: "0",
											transition: "opacity 2.5s, margin-left 2.5s",
											marginLeft: "100px"
									  }
							}
							styleAfterTransition={
								breakpointResponsiveValue < 1024
									? {
											opacity: "1",
											marginTop: "0"
									  }
									: {
											opacity: "1",
											marginLeft: "0"
									  }
							}
						>
							<p className="bg-darkBackground rounded-full w-fit p-2.5 mx-auto">
								<Image
									alt="icône d'un cerveau"
									src="/icons/icon_brain.svg"
									width={48}
									height={48}
								/>
							</p>
							<h3 className="text-xl text-center font-semibold italic mt-6 mb-2">
								Sérénité mentale et détente
							</h3>
							<p className="text-justify max-w-xs mx-auto">
								Le Reiki, grâce à sa nature apaisante, ouvre la voie à une
								relaxation profonde, offrant ainsi un précieux moyen de diminuer le
								stress et l'anxiété. En encourageant un lâcher-prise mental, il
								permet d'atteindre une clarté mentale qui renforce à la fois la
								concentration et l'estime de soi. Grâce à cette harmonie retrouvée,
								le Reiki offre un refuge de calme au cœur du tumulte quotidien.
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							id="heart-bloc"
							classContent="flex flex-col lg:w-1/3"
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
							<p className="bg-darkBackground rounded-full w-fit p-2.5 mx-auto">
								<Image
									alt="icône d'un coeur"
									src="/icons/icon_heart.svg"
									width={48}
									height={48}
								/>
							</p>
							<h3 className="text-xl text-center font-semibold italic mt-6 mb-2">
								Apaisement émotionnel profond
							</h3>
							<p className="text-justify max-w-xs mx-auto">
								Le Reiki offre bien plus qu'une simple relaxation physique. Il
								travaille également en profondeur pour apaiser les émotions
								tourmentées, libérant ainsi les blocages qui entravent le bien-être
								émotionnel. Cette libération émotionnelle peut vous offrir
								l'opportunité de pratiquer le pardon et de vous reconnecter
								profondément à vous-même.
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							id="energy-bloc"
							classContent="flex flex-col lg:w-1/3"
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
											marginRight: "100px"
									  }
							}
							styleAfterTransition={
								breakpointResponsiveValue < 1024
									? {
											opacity: "1",
											marginTop: "0"
									  }
									: {
											opacity: "1",
											marginRight: "0"
									  }
							}
						>
							<p className="bg-darkBackground rounded-full w-fit p-2.5 mx-auto">
								<Image
									alt="icône d'un éclair représentant l'énergie"
									src="/icons/icon_energy.svg"
									width={48}
									height={48}
								/>
							</p>
							<h3 className="text-xl text-center font-semibold italic mt-6 mb-2">
								Renforcement de la vitalité
							</h3>
							<p className="text-justify max-w-xs mx-auto">
								Le Reiki, de par sa nature énergétique, revitalise le corps et
								l'esprit. En stimulant la circulation énergétique, il renforce la
								vitalité, régénère le corps et favorise un sentiment de vigueur
								renouvelé. Cette vitalité stimule la vitesse de guérison en
								dynamisant l'ensemble du système immunitaire. Cette énergie nouvelle
								se traduit par une qualité de vie améliorée.
							</p>
						</ScrollAnimation>
					</div>
					<div className="flex flex-col gap-5">
						<h3 className="text-xl text-center font-semibold italic mt-6 mb-2">
							Souhaitez-vous expérimenter une séance de Reiki ?
						</h3>
						<button className="actionBtnLink">
							<span className="textActionBtnLink">Déroulement d'une séance</span>
							<span className="iconActionBtnLink"/>
						</button>
					</div>
				</article>
			</section>
			<section className="flex flex-col gap-10 bg-darkBackground text-customWhite py-12 shadow-darkTurquoise">
				<h2 className="font-semibold text-2xl text-center mx-auto w-fit customBorderYellow p-4 md:text-4xl">
					Mon histoire
				</h2>
				<div className="flex flex-col justify-center px-4 gap-10 lg:flex-row">
					<ScrollAnimation
						id="profil-picture-bloc"
						styleBeforeTransition={{
							opacity: "0",
							transition: "opacity 2.5s, margin-left 2.5s",
							marginLeft: "-100px"
						}}
						styleAfterTransition={{
							opacity: "1",
							marginLeft: "0"
						}}
					>
						<Image
							className="customImgYellow mx-auto lg:ml-10"
							alt="photo de profil de robin ponçon"
							src="/my-picture.png"
							width={150}
							height={150}
						></Image>
					</ScrollAnimation>
					<ScrollAnimation
						id="text-picture-bloc"
						classContent="flex flex-col gap-6 text-justify max-w-3xl lg:pr-10"
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
										marginRight: "100px"
								  }
						}
						styleAfterTransition={
							breakpointResponsiveValue < 1024
								? {
										opacity: "1",
										marginTop: "0"
								  }
								: {
										opacity: "1",
										marginRight: "0"
								  }
						}
					>
						<p>
							Je m'appelle Robin Ponçon et j'ai {age} ans. Tout a débuté lors d'une
							période introspective en quête de spiritualité il y a {spiritualityAge}{" "}
							ans. En développant le magnétisme de mes mains, j'ai cherché à apaiser
							les symptômes du cancer de mon chat, espérant prolonger sa vie et
							minimiser ses souffrances. Cette expérience a éveillé en moi la volonté
							d'approfondir cette capacité pour aider autrui.
						</p>
						<p>
							Mon chemin m'a naturellement conduit vers le Reiki, une technique
							parallèle au magnétisme, mais avec une approche différente car je
							n'utilisais plus ma propre énergie pour guérir les autres. J'ai ainsi
							franchi les trois niveaux du Reiki auprès de Monique Chanoni, maître
							Reiki de la lignée de Mikao Usui. Je suis certifié maître praticien dans
							cette discipline, bien que je ne puisse pas initier d'autres personnes
							au Reiki en tant que maître enseignant.
						</p>
						<p>
							Ma conception des soins énergétiques repose sur une collaboration
							étroite avec mes clients. La guérison ne peut advenir sans la volonté
							consciente ou inconsciente du client. Mon but est d'offrir les outils de
							développement personnel et de guérison, de sorte qu'ils n'aient plus
							besoin de mes services sur le long terme. Cela peut sembler idéaliste,
							mais en guidant chacun vers son équilibre et son épanouissement, nous
							pouvons peut-être façonner un monde et un avenir meilleurs pour tous.
						</p>
					</ScrollAnimation>
				</div>
			</section>
			<section className="flex flex-col gap-20 px-4">
				<h2 className="font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
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
