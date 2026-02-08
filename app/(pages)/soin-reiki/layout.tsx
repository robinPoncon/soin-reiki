import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Le Reiki – Relaxation et accompagnement à Bordeaux",
	description:
		"Découvrez le Reiki, une pratique énergétique d’origine japonaise favorisant la détente, le relâchement et l’écoute de soi, utilisée comme support dans un accompagnement vers plus de clarté intérieure.",
	keywords: [
		"reiki",
		"reiki bordeaux",
		"relaxation",
		"bien-être",
		"lâcher prise",
		"détente",
		"gestion du stress",
		"écoute de soi",
		"accompagnement",
		"pleine conscience",
		"voyage sonore",
		"émotions"
	]
};

export default function SoinReikiLayout({ children }: { children: React.ReactNode }) {
	return children;
}
