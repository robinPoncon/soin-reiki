import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Déroulement d'une Guidance en Tirage de Cartes",
	description:
		"Découvrez mes services de guidance en tirage de cartes conçus pour vous accompagner dans la réponse à vos questions. Possibilité d'y faire à distance !",
	keywords: [
		"guidance",
		"tirage de cartes",
		"présentiel",
		"distance",
		"spiritualité",
		"développement personnel",
		"guérison",
		"énergétique"
	]
};

const GuidancePage = () => {
	return (
		<section className="flex flex-col gap-20 py-20 px-4 lg:px-24">
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderYellow p-4 md:text-4xl">
				Déroulement d'une guidance
			</h1>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					En présentiel
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
					<Image
						className="customImgYellow max-h-80 my-auto mx-auto md:mx-0"
						alt="illustration d'une discussion entre deux personnes"
						src="/illustrations/illustration_consultation.png"
						width={320}
						height={320}
					/>
					<p className="text-start max-w-xs my-auto mx-auto md:mx-0 sm:max-w-sm">
						Notre séance débute par un échange afin de définir ensemble la question qui
						sera soumise pour la guidance. Ensuite je vous tirerai au minimum 5 cartes
						de tarot qui serviront de structure principale, que j'accompagnerai par des
						oracles selon les ressentis du moment. Mon approche se caractérise par une
						interprétation intuitive des cartes, dans laquelle je vous ferai part de mes
						observations et de mes analyses personnelles. De plus, je vous fournirai une
						lecture des significations de certaines cartes, afin d'approfondir leur
						compréhension. Enfin, je vous adresserai par courrier électronique un compte
						rendu détaillé et complet du tirage, accompagné d'une photographie du tirage
						réalisé.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">À distance</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row-reverse">
					<Image
						className="customImgYellow max-h-80 my-auto mx-auto md:mx-0"
						alt="illustration d'un homme qui tire les oracles"
						src="/illustrations/illustration_man-solo-with-card.png"
						width={320}
						height={320}
					/>
					<p className="text-justify max-w-xs my-auto mx-auto md:mx-0 sm:max-w-sm">
						Tout d'abord, notre processus démarre par un échange par courrier
						électronique par sms ou par appel, afin de définir votre question et de la
						formuler pour le tirage de cartes. Une fois que la question est clairement
						définie, nous convenons ensemble d'une date qui vous convient. Ensuite, vous
						avez la possibilité de régler la consultation de plusieurs manières,
						notamment par PayPal, Lydia ou par virement bancaire traditionnel. Une fois
						que votre paiement est réceptionné, je me connecte à mon intuition pour vous
						offrir une guidance optimale. Une fois la séance de tirage de cartes
						terminée, je vous envoie un lien privé vers une vidéo YouTube, vous
						permettant ainsi de la visionner à votre convenance, autant de fois que vous
						le souhaitez.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Important à savoir avant une guidance
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
					<Image
						className="customImgYellow max-h-80 my-auto mx-auto md:mx-0"
						alt="illustration d'une carte de tarot avec une étoile"
						src="/illustrations/illustration_oracle.png"
						width={320}
						height={320}
					/>
					<p className="text-start max-w-xs my-auto mx-auto md:mx-0 sm:max-w-sm">
						Ma conception des séances de tirage de cartes ou de guidance repose
						essentiellement sur le développement personnel. Mon objectif premier
						consiste à vous orienter de la meilleure manière possible vers votre propre
						vérité et votre processus de guérison. Il est essentiel de garder à l'esprit
						que nous sommes les artisans de notre propre destinée, et que nos choix
						peuvent influencer le cours des événements. Il est important de noter que la
						guidance par le biais d'un tirage de cartes n'est pas une science exacte, ce
						qui signifie que les conseils que je peux vous offrir ne sont pas gravés
						dans le marbre en ce qui concerne le temps. Néanmoins, les conseils obtenus,
						ainsi que les moments de réflexion et de prise de conscience qui en
						découlent, eux, sont tout à fait réels et bénéfiques pour votre cheminement
						personnel.
					</p>
				</div>
			</article>
			<article className="mx-auto max-w-xs md:max-w-xl">
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Pour aller plus loin
				</h2>
				<p className="text-center mt-5">
					Besoin d'informations sur les prix ?{" "}
					<Link
						className="redirectLinkYellow whitespace-nowrap"
						href="/tarifs"
					>
						Je consulte les tarifs.
					</Link>
				</p>
				<p className="text-center mt-5">
					Envie de tenter l'expérience ?{" "}
					<Link
						className="redirectLinkYellow whitespace-nowrap"
						href="/reservation"
					>
						Je réserve ma séance.
					</Link>
				</p>

				<p className="text-center mt-5">
					Si vous désirez en savoir davantage sur les guidances en tirage de cartes ou
					pour toute autre information, n'hésitez pas à me laisser un message via la{" "}
					<Link
						className="redirectLinkYellow"
						href="/contact"
					>
						page de contact.
					</Link>
				</p>
			</article>
		</section>
	);
};

export default GuidancePage;
