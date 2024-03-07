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
		<main className="flex flex-col gap-20">
			<figure className="bg-blackBackground sm:-mt-5 md:-mt-10 lg:-mt-20">
				<Image
					className="mx-auto"
					loading="eager"
					alt="image principal du site avec un arbre et des boules d'énergie"
					src="/main-image-reiki-site.png"
					height={550}
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
							Je suis ravi de vous accueillir sur mon site internet dédié au bien-être
							et à la guérison grâce à l'Amour de Soi. Je crois profondément en
							l'importance d'être à l'écoute de son corps, de son esprit et de ses
							émotions pour atteindre un épanouissement complet dans tous les domaines
							de sa vie. Vous trouverez toutes les informations nécessaires sur mes
							services, le déroulé des séances et ma vision du soin énergétique. Je
							vous souhaite une agréable visite !
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
							Je suis ravi de vous accueillir sur mon site internet dédié au bien-être
							et à la guérison grâce à l'Amour de Soi. Je crois profondément en
							l'importance d'être à l'écoute de son corps, de son esprit et de ses
							émotions pour atteindre un épanouissement complet dans tous les domaines
							de sa vie. Vous trouverez toutes les informations nécessaires sur mes
							services, le déroulé des séances et ma vision du soin énergétique. Je
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
								"- Ressentez-vous souvent des tensions musculaires, surtout au niveau du dos ?",
								"- Avez-vous des problèmes de sommeil, comme l'insomnie ou des réveils fréquents ?",
								"- Éprouvez-vous fréquemment des maux de tête sans cause médicale évidente ?"
							],
							transitionType: "left"
						},
						{
							id: "mental-bloc",
							imgAlt: "icône d'un cerveau",
							imgSrc: "/icons/icon_brain.svg",
							title: "Mental",
							content: [
								"- Est-ce que des pensées négatives perturbent votre capacité d'attention ?",
								"- Ressentez-vous fréquemment une fatigue mentale, même après avoir bien dormi ?",
								"- Êtes-vous souvent submergé par le stress, l'anxiété, la panique ou la dépression ?"
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
								"- Éprouvez-vous de la tristesse ou une sensation de vide, sans raison apparente ?"
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
							title: "Mes valeurs",
							content: [
								`Mon objectif est de créer un espace de confiance et de relaxation, où vous
								vous sentirez en sécurité pour lâcher prise. C'est cet environnement de douceur
								qui favorise la reconnexion avec votre cœur. Et c'est cette reconnexion qui vous guide
								sur la voie de la guérison. Mes valeurs profondes sont l'écoute, la bienveillance, 
								la compassion et le respect.`
							],
							transitionType: "left"
						},
						{
							id: "tools-bloc",
							imgAlt: "icône d'une note de musique",
							imgSrc: "/icons/icon_music-pink.svg",
							title: "Mes services",
							content: [
								`Mon approche thérapeutique combine la guidance des cartes pour identifier
								la source de votre problématique, le Reiki pour favoriser la relaxation de votre corps,
								des exercices de pleine conscience pour libérer vos blocages émotionnels, et de la 
								musique apaisante accompagnée de mes propres compositions au Handpan pour enrichir 
								votre expérience thérapeutique.`
							],
							transitionType: "center"
						},
						{
							id: "happiness-bloc",
							imgAlt: "icône d'un soleil",
							imgSrc: "/icons/icon_universe-pink.svg",
							title: "Votre bonheur",
							content: [
								`La quête de la guérison est, en fin de compte, une recherche du bonheur. En surmontant
								vos blocages, vous retrouverez votre liberté, votre légèreté et votre confiance en vous.
								Mon accompagnement vise à vous ramener vers le véritable amour : l'Amour de Soi. Car 
								sans cet amour envers vous-même, comment pouvez-vous aimer les autres ?`
							],
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
							Vous souhaitez en savoir plus sur mon accompagnement ?
						</h3>
						<Link
							href="/deroulement-seance"
							className="actionLinkPink"
						>
							<span className="textActionLink">Déroulement d'une séance</span>
							<span className="iconActionLink" />
						</Link>
					</ScrollAnimation>
				</BlocTextContent>
			</section>

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
								Je m'appelle Robin Ponçon et j'ai {age} ans. Tout a débuté lors
								d'une période introspective en quête de spiritualité il y a{" "}
								{spiritualityAge} ans. En développant le magnétisme de mes mains,
								j'ai cherché à apaiser les symptômes du cancer de mon chat. Cette
								expérience a éveillé en moi la volonté d'approfondir cette capacité
								pour aider autrui.
							</p>
							<p>
								Mon parcours m'a guidé naturellement vers le Reiki, une méthode
								énergétique qui s'apparente au magnétisme, bien qu'elle adopte une
								approche différente. Dans ma pratique, je ne me sers plus uniquement
								de mon énergie personnelle pour guérir, mais je canalise plutôt
								l'énergie omniprésente qui nous entoure. J'ai eu l'opportunité
								d'explorer les trois niveaux du Reiki sous la tutelle de Monique
								Chanoni, une maître Reiki établie dans la lignée de Mikao Usui.
								Aujourd'hui, je suis certifié en tant que maître praticien dans
								cette discipline.
							</p>
							<p className="lg:hidden">
								Je suis convaincu que la guérison ne peut se produire qu'avec votre
								volonté consciente ou inconsciente. Mon objectif est de vous fournir
								les outils et le soutien nécessaire pour une véritable
								transformation, afin que vous puissiez devenir autonome à long
								terme. Bien que cela puisse sembler idéaliste, je crois fermement
								qu'en guidant chacun vers son équilibre et son épanouissement, nous
								pouvons contribuer à façonner un monde et un avenir meilleurs pour
								tous.
								<span className="block mt-6 italic">
									<Link
										href="/mon-histoire"
										className="actionLinkPink largeBtn"
									>
										<span className="textActionLink">
											En savoir plus sur mon histoire
										</span>
										<span className="iconActionLink" />
									</Link>
								</span>
							</p>
						</div>
					</div>
					<p className=" text-customWhite relative hidden bg-darkBackground p-6 w-[872px] rounded-b-lg mx-auto -mt-20 lg:block">
						Je suis convaincu que la guérison ne peut se produire qu'avec votre volonté
						consciente ou inconsciente. Mon objectif est de vous fournir les outils et
						le soutien nécessaire pour une véritable transformation, afin que vous
						puissiez devenir autonome à long terme. Bien que cela puisse sembler
						idéaliste, je crois fermement qu'en guidant chacun vers son équilibre et son
						épanouissement, nous pouvons contribuer à façonner un monde et un avenir
						meilleurs pour tous. <br />
						<span className="block italic">
							<Link
								href="/mon-histoire"
								className="actionLinkPink largeBtn"
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
