import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Connexion à Votre Espace Client (à venir)",
	description:
		"Nouvelle fonctionnalité à venir, qui vous permettra d'avoir un suivi de votre évolution au fil des séances, de la gestion des rendez-vous et bien plus !",
	keywords: [
		"connexion",
		"fonctionnalité",
		"séances",
		"rendez-vous",
		"évolution",
		"bien-être",
		"énergétique"
	]
};

const LoginPage = () => {
	return (
		<section className="flex flex-col gap-12 py-20 px-2 lg:px-24">
			<h1 className="titleFont text-center font-semibold text-2xl md:text-4xl mx-auto w-fit customBorderPink p-4">
				Nouvelle fonctionnalité à venir !
			</h1>
			<div className="flex flex-col mx-auto md:flex-row justify-center gap-12">
				<Image
					className="customImgPink"
					alt="illustration d'un tableau de bord"
					src="/illustrations/illustration_dashboard.png"
					width={320}
					height={320}
				/>
				<p className="text-justify mx-auto my-auto max-w-xs px-2 sm:px-0 sm:text-base lg:max-w-sm">
					Bientôt, je vais intégrer un tableau de bord de suivi sur le site. Cette
					fonctionnalité vous permettra, entre autres, de suivre de près votre progression
					au fil de nos séances, de consulter votre planning avec les rendez-vous déjà
					planifiés ainsi que ceux à venir. De plus, vous aurez accès aux informations des
					guidances par tirage de cartes déjà réalisées. Vous pourrez également relire les
					notes que j'ai prises lors de nos échanges, et même ajouter vos propres
					observations et notes pour suivre l'évolution de votre cheminement vers la
					guérison et le bien-être.
				</p>
			</div>
		</section>
	);
};

export default LoginPage;
