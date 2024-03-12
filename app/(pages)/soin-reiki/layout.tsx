import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Le Soin Reiki",
	description: "Découvrez en plus sur cette méthode de soin énergétique venue du Japon !",
	keywords: [
		"soin reiki",
		"guérison",
		"bien-être",
		"lâcher prise",
		"sérénité",
		"émotions",
		"compassion",
		"relaxation",
		"stress",
		"anxiété",
		"estime de soi",
		"méridiens"
	]
};

export default function soinReikiLayout({ children }: { children: React.ReactNode }) {
	return children;
}
