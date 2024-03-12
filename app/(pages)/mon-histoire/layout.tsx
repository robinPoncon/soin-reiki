import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mon Histoire",
	description:
		"Découvrez en plus sur qui je suis, mon histoire et mon parcours dans le domaine énergétique et le développement personnel !",
	keywords: [
		"développement personnel",
		"dépendance affective",
		"estime de soi",
		"amour inconditionnel",
		"amour de soi",
		"magnétisme",
		"soin reiki",
		"guérison",
		"bienfaits",
		"bien-être",
		"prise de conscience",
		"pleine conscience",
		"instrument de musique",
		"handpan",
		"émotions",
		"sonothérapie"
	]
};

export default function MyStoryLayout({ children }: { children: React.ReactNode }) {
	return children;
}
