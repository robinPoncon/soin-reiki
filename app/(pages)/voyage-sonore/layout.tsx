import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Le Voyage Sonore",
	description: "Découvrez une expérience de relaxation unique avec le Voyage Sonore !",
	keywords: [
		"voyage sonore",
		"méditation pleine conscience",
		"méditation guidée",
		"pleine conscience",
		"handpan",
		"voyage intérieur",
		"écriture intuitive",
		"créativité",
		"émotions",
		"instrument de musique",
		"relaxation",
		"guérison",
		"bien-être",
		"stress",
		"anxiété",
		"lâcher-prise",
		"amour de soi",
		"bonheur"
	]
};

export default function SoundTravelLayout({ children }: { children: React.ReactNode }) {
	return children;
}
