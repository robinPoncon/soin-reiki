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
	title: "Les Racines de la Guérison - Soins Reiki & Guidance sur Bordeaux",
	description:
		"Découvrez mon univers ainsi que mes services de soins Reiki apaisants et de guidance en tirage de cartes. Explorez l'énergie qui réside en vous !",
	keywords: [
		"Reiki",
		"guérison",
		"tirage de cartes",
		"énergie",
		"spiritualité",
		"bien-être",
		"harmonie",
		"guidance",
		"Bordeaux"
	],
	robots: "noindex, nofollow",
	openGraph: {
		title: "Les Racines de la Guérison - Soins Reiki & Guidance sur Bordeaux",
		description:
			"Découvrez mon univers ainsi que mes services de soins Reiki apaisants et de guidance en tirage de cartes. Explorez l'énergie qui réside en vous !",
		images: "/photo-couverture-site.png"
	}
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
