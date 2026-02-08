"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewsUsers from "./_components/ReviewsUsers/ReviewsUsers";
import ScrollAnimation from "./_components/ScrollAnimation/ScrollAnimation";
import { useDatas } from "./_context/ReviewsUsersDataContext";
import BlocTextContent from "./_components/BlocTextContent/BlocTextContent";
import Link from "next/link";

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
		<main className="flex flex-col gap-16">
			<figure className="bg-blackBackground sm:-mt-5 md:-mt-10 lg:-mt-20">
				<Image
					className="mx-auto"
					loading="eager"
					alt="image principal du site avec un arbre et des boules d'énergie"
					src="/main-image-reiki-site.png"
					height={534}
					width={1100}
				/>
			</figure>
			<section className="flex flex-col gap-10 px-2">
				<h2 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
					Bienvenue sur <span className="italic">Les Racines de la Guérison !</span>
				</h2>
				{breakpointResponsiveValue < 1024 ? (
					<div className="flex flex-col gap-10 px-2">
						<p className="text-justify max-w-2xl mx-auto">
							Je suis ravi de vous accueillir sur ce site, dédié à un accompagnement
							basé sur l’écoute, le ressenti et la recherche de clarté intérieure. Je
							crois profondément en l’importance de prêter attention à son corps, à
							ses ressentis et à ses émotions pour mieux comprendre ce que nous
							traversons et poser des choix plus justes pour soi. Vous trouverez ici
							toutes les informations concernant mon approche, le déroulement des
							séances et la manière dont j’accompagne les personnes que je reçois. Je
							vous souhaite une agréable visite.
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
							Je suis ravi de vous accueillir sur ce site, dédié à un accompagnement
							basé sur l’écoute, le ressenti et la clarification intérieure. Je crois
							profondément en l’importance de prêter attention à son corps, à ses
							ressentis et à ses émotions pour mieux comprendre ce qui nous traverse
							et poser des choix plus justes pour soi. Vous trouverez ici toutes les
							informations nécessaires concernant mon approche, le déroulement des
							séances et la manière dont j’accompagne les personnes que je reçois. Je
							vous souhaite une agréable visite !
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
									opacity: "1",
									transition: ""
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
									opacity: "1"
								}
							: {
									opacity: "1",
									marginRight: "0px"
								}
					}
				>
					<p className="font-semibold italic text-center max-w-2xl mx-auto">
						"Plus profondes sont nos racines, plus justes sont nos pas, et plus notre
						chemin se révèle."
					</p>
				</ScrollAnimation>
			</section>
			<section className="flex flex-col gap-10">
				<BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					darkMode
					mainTitle="Vous traversez peut-être ..."
					textDatasArray={[
						{
							id: "physic-bloc",
							imgAlt: "icône d'un corps physique",
							imgSrc: "/icons/icon_body.svg",
							title: "Physique",
							content: [
								"- Une sensation de fatigue ou un manque d’énergie liée à une période intense ?",
								"- Des difficultés à ralentir ou à vraiment récupérer, même lorsque le corps en ressent le besoin ?",
								"- Des tensions ou une lourdeur corporelle, comme si le corps avait du mal à relâcher ?"
							],
							transitionType: "left"
						},
						{
							id: "mental-bloc",
							imgAlt: "icône d'un cerveau",
							imgSrc: "/icons/icon_brain.svg",
							title: "Mental",
							content: [
								"- Une impression de tourner en rond ou de ne plus savoir dans quelle direction avancer ?",
								"- Une perte de motivation ou de confiance, accompagnée d’un regard plus dur envers vous-même ?",
								"- Des questionnements persistants sur le sens, l’avenir ou les choix à faire ?"
							],
							transitionType: "center"
						},
						{
							id: "emotional-bloc",
							imgAlt: "icône d'un coeur",
							imgSrc: "/icons/icon_heart.svg",
							title: "Émotionnel",
							content: [
								"- Une sensibilité accrue, avec des émotions qui prennent plus de place que d’habitude ?",
								"- Une sensation de fatigue émotionnelle, de mélancolie ou de perte d’élan ?",
								"- Un sentiment de frustration ou d’injustice face à une situation qui semble ne pas évoluer ?"
							],
							transitionType: "right"
						}
					]}
				/>
				{/* <BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					pinkColor
					mainTitle="Le manque d'amour de soi"
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
				/> */}
				<BlocTextContent
					breakpointResponsiveValue={breakpointResponsiveValue}
					pinkColor
					mainTitle="Alors je peux vous aider !"
					textDatasArray={[
						{
							id: "values-bloc",
							imgAlt: "icône de mains jointes",
							imgSrc: "/icons/icon_hands-pink.svg",
							title: "Mon intention",
							content: [
								`Mon intention est d’offrir un espace d’écoute, de présence et de douceur, dans lequel chacun peut prendre le temps de se poser et de mieux comprendre ce qu’il traverse.
								Cet espace permet de ralentir, de retrouver de la clarté et de se reconnecter à ses propres ressentis, afin d’avancer plus justement, à son rythme.
								Les valeurs qui guident mon accompagnement sont l’écoute, le respect, la bienveillance et la simplicité.`
							],
							transitionType: "left"
						},
						{
							id: "tools-bloc",
							imgAlt: "icône d'une note de musique",
							imgSrc: "/icons/icon_music-pink.svg",
							title: "Mes outils",
							content: [
								`Les séances s’appuient sur différents outils : les cartes, le Reiki, la pleine conscience et le voyage sonore au Handpan.
								Ces pratiques sont utilisées comme des supports pour favoriser le relâchement, l’écoute intérieure et l’émergence de ce qui a besoin d’être compris ou clarifié pendant la séance.
								Elles ne constituent pas une méthode à suivre, mais des moyens d’accompagner chaque personne dans ce qu’elle traverse, à son propre rythme.`
							],
							transitionType: "center"
						},
						{
							id: "happiness-bloc",
							imgAlt: "icône d'un soleil",
							imgSrc: "/icons/icon_universe-pink.svg",
							title: "Votre chemin",
							content: [
								`Cet accompagnement a pour objectif d’offrir un espace pour ralentir et mieux comprendre ce que vous traversez.	
								En prenant le temps d’observer, de mettre des mots sur vos ressentis et d’identifier ce qui est réellement en jeu pour vous, un nouveau regard peut émerger
								À partir de ce regard, les choix deviennent plus justes, et le prochain pas sur votre chemin peut alors se dessiner plus naturellement.`
							],
							transitionType: "right"
						}
					]}
				>
					<ScrollAnimation
						id="redirectLinkSoinReiki"
						classContent="flex flex-col gap-2"
						styleBeforeTransition={
							breakpointResponsiveValue < 1024
								? {
										opacity: "1",
										transition: ""
									}
								: {
										opacity: "0",
										transition: "opacity 2.5s, margin-top 2.5s",
										marginTop: "100px"
									}
						}
						styleAfterTransition={
							breakpointResponsiveValue < 1024
								? {
										opacity: "1"
									}
								: {
										opacity: "1",
										marginTop: "0"
									}
						}
					>
						<h3 className="text-lg sm:text-xl text-center font-semibold italic mb-2 px-4">
							Vous souhaitez en savoir plus sur mon accompagnement ?
						</h3>
						<Link
							href="/deroulement-seance"
							className="flex actionLinkPink"
						>
							<span className="textActionLink">Déroulement d'une séance</span>
							<span className="iconActionLink" />
						</Link>
					</ScrollAnimation>
				</BlocTextContent>
			</section>

			<ScrollAnimation
				id="profil-picture-bloc"
				styleBeforeTransition={
					breakpointResponsiveValue < 1024
						? {
								opacity: "1",
								transition: ""
							}
						: {
								opacity: "0",
								transition: "opacity 2.5s, margin-top 2.5s",
								marginTop: "100px"
							}
				}
				styleAfterTransition={
					breakpointResponsiveValue < 1024
						? {
								opacity: "1"
							}
						: {
								opacity: "1",
								marginTop: "0"
							}
				}
			>
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
							className="hidden h-[450px] rounded-t-lg mr-0 ml-auto -scale-x-100 lg:block"
							alt="photo de profil de robin ponçon"
							src="/photo-profil.png"
							width={400}
							height={450}
						></Image>
						<div className="text-customWhite flex flex-col relative gap-6 rounded-lg p-5 text-center mx-auto max-w-lg bg-darkBackground lg:p-8 lg:text-start lg:-ml-10 lg:rounded-none lg:rounded-tr-lg">
							<h2 className="hidden titleFont font-semibold text-3xl italic text-pink lg:block">
								Mon Histoire
							</h2>
							<p>
								Je m’appelle Robin Ponçon, j’ai {age} et j’accompagne des personnes
								qui traversent des périodes de doute ou de transition dans leur vie.
								Mon chemin a commencé il y a plusieurs années, lors d’une période
								profondément introspective, marquée par une recherche de sens et de
								compréhension de ce que je vivais. C’est à ce moment que j’ai eu
								l'éveil du magnétisme de manière intuitive.
							</p>
							<p>
								Mon parcours m’a ensuite conduit vers le Reiki, une pratique
								énergétique japonaise que j’ai étudiée et approfondie au fil des
								années. Ces apprentissages ont constitué une base importante, mais
								c’est surtout l’expérience humaine, l’écoute et le chemin parcouru
								qui ont progressivement façonné ma manière d’accompagner
								aujourd’hui.
							</p>
							<p className="lg:hidden">
								Mon intention n’est pas de transformer ou de guérir à la place de
								l’autre, mais d’offrir un espace d’écoute et de présence permettant
								à chacun de mieux comprendre ce qu’il traverse et de retrouver sa
								propre capacité à avancer. Je peux éclairer certaines étapes du
								chemin, mais chacun reste libre de ses pas.
								<span className="block mt-6 italic">
									<Link
										href="/mon-histoire"
										className="actionLinkPink largeBtn hidden sm:flex"
									>
										<span className="textActionLink">
											En savoir plus sur mon histoire
										</span>
										<span className="iconActionLink" />
									</Link>
									<Link
										href="/mon-histoire"
										className="flex actionLinkPink xxsmallBtn sm:hidden"
									>
										<span className="textActionLink">En savoir plus</span>
										<span className="iconActionLink" />
									</Link>
								</span>
							</p>
						</div>
					</div>
					<p className="text-customWhite relative hidden bg-darkBackground p-6 w-[872px] rounded-b-lg mx-auto -mt-20 lg:block">
						Mon intention n’est pas de transformer ou de guérir à la place de l’autre,
						mais d’offrir un espace d’écoute et de présence permettant à chacun de mieux
						comprendre ce qu’il traverse et de retrouver sa propre capacité à avancer.
						Je peux éclairer certaines étapes du chemin, mais chacun reste libre de ses
						pas.
						<span className="block mt-5 italic">
							<Link
								href="/mon-histoire"
								className="flex actionLinkPink largeBtn"
							>
								<span className="textActionLink">
									En savoir plus sur mon histoire
								</span>
								<span className="iconActionLink" />
							</Link>
						</span>
					</p>
					<p></p>
				</section>
			</ScrollAnimation>
			<section className="flex flex-col gap-16 pb-10 px-4">
				<h2 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
					Ils ont essayé, pourquoi pas vous ?
				</h2>

				<ReviewsUsers reviewsUsers={reviewsUsers} />
			</section>
		</main>
	);
};

export default MainPage;
