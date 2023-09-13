import Image from "next/image";
import Link from "next/link";

const GuidancePage = () => {
	return (
		<section className="flex flex-col gap-24 py-20 px-24">
			<h1 className="text-4xl mx-auto w-fit customBorderYellow p-4">
				Déroulement d'une guidance
			</h1>
			<article>
				<h2 className="text-2xl text-center font-semibold italic">En présentiel</h2>
				<div className="flex justify-center gap-10 mt-10">
					<Image
						className="customImgYellow max-h-80 my-auto"
						alt="illustration of discussion between two people"
						src="/illustrations/illustration_consultation.png"
						width={320}
						height={320}
					/>
					<p className="text-justify max-w-sm my-auto">
						Notre séance débute par un échange afin de définir ensemble la question qui
						sera soumise pour la guidance. Ensuite je vous tirerai au minimum 5 cartes
						de tarot qui serviront de structure principal, que j'accompagnerai par des
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
				<h2 className="text-2xl text-center font-semibold italic">À distance</h2>
				<div className="flex justify-center gap-10 mt-10">
					<p className="text-justify max-w-sm my-auto">
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
					<Image
						className="customImgYellow max-h-80 my-auto"
						alt="illustration of discussion between two people"
						src="/illustrations/illustration_man-solo-with-card.png"
						width={320}
						height={320}
					/>
				</div>
			</article>
			<article>
				<h2 className="text-2xl text-center font-semibold italic">
					Important à savoir avant une guidance
				</h2>
				<div className="flex justify-center gap-10 mt-10">
					<Image
						className="customImgYellow max-h-80 my-auto"
						alt="illustration of discussion between two people"
						src="/illustrations/illustration_oracle.png"
						width={320}
						height={320}
					/>
					<p className="text-justify max-w-sm my-auto">
						Ma conception des séances de tirage de cartes ou de guidance repose
						essentiellement sur le développement personnel. Mon objectif premier
						consiste à vous orienter de la meilleure manière possible vers votre propre
						vérité et votre processus de guérison. Il est essentiel de garder à l'esprit
						que nous sommes les artisans de notre propre destinée, et que nos choix
						peuvent influencer le cours des événements. Il est important de noter que la
						guidance par le biais d'un tirage de cartes n'est pas une science exacte, ce
						qui signifie que les conseils que je peux vous offrir ne sont pas gravés
						dans la pierre en ce qui concerne le temps. Néanmoins, les conseils obtenus,
						ainsi que les moments de réflexion et de prise de conscience qui en
						découlent, eux, sont tout à fait réels et bénéfiques pour votre cheminement
						personnel.
					</p>
				</div>
			</article>
			<article className="mx-auto max-w-2xl">
				<h2 className="text-2xl text-center font-semibold italic">Pour aller plus loin</h2>
				<p className="text-center mt-10">
					Envie de tenter l'expérience ?{" "}
					<Link
						className="redirectLinkYellow"
						href="/reservation"
					>
						Je réserve ma séance.
					</Link>
				</p>

				<p className="text-center mt-10">
					Si vous désirez en savoir davantage sur les guidances en tirage de carte ou pour
					toute autre information, n'hésitez pas à me laisser un message via la{" "}
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
