import "./globals.scss";
import type { Metadata } from "next";
import HeaderMenu from "./_components/HeaderMenu/HeaderMenu";
import { FlashMessagesProvider } from "./_context/FlashMessagesContext";
import { LoaderProvider } from "./_context/LoaderContext";
import Footer from "./_components/Footer/Footer";
import { ReviewsUsersDataProvider } from "./_context/ReviewsUsersDataContext";
import CookieBar from "./_components/CookieBar/CookieBar";
import { handleeFont } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
	metadataBase: new URL("https://racines-guerison.com"),
	title: "Les Racines de la Guérison - Accompagnement Énergétique Bordeaux",
	description:
		"Je vous accompagne pour apprivoiser vos pensées, vous reconnecter à votre corps et à vos émotions grâce à l'Amour de Soi, afin de retrouver votre Bonheur !",
	keywords: [
		"soin",
		"soin reiki",
		"amour de soi",
		"guérison",
		"tirage de carte",
		"thérapeute énergétique",
		"spiritualité",
		"bien-être",
		"transformation",
		"voyage sonore",
		"pleine conscience",
		"guidance",
		"bordeaux",
		"stress",
		"anxiété",
		"insomnie",
		"angoisse",
		"dépression",
		"émotions",
		"tristesse",
		"maux de tête",
		"mal de dos",
		"thérapeute énergétique",
		"bonheur",
		"épanouissement",
		"musique apaisante",
		"relaxation",
		"lâcher prise",
		"compassion"
	],
	openGraph: {
		title: "Les Racines de la Guérison - Accompagnement Énergétique Bordeaux",
		description:
			"Je vous accompagne pour apprivoiser vos pensées, vous reconnecter à votre corps et à vos émotions grâce à l'Amour de Soi, afin de retrouver votre Bonheur !",
		images: [
			{
				url: "/photo-couverture-site.png",
				alt: "image de couverture représentant le site internet"
			}
		]
	},
	robots: "all"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<Script>
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-TPNK5DLH');`}
			</Script>

			<body
				className={`font-helvetica font-normal pt-20 bg-customWhite text-darkTurquoise ${handleeFont.variable}`}
			>
				<FlashMessagesProvider>
					<LoaderProvider>
						<ReviewsUsersDataProvider>
							<HeaderMenu />
							{children}
							<CookieBar />
							<Footer />
						</ReviewsUsersDataProvider>
					</LoaderProvider>
				</FlashMessagesProvider>
			</body>
		</html>
	);
}
