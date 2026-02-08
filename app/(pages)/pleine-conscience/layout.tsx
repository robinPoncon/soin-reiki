import { Metadata } from "next";

export const metadata: Metadata = {
	title: "La Pleine Conscience – Observation et écoute de soi",
	description:
		"Découvrez la pleine conscience comme une pratique d’observation de l’instant présent favorisant le recul, l’écoute de soi et une meilleure compréhension de ses émotions et de ses ressentis.",
	keywords: [
		"pleine conscience",
		"écoute de soi",
		"émotions",
		"présence",
		"gestion du stress",
		"lâcher prise",
		"observation",
		"bien-être",
		"clarté intérieure",
		"accompagnement"
	]
};

export default function FullConsciousnessLayout({ children }: { children: React.ReactNode }) {
	return children;
}
