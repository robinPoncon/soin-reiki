import Image from "next/image";

const LoginPage = () => {
	return (
		<section className="flex flex-col gap-12 py-20 px-24">
			<h1 className="text-4xl mx-auto w-fit customBorderPink p-4">
				Nouvelle fonctionnalité à venir !
			</h1>
			<div className="flex justify-center gap-12">
				<Image
					className="customImgPink"
					alt="illustration d'un tableau de bord"
					src="/illustrations/illustration_dashboard.png"
					width={320}
					height={320}
				/>
				<p className="max-w-sm my-auto text-justify">
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
