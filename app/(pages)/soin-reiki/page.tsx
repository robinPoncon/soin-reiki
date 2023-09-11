import Image from "next/image";
import Link from "next/link";
import "./page.scss";

const SoinReikiPage = () => {
	return (
		<section className="soinReikiPageComponent">
			<h1 className="text-4xl mx-auto w-fit customBorderBlue p-4">
				Déroulement d'un soin reiki
			</h1>
			<article>
				<h2 className="text-2xl text-center font-semibold italic">
					Étape 1 : Une Préparation Bienveillante
				</h2>
				<div className="flex justify-center gap-10 mt-5">
					<Image
						className="customImg"
						alt="illustration of discussion between two people"
						src="/illustrations/illustration_discussion.png"
						width={320}
						height={320}
					/>
					<p className="text-justify max-w-xs my-auto">
						Dès le début, nous prenons le temps de discuter de vos intentions et des
						bienfaits que vous recherchez à travers les séances de soin. Je partage
						ensuite mes connaissances et mon expérience en Reiki, afin que nous
						puissions trouver des solutions durables à vos besoins. De plus, je vous
						propose une guidance énergétique à travers le tirage d'une carte, pour vous
						guider un peu plus loin sur le chemin de la guérison.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-2xl text-center font-semibold italic">
					Étape 2 : L'Harmonie Énergétique{" "}
				</h2>
				<div className="flex justify-center gap-10 mt-5">
					<p className="text-justify max-w-xs my-auto">
						Pendant le soin, vous restez confortablement vêtu(e) allongé(e) sur une
						table de massage standard. L'objectif est que vous soyez à l'aise, et
						j'accompagne cela avec une douce musique apaisante. Je commence alors le
						soin en plaçant délicatement mes mains sur les zones de votre corps
						nécessitant un rééquilibrage énergétique. Pendant cette étape, des
						sensations telles que chaleur, fraîcheur, picotements, émotions, images,
						sons ou pensées peuvent se manifester. Tout cela est normal et fait parti du
						processus naturel de la circulation de l'énergie en vous.
					</p>
					<Image
						className="customImg"
						alt="illustration of discussion between two people"
						src="/illustrations/illustration_energetic-heal.png"
						width={320}
						height={320}
					/>
				</div>
			</article>
			<article>
				<h2 className="text-2xl text-center font-semibold italic">
					Étape 3 : Intégration et Planification{" "}
				</h2>
				<div className="flex justify-center gap-10 mt-5">
					<Image
						className="customImg"
						alt="illustration of discussion between two people"
						src="/illustrations/illustration_calendar.png"
						width={320}
						height={320}
					/>
					<p className="text-justify max-w-xs my-auto">
						Une fois le soin achevé, nous prenons le temps de partager nos impressions
						sur l'expérience vécue. En fonction de vos ressentis et de vos besoins, nous
						planifions d'autres séances si nécessaire. Généralement, pour des résultats
						concluants, il est recommandé de prévoir 2 à 3 séances espacées d'une à deux
						semaines. Dans les jours qui suivent le soin, hydratez-vous davantage pour
						favoriser la purification et l'élimination des toxines énergétiques.
					</p>
				</div>
			</article>
			<section className="mx-auto max-w-2xl">
				<h2 className="text-2xl text-center font-semibold italic">Pour aller plus loin</h2>
				<p className="text-center mt-5">
					Envie de tenter l'expérience ?{" "}
					<Link
						className="redirectLink"
						href="/reservation"
					>
						Je réserve ma séance
					</Link>
				</p>

				<p className="text-center mt-5">
					Si vous désirez en savoir davantage sur les bienfaits du Reiki ou pour toute
					autre information, n'hésitez pas à me laisser un message via la{" "}
					<Link
						className="redirectLink"
						href="/contact"
					>
						page de contact
					</Link>
					.
				</p>
			</section>
		</section>
	);
};

export default SoinReikiPage;
