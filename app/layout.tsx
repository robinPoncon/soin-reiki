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
	title: "Les Racines de la Guérison – Accompagnement et Reiki à Bordeaux",
	description:
		"J’accompagne les personnes traversant une période de doute ou de transition à ralentir, mieux comprendre ce qu’elles vivent et retrouver de la clarté pour avancer plus justement.",
	keywords: [
		"accompagnement",
		"reiki bordeaux",
		"accompagnement émotionnel",
		"clarifier ses émotions",
		"période de transition",
		"écoute",
		"bien-être",
		"pleine conscience",
		"voyage sonore",
		"relaxation",
		"reiki",
		"bordeaux",
		"gestion des émotions",
		"stress",
		"angoisse",
		"besoin de sens",
		"clarté intérieure",
		"accompagnement personnel"
	],
	openGraph: {
		title: "Les Racines de la Guérison – Accompagnement et Reiki à Bordeaux",
		description:
			"Un accompagnement basé sur l’écoute, le ressenti et la clarté intérieure pour traverser les périodes de doute ou de transition.",
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
