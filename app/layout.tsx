import "./globals.scss";
import type { Metadata } from "next";
import HeaderMenu from "./_components/HeaderMenu/HeaderMenu";
import { FlashMessagesProvider } from "./_context/FlashMessagesContext";
import { LoaderProvider } from "./_context/LoaderContext";
import Footer from "./_components/Footer/Footer";
import { ReviewsUsersDataProvider } from "./_context/ReviewsUsersDataContext";
import CookieBar from "./_components/CookieBar/CookieBar";
import { handleeFont } from "./fonts";

export const metadata: Metadata = {
	metadataBase: new URL("https://racines-guerison.com"),
	title: "Les Racines de la Guérison - Retrouver l'Amour de Soi",
	description:
		"Je vous accompagne pour apprivoiser votre mental, vous reconnecter à votre corps et vos émotions grâce à l'Amour de Soi, afin de retrouver votre Bonheur !",
	keywords: [
		"reiki",
		"amour de soi",
		"développement personnel",
		"guérison",
		"tirage de cartes",
		"énergie",
		"spiritualité",
		"bien-être",
		"transformation",
		"voyage sonore",
		"pleine conscience",
		"guidance",
		"Bordeaux"
	],
	openGraph: {
		title: "Les Racines de la Guérison - Retrouver l'Amour de Soi",
		description:
			"Je vous accompagne pour apprivoiser votre mental, vous reconnecter à votre corps et vos émotions grâce à l'Amour de Soi, afin de retrouver votre Bonheur !",
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
		<html lang="en">
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
