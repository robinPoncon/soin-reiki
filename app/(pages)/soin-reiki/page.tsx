import Link from "next/link";

const SoinReikiPage = () => {
	return (
		<section className="mt-40 px-24">
			<h1 className="text-3xl mb-12">
				Comment se passe concrètement un{" "}
				<strong className="italic text-blueGreen">Soin Reiki</strong> avec moi ?
			</h1>
			<article>
				<h2 className="text-2xl">Étape 1 : Préparation Bienveillante</h2>
				<p className="text-justify">
					Dès le début, nous prenons le temps de discuter de vos intentions et des
					bienfaits que vous recherchez à travers les séances de soin. Je partage ensuite
					mes connaissances et mon expérience en Reiki, afin que nous puissions trouver
					des solutions durables à vos besoins. De plus, je vous propose une guidance
					énergétique à travers le tirage d'une carte, pour vous guider un peu plus loin
					sur le chemin de la guérison.
				</p>
			</article>
			<article>
				<h2 className="text-2xl">Étape 2 : L'Harmonie Énergétique </h2>
				<p className="text-justify">
					Pendant le soin, vous restez confortablement vêtu(e) allongé(e) sur une table de
					massage standard. L'objectif est que vous soyez à l'aise, et j'accompagne cela
					avec une douce musique apaisante. Je commence alors le soin en plaçant
					délicatement mes mains sur les zones de votre corps nécessitant un rééquilibrage
					énergétique. Pendant cette étape, des sensations telles que chaleur, fraîcheur,
					picotements, émotions, images, sons ou pensées peuvent se manifester. Tout cela
					est normal et fait parti du processus naturel de la circulation de l'énergie en
					vous.
				</p>
			</article>
			<article>
				<h2 className="text-2xl">Étape 3 : Intégration et Planification </h2>
				<p className="text-justify">
					Une fois le soin achevé, nous prenons le temps de partager nos impressions sur
					l'expérience vécue. En fonction de vos ressentis et de vos besoins, nous
					planifions d'autres séances si nécessaire. Généralement, pour des résultats
					concluants, il est recommandé de prévoir 2 à 3 séances espacées d'une à deux
					semaines. Dans les jours qui suivent le soin, hydratez-vous davantage pour
					favoriser la purification et l'élimination des toxines énergétiques.
				</p>
			</article>
			<section>
				<h2 className="text-2xl">Prenez Contact pour en Savoir Plus</h2>
				<p className="text-justify">
					Si vous désirez en savoir davantage sur les bienfaits du Reiki ou pour toute
					autre information, n'hésitez pas à me laisser un message{" "}
					<Link
						className="text-blueGreen font-bold"
						href="/contact"
					>
						Ici
					</Link>
					. Je serai ravi de vous répondre et de vous accompagner dans votre quête de
					bien-être.
				</p>
			</section>
		</section>
	);
};

export default SoinReikiPage;
