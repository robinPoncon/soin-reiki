"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyStoryPage = () => {
	const [age, setAge] = useState<number>(0);
	const [spiritualityAge, setSpiritualityAge] = useState<number>(5);

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
		<section className="flex flex-col gap-20 py-20 px-4 lg:px-24">
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderPink p-4 md:text-4xl">
				Mon Histoire
			</h1>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Un premier pas dans le développement personnel
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
					<Image
						className="customImgPink mx-auto md:mx-0"
						alt="photo de robin ponçon souriant"
						src="/photo-profil2.jpeg"
						width={320}
						height={320}
						loading="eager"
					/>
					<p className="text-start max-w-xs my-auto mx-auto md:mx-0">
						Je m'appelle Robin Ponçon et j'ai {age} ans. Ma véritable aventure dans le
						développement personnel et la spiritualité a débuté il y a maintenant{" "}
						{spiritualityAge} ans, à la suite d'une rupture amoureuse. Aussi loin que je
						me souvienne j'ai toujours été face à un vide intérieur que je cherchais à
						combler de l'extérieur. Ce qui m'a enfermé dans de la dépendance affective.
						En quête de sens et d'un profond désir de changement, mon nouvel objectif
						était de comprendre et trouver l'essence de "l'Amour".
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Une rencontre d'âme et l'éveil de l'amour
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row-reverse">
					<Image
						className="customImgPink mx-auto md:mx-0"
						alt="photo d'un chat appelé Tommy"
						src="/photo-chat.png"
						width={320}
						height={320}
					/>
					<p className="text-justify max-w-xs my-auto mx-auto md:mx-0">
						Lui ? C'est Tommy ! Il est apparu dans une période de ma vie très sombre, où
						ma confiance et mon estime de moi étaient au plus bas. Je ne pense pas qu'il
						y ai de hasard dans la vie, car notre rencontre a fortement contribué dans
						ma quête de l'amour. Il m'a enseigné l'amour pur, un amour libre de
						conditions et d'attentes, l'Amour inconditionnel ! Malheureusement, le
						cancer est apparu comme obstacle. Et c'est lors d'une expérience de
						conscience modifiée, en désirant lui envoyé de l'amour, qu'une puissante
						vague d'énergie s'est manifesté en moi pour se diriger dans mes mains. Mon
						magnétisme s'était réveillé.
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Le Reiki et le bénévolat à l'hôpital
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
					<Image
						className="customImgPink mx-auto md:mx-0"
						alt="photo de robin ponçon souriant"
						src="/photo-reiki.png"
						width={320}
						height={320}
						loading="eager"
					/>
					<p className="text-start max-w-xs my-auto mx-auto md:mx-0">
						Mon chemin m'a naturellement conduit vers le Reiki, où je suis devenu maître
						praticien (niveau 3) auprès de Monique Chanoni de la lignée de Mikao Usui.
						J'ai eu l'opportunité d'intervenir auprès de l'association "sang mille
						couleurs" à l'hôpital pour apaiser les symptômes de patients atteints de
						cancer. C'est en voyant tous les bienfaits que j'ai pu apporté aux patients,
						que j'ai décidé de me lancer à mon compte pour aider un maximum de personne
						sur le chemin de la guérison !
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					La prise de conscience qui changea ma vie
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row-reverse">
					<Image
						className="customImgPink mx-auto md:mx-0"
						alt="photo d'un chat appelé Tommy"
						src="/photo-selflove.png"
						width={320}
						height={320}
					/>
					<p className="text-justify max-w-xs my-auto mx-auto md:mx-0">
						C'est en 2024, après 3 mois de formation avec la méthode Vibraction d'Hélène
						Pavot basée sur la pleine conscience, que j'ai compris pourquoi je m'étais
						incarné sur terre. Mon but de vie était de trouvé l'Amour, mais pas à
						l'extérieur de moi, mais bien à l'intérieur de moi. L'Amour de Soi était une
						évidence, comment peut-on remplir le verre des autres si notre propre
						caraffe est vide ? J'ai donc décidé de me spécialisé dans l'Amour de Soi,
						qui est pour moi la plus grande force de guérison que l'on puisse effectué
						dans sa vie sur le long terme !
					</p>
				</div>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Ma vision de l'avenir avec la musique
				</h2>
				<div className="flex flex-col justify-center gap-16 mt-10 md:flex-row">
					<Image
						className="customImgPink mx-auto md:mx-0"
						alt="photo de robin ponçon souriant"
						src="/photo-handpan-fille.png"
						width={320}
						height={320}
						loading="eager"
					/>
					<p className="text-start max-w-xs my-auto mx-auto md:mx-0">
						J'ai toujours été baigné dans la musique depuis mon enfance. Mais c'est à
						partir du moment où je me suis mis à jouer d'un instrument de musique, que
						j'ai vraiment pris conscience du potentiel thérapeutique des sons. Notre
						corps est composé à 65% d'eau, et l'eau transmet les vibrations du son. Je
						pense que dans le futur, la sonothérapie sera un des futurs pilliers de la
						médecine ! Si vous avez déjà été submergé d'émotions ou de bien-être par une
						musique, vous comprendrez ce que je veux dire !
					</p>
				</div>
			</article>
			{/* <article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Mes débuts dans la spiritualité
				</h2>
				<p>
					Je me présente, je suis Robin Ponçon, âgé de {age} ans. Depuis aussi longtemps
					que je me souvienne, j'ai toujours été fasciné par l'inexpliqué et le
					surnaturel. Mon esprit a toujours été ouvert, cependant, ma quête de vérité a
					toujours été ancrée dans la rationalité et le pragmatisme. Pour moi, la clé de
					la croyance réside dans sa propre expérience.
				</p>
				<p>
					J'ai navigué entre deux univers qui, en apparence, peuvent sembler opposés. D'un
					côté, la logique, la psychologie et le pragmatisme, de l'autre, la magie,
					l'empathie et la compassion. Dans tous mes projets, je n'ai jamais été béni de
					dons ou de talents innés. Chacune de mes réalisations a été le fruit de
					persévérance et d'efforts acharnés. À bien y réfléchir, peut-être était-ce mon
					moyen de prouver que quiconque, avec détermination, peut devenir une source
					d'inspiration, tout en restant humble, bien entendu.
				</p>
				<p>
					Ma véritable aventure dans le développement personnel et la spiritualité a
					débuté il y a maintenant {spiritualityAge} ans, à la suite d'une rupture
					sentimentale. Mon objectif était de comprendre l'essence de "l'Amour".
				</p>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					L'éveil de mes dons
				</h2>
				<p>
					Au fil de mes expériences, j'ai réalisé que l'amour peut revêtir de nombreuses
					formes, que ce soit l'amour familial, relationnel, ou l'amour envers nos
					précieux animaux de compagnie. Cependant, la forme d'amour la plus cruciale est
					l'amour de soi. Comment pourrions-nous remplir le verre d'une autre personne si
					notre propre carafe est vide ?
				</p>
				<p>
					Un tournant majeur dans ma vie s'est produit lorsque mon cher chat a été
					diagnostiqué d'un cancer généralisé, avec seulement quelques semaines à vivre.
					Pour moi, il était bien plus qu'un simple animal de compagnie, il était comme un
					fils (je suis sûr que ceux qui ont partagé leur vie avec des animaux
					comprendront ce lien spécial). Face à ma détresse et fort de plusieurs mois de
					pratique du magnétisme, j'ai décidé de consacrer une journée entière à la
					méditation et à un voyage intérieur.
				</p>
				<p>
					Soudain, en écoutant une mélodie sur le thème de l'amour, j'ai ressenti une
					énergie incroyablement puissante et chaleureuse se concentrer dans mes mains.
					J'ai pu diriger cette énergie vers mon chat, qui l'a généreusement acceptée.
					Bien que je n'aie malheureusement pas pu le sauver, il a défié les pronostics du
					vétérinaire en vivant plusieurs mois de plus. Cette expérience a été le point de
					départ de mon désir de développer cette capacité pour la mettre au service des
					autres.
				</p>
				<p>
					Mon chemin m'a naturellement conduit vers le Reiki, une méthode parallèle au
					magnétisme, mais avec une approche différente. Contrairement au magnétisme, où
					j'utilisais ma propre énergie, le Reiki me permet de canaliser l'énergie qui
					existe partout autour de nous. J'ai franchi les trois niveaux du Reiki sous la
					guidance de Monique Chanoni, maître Reiki de la lignée de Mikao Usui. Je suis
					maintenant un praticien certifié de cette discipline, bien que pour l'instant,
					je ne sois pas habilité à initier d'autres personnes au Reiki en tant que maître
					enseignant.
				</p>
				<p>
					En parallèle, j'ai toujours été attiré par les jeux de cartes sous diverses
					formes, et ma curiosité m'a naturellement conduit vers les tarots et les
					oracles. Pour renforcer ma compréhension de l'interprétation symbolique des
					cartes, j'ai entrepris diverses formations. J'ai rapidement réalisé que la clé
					résidait dans la confiance en son intuition.
				</p>
				<p>
					Au départ, je n'avais aucune capacité médiumnique, mais avec une pratique
					régulière, et en apprenant à lâcher prise, j'ai commencé à développer des
					capacités que je n'aurais jamais cru possibles. Cette évolution m'emplit de
					joie, car elle me permet de guider plus efficacement les personnes qui font
					appel à moi pour une séance de tirage. Mon intuition s'est ainsi transformée en
					un outil puissant pour apporter des éclaircissements et du réconfort à ceux qui
					me font confiance.
				</p>
			</article>
			<article>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					La Musicothérapie au service du bien-être
				</h2>
				<p>
					Depuis ma plus tendre enfance, la musique a été une composante constante de ma
					vie, en grande partie grâce à mon père musicien. Cependant, je n'ai jamais
					semblé avoir d'affinité particulière avec la musique, que ce soit sur le plan
					technique, auditif ou rythmique. J'ai essayé de nombreux instruments sans
					réussir à développer un intérêt durable.
				</p>
				<p>
					Pourtant, la musique a toujours eu une place centrale dans mon existence, et je
					suis fermement convaincu de son pouvoir exceptionnel. Elle a la capacité de
					rassembler les gens, de communiquer des émotions profondes, et même de
					contribuer à la guérison. C'est précisément ce dernier aspect qui a suscité ma
					curiosité.
				</p>
				<p>
					Depuis maintenant un an, je me suis tourné vers le Handpan, un instrument
					ludique qui se joue intuitivement avec les doigts, une caractéristique qui a
					parfaitement coïncidé avec ma vocation dans la guérison par les mains. Mon
					objectif est de créer des compositions musicales qui accompagneront mes séances
					de soins énergétiques, renforçant ainsi leur dimension thérapeutique et
					établissant une connexion plus profonde entre vous et moi.
				</p>
				<p>
					En parallèle, je prévois de lancer une chaîne YouTube dédiée à la diffusion de
					mes créations. J'aborderai différents thèmes tels que les chakras, la
					méditation, la détente, la libération des blocages émotionnels, et bien d'autres
					encore. J'ai hâte de partager ces expériences avec vous dans un avenir proche !
				</p>
			</article> */}
		</section>
	);
};

export default MyStoryPage;
