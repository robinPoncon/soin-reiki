import Image from "next/image";

const MainPage = () => {
	return (
		<main>
			<figure className="-mt-20">
				<Image
					alt="main image of the site with a tree and energy"
					src="/main-site-image.png"
					height={758}
					width={1556}
					layout="responsive"
				/>
			</figure>
			<section>
				<h1>Bienvenue dans l'univers du Reiki !</h1>
				<article>
					<h2 className="text-3xl">Qu'est-ce que le Reiki ?</h2>
					<div>
						<div>
							<h3>Une énergie universelle</h3>
							<p>
								Le Reiki est l'énergie de vie qui englobe toute la matière au sein
								de notre univers. Elle est partout autour de nous, et mon travail
								est de la canaliser pour la diffuser en vous. Vous apportant calme,
								sérénité, lâcher prise et bien être !
							</p>
						</div>
						<div>
							<h3>Un toucher thérapeutique</h3>
							<p>
								L'utilisation du Reiki se fait par apposition des mains sur
								différentes parties du corps. Elles peuvent être posé délicatement
								ou être à 5/10cm au dessus du corps. Il n'y a aucune manipulation ce
								qui en fait une méthode de soin très douce et agréable !
							</p>
						</div>
						<div>
							<h3>Une harmonisation énergétique</h3>
							<p>
								Durant un soin, l'énergie va circuler dans certaines parties du
								corps au travers des méridiens et des chakras. Cette harmonisation
								apporte un rééquilibre au niveau des pensées, des émotions et du
								corps physique. C'est un moment de reconnexion avec soi !
							</p>
						</div>
					</div>
				</article>
				<article>
					<h2 className="text-3xl">Origine du Reiki</h2>
					<div>
						<div>
							<h3>Des racines japonaises</h3>
							<p>
								Le Reiki a été découvert par Mikao Usui, un érudit et guérisseur
								japonais du XIXe siècle lors d'une retraite introspective de 21
								jours sur le Mont Kurama. Cette expérience transpersonnelle lui a
								transmis les enseignements et techniques du Reiki que nous
								connaissons aujourd'hui.
							</p>
						</div>
						<div>
							<h3>Ses principes et sa philosophie</h3>
							<p>
								Le Reiki repose sur cinq principes essentiels, appelés les "Cinq
								Préceptes du Reiki". Ils guident les praticiens vers l'harmonie
								intérieure et le bien-être en promouvant des valeurs telles que la
								bienveillance, la gratitude et la paix intérieure. Cette
								philosophie, ancrée dans la simplicité et la sagesse, encourage
								chacun à cultiver une connexion profonde avec soi-même et avec
								l'énergie qui nous entoure.
							</p>
						</div>
						<div>
							<h3>Un Développement mondial</h3>
							<p>
								Depuis ses modestes débuts au Japon, le Reiki a transcendé les
								frontières pour devenir une pratique mondiale de guérison et de
								bien-être. Son attrait universel réside dans sa simplicité et son
								efficacité. Au fil des décennies, diverses écoles et approches ont
								émergé, reflétant la diversité culturelle et les besoins
								individuels. Le Reiki ne vise pas à se substituer de la médecine,
								mais plutôt à agir en complémentarité avec elle !
							</p>
						</div>
					</div>
				</article>
				<article>
					<h2 className="text-3xl">Les bienfaits du Reiki</h2>
					<div>
						<div>
							<h3>Équilibre mental et sérénité</h3>
							<p>
								Le Reiki, de par sa nature apaisante, ouvre la voie à une relaxation
								profonde, offrant ainsi un précieux moyen de diminuer le stress et
								l'anxiété. En encourageant un lâcher-prise mental, il permet
								d'atteindre une clarté mentale qui renforce à la fois la
								concentration et l'estime de soi. Grâce à cette harmonie retrouvée,
								le Reiki offre un refuge de calme au cœur du tumulte quotidien.
							</p>
						</div>
						<div>
							<h3>Apaisement émotionnel profond</h3>
							<p>
								Le Reiki offre bien plus qu'une simple relaxation physique. Il
								travaille également en profondeur pour apaiser les émotions
								tourmentées, libérant ainsi les blocages qui entravent le bien-être
								émotionnel. Cette libération émotionnelle peut vous offrir
								l'opportunité de pratiquer le pardon et de vous reconnecter
								profondément à vous-même.
							</p>
						</div>
						<div>
							<h3>Renforcement de la vitalité</h3>
							<p>
								Le Reiki, de par sa nature énergétique, revitalise le corps et
								l'esprit. En stimulant la circulation énergétique, il renforce la
								vitalité, régénère le corps et favorise un sentiment de vigueur
								renouvelée. Cette vitalité stimule la vitesse de guérison en
								dynamisant l'ensemble du système immunitaire. Cette énergie nouvelle
								se traduit par une qualité de vie améliorée.
							</p>
						</div>
					</div>
				</article>
			</section>
			<section>
				<h2>Mon histoire</h2>
			</section>
			<section>
				<h2>Ils ont essayé, alors pourquoi pas vous ?</h2>
			</section>
		</main>
	);
};

export default MainPage;
