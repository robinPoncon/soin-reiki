"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewsUsers from "./_components/ReviewsUsers/ReviewsUsers";
import ScrollAnimation from "./_components/ScrollAnimation/ScrollAnimation";
import { useDatas } from "./_context/ReviewsUsersDataContext";
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
					src="/main-image-reiki-site.png"
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
							Je suis ravi de vous accueillir sur mon site internet dédié à la
							reconnexion de l'Amour de Soi. Je crois profondément en l'importance de
							prendre soin de son corps, de son esprit et de ses émotions pour
							atteindre un épanouissement complet dans tous les domaines de sa vie.
							Vous trouverez toutes les informations nécessaires sur le déroulé d'une
							séance et ma vision du soin énergétique. Je vous souhaite une agréable
							visite !
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
						<p className="text-center max-w-2xl mx-auto">
							Je suis ravi de vous accueillir sur mon site internet dédié à la
							reconnexion de l'Amour de Soi. Je crois profondément en l'importance de
							prendre soin de son corps, de son esprit et de ses émotions pour
							atteindre un épanouissement complet dans tous les domaines de sa vie.
							Vous trouverez toutes les informations nécessaires sur le déroulé d'une
							séance et ma vision du soin énergétique. Je vous souhaite une agréable
							visite !
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
						"Plus profondes sont nos racines, plus grand est notre Amour de Soi et plus
						nous pouvons faire éclore les fleurs de notre épanouissement."
					</p>
				</ScrollAnimation>
			</section>
			<section className="flex flex-col gap-10">
				<BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					darkMode
					mainTitle="Vous vous reconnaissez ?"
					textDatasArray={[
						{
							id: "physic-bloc",
							imgAlt: "icône d'un corps physique",
							imgSrc: "/icons/icon_body.svg",
							title: "Physique",
							content: [
								"- Ressentez-vous fréquemment de la fatigue, même après avoir suffisamment dormi ?",
								"- Avez-vous des problèmes de sommeil, comme l'insomnie ou des réveils fréquents ?",
								"- Éprouvez-vous des douleurs corporelles inexplicables ou récurrentes ?"
							],
							transitionType: "left"
						},
						{
							id: "mental-bloc",
							imgAlt: "icône d'un cerveau",
							imgSrc: "/icons/icon_brain.svg",
							title: "Mental",
							content: [
								"- Vous arrive-t-il souvent de vous critiquer ou de vous juger durement ?",
								"- Avez-vous du mal à prendre des décisions ou à faire des choix qui vous conviennent ?",
								"- Êtes-vous souvent submergé par le stress, l'anxiété ou la dépression ?"
							],
							transitionType: "center"
						},
						{
							id: "emotional-bloc",
							imgAlt: "icône d'un coeur",
							imgSrc: "/icons/icon_heart.svg",
							title: "Émotionnel",
							content: [
								"- Vous sentez-vous souvent seul, même en présence d'autres personnes ?",
								"- Éprouvez-vous de la difficulté à exprimer vos émotions ou à les comprendre ?",
								"- Avez-vous du mal à vous sentir heureux ou satisfait de votre vie ?"
							],
							transitionType: "right"
						}
					]}
				/>
				<BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					mainTitle="Le Manque d'Amour de Soi"
					textDatasArray={[
						{
							id: "injuries-bloc",
							imgAlt: "icône d'une blessure émotionnelle",
							imgSrc: "/icons/icon_injury.svg",
							title: "Blessures",
							content: [
								`La source de ces blessures remonte souvent à l’enfance ou au karma familial 
								transgénérationnel. Avez-vous vécu une sensation de rejet ou d'abandon de la 
								part d’un de vos parents ? Si c’est le cas, ces blessures ont provoqué un vide intérieur
								dû au manque d’Amour de Soi. Le manque d'Amour de Soi peut souvent conduire à une perte de 
								connexion avec votre véritable identité et à des schémas d'auto-sabotage. Et c’est cette 
								déconnexion qui entraîne des symptômes émotionnels, mentaux et physiques identifiés au-dessus.`
							],
							transitionType: "left"
						},
						{
							id: "mask-bloc",
							imgAlt: "icône d'un masque",
							imgSrc: "/icons/icon_mask.svg",
							title: "Masques",
							content: [
								`Pour éviter de ressentir de nouveau la souffrance due à ces blessures, vous avez
								inconsciemment créé des masques. Paradoxalement, en mettant un masque, vous n’acceptez
								pas qui vous êtes, et donc vous vous abandonnez ou vous vous rejetez. Malgré ces efforts
								d'adaptation, un vide intérieur persiste, souvent comblé par des tentatives extérieures. 
								Cette quête extérieure pour apaiser ce vide peut souvent nous plonger dans la dépendance 
								affective, provoquant à son tour un manque de confiance et d'estime de soi.`
							],
							transitionType: "center"
						},
						{
							id: "healing-bloc",
							imgAlt: "icône d'une fleur",
							imgSrc: "/icons/icon_healing.svg",
							title: "Guérison",
							content: [
								`La bonne nouvelle, c’est qu’une fois que vous avez pris conscience que vous portez
								un masque, vous pouvez décider de le retirer. Cette prise de conscience est un premier
								pas essentiel vers la guérison de l'Amour de Soi, car elle vous invite à explorer vos 
								blessures passées et à reconnaître les schémas de comportement qui vous limitent. 
								En reconnaissant ces patterns, vous pouvez entamer un processus de guérison profond
								qui vous permettra de renouer avec votre véritable essence et de cultiver un Amour 
								de Soi authentique et durable.`
							],
							transitionType: "right"
						}
					]}
				/>
				<BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					darkMode
					pinkColor
					mainTitle="Mon Accompagnement"
					textDatasArray={[
						{
							id: "values-bloc",
							imgAlt: "icône de mains jointes",
							imgSrc: "/icons/icon_hands-pink.svg",
							title: "Mes valeurs",
							content: [
								`Mon objectif est de créer un espace de confiance et de relaxation, où vous
								vous sentirez en sécurité pour lâcher prise. C'est cet environnement de douceur 
								qui favorise la reconnexion avec votre cœur. Et c'est cette reconnexion avec votre coeur
								qui vous guide vers votre propre guérison. Chez moi, le jugement n'a pas sa place, 
								et mes valeurs fondamentales sont l'écoute, la bienveillance, la compassion et le respect.`
							],
							transitionType: "left"
						},
						{
							id: "tools-bloc",
							imgAlt: "icône d'une note de musique",
							imgSrc: "/icons/icon_music-pink.svg",
							title: "Mes services",
							content: [
								`Mon approche thérapeutique combine les cartes (oracle et tarot) pour identifier
								les causes profondes de vos blocages, le Reiki pour favoriser la détente de votre corps 
								et de sa relaxation, des exercices de pleine conscience pour libérer vos blocages 
								émotionnels, et des musiques apaisantes accompagnées de mes propres compositions 
								musicales au Handpan pour enrichir votre expérience thérapeutique.`
							],
							transitionType: "center"
						},
						{
							id: "happiness-bloc",
							imgAlt: "icône d'un soleil",
							imgSrc: "/icons/icon_universe-pink.svg",
							title: "Votre bonheur",
							content: [
								`La quête de la guérison est en réalité une recherche de la joie de 
								vivre et du bonheur profond. En surmontant les blocages, on retrouve la liberté, 
								la légèreté et la confiance en soi, créant ainsi un cercle vertueux qui permet de
								manifester nos rêves les plus profonds. Mon accompagnement vise à vous ramener vers 
								le véritable amour : l'Amour de Soi. Car sans cet amour envers vous-même, comment 
								pouvez-vous aimer les autres ?`
							],
							transitionType: "right"
						}
					]}
				></BlocTextContent>
			</section>
			<section className="flex flex-col gap-20">
				<h2 className="titleFont font-semibold text-2xl text-center mx-auto w-fit p-4 md:text-4xl customBorderBlue">
					Déroulement d'une séance
				</h2>
				<article>
					<h3 className="text-xl text-center font-semibold italic md:text-2xl">
						Étape 1 : Une Préparation Bienveillante
					</h3>
					<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
						<Image
							className="customImgBlueGreen mx-auto md:mx-0"
							alt="illustration d'une discussion entre deux personnes assises"
							src="/illustrations/illustration_discussion.png"
							width={320}
							height={320}
							loading="eager"
						/>
						<p className="text-start max-w-xs my-auto mx-auto md:mx-0">
							Dès le début, nous prenons le temps de discuter de vos intentions et des
							bienfaits que vous recherchez à travers les séances. Je vous partage
							ensuite mes connaissances et mon expérience, afin que nous puissions
							trouver des solutions durables à vos problématiques. De plus, je vous
							propose une guidance énergétique à travers le tirage d'une carte, pour
							vous guider un peu plus loin sur le chemin de la guérison.
						</p>
					</div>
				</article>
				<article>
					<h3 className="text-xl text-center font-semibold italic md:text-2xl">
						Étape 2 : L'Harmonie Énergétique
					</h3>
					<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row-reverse">
						<Image
							className="customImgBlueGreen mx-auto md:mx-0"
							alt="illustration d'un homme faisant un soin reiki à une femme"
							src="/illustrations/illustration_energetic-heal.png"
							width={320}
							height={320}
						/>
						<p className="text-justify max-w-xs my-auto mx-auto md:mx-0">
							Pendant le soin, vous restez confortablement vêtu(e) allongé(e) sur une
							table de massage. L'objectif est que vous soyez à l'aise ! J'accompagne
							cela avec une douce musique apaisante. Je commence le soin en plaçant
							délicatement mes mains sur les zones de votre corps nécessitant un
							rééquilibrage énergétique. Pendant cette étape, des sensations telles
							que chaleur, fraîcheur, picotements, émotions ou autres peuvent se
							manifester. Tout cela est normal et fait partie du processus naturel de
							la circulation de l'énergie en vous.
						</p>
					</div>
				</article>
				<article>
					<h3 className="text-xl text-center font-semibold italic md:text-2xl">
						Étape 3 : Intégration et Planification
					</h3>
					<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
						<Image
							className="customImgBlueGreen mx-auto md:mx-0"
							alt="illustration d'un calendrier"
							src="/illustrations/illustration_calendar.png"
							width={320}
							height={320}
						/>
						<p className="text-start max-w-xs my-auto mx-auto md:mx-0">
							Une fois le soin achevé, nous prenons le temps de partager nos
							impressions sur l'expérience vécue. En fonction de vos ressentis et de
							vos besoins, nous planifions d'autres séances si nécessaires.
							Généralement, pour une véritable guérison et transformation, il est
							recommandé de prévoir 3 à 4 séances minimum, espacées d'une à deux
							semaines. Dans les jours qui suivent le soin, hydratez-vous davantage
							pour favoriser la purification et l'élimination des toxines
							énergétiques.
						</p>
					</div>
				</article>
			</section>
			<section className="flex flex-col gap-10">
				<h2 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderPink p-4 md:text-4xl lg:hidden">
					Mon histoire
				</h2>

				<div className="flex flex-col justify-center p-4 gap-10 lg:flex-row lg:gap-0 lg:mx-auto">
					<Image
						className="rounded-lg mx-auto -scale-x-100 lg:hidden"
						alt="photo de profil de robin ponçon"
						src="/photo-profil.png"
						width={300}
						height={300}
					></Image>
					<Image
						className="hidden rounded-t-lg mr-0 ml-auto -scale-x-100 lg:block"
						alt="photo de profil de robin ponçon"
						src="/photo-profil.png"
						width={400}
						height={500}
					></Image>
					<div className="text-customWhite flex flex-col relative gap-6 rounded-lg p-5 text-center mx-auto max-w-lg bg-darkBackground lg:p-8 lg:text-start lg:-ml-10 lg:rounded-none lg:rounded-tr-lg">
						<h2 className="hidden titleFont font-semibold text-3xl italic text-pink lg:block">
							Mon Histoire
						</h2>
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
							n'utilise plus ma propre énergie pour guérir les autres mais celle qui
							est partout autour de nous. J'ai ainsi franchi les trois niveaux du
							Reiki auprès de Monique Chanoni, maître Reiki de la lignée de Mikao
							Usui. Je suis certifié maître praticien dans cette discipline, bien que
							je ne puisse pas initier d'autres personnes au Reiki en tant que maître
							enseignant.
						</p>
						<p className="lg:hidden">
							Ma conception des soins énergétiques repose sur une collaboration
							étroite avec mes clients. La guérison ne peut advenir sans la volonté
							consciente ou inconsciente du client. Mon but est d'offrir les outils de
							développement personnel et de guérison, de sorte qu'ils n'aient plus
							besoin de mes services sur le long terme. Cela peut sembler idéaliste,
							mais en guidant chacun vers son équilibre et son épanouissement, nous
							pouvons peut-être façonner un monde et un avenir meilleurs pour tous.
						</p>
					</div>
				</div>
				<p className=" text-customWhite relative hidden bg-darkBackground p-6 w-[872px] rounded-b-lg mx-auto -mt-20 lg:block">
					Ma conception des soins énergétiques repose sur une collaboration étroite avec
					mes clients. La guérison ne peut advenir sans la volonté consciente ou
					inconsciente du client. Mon but est d'offrir les outils de développement
					personnel et de guérison, de sorte qu'ils n'aient plus besoin de mes services
					sur le long terme. Cela peut sembler idéaliste, mais en guidant chacun vers son
					équilibre et son épanouissement, nous pouvons peut-être façonner un monde et un
					avenir meilleurs pour tous.
				</p>
			</section>
			<section className="flex flex-col gap-20 py-10 px-4">
				<h2 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
					Ils ont essayé, pourquoi pas vous ?
				</h2>

				<ReviewsUsers reviewsUsers={reviewsUsers} />
			</section>
		</main>
	);
};

export default MainPage;
