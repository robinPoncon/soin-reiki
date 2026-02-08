import { Metadata } from "next";

export const metadata: Metadata = {
	title: "La Guidance des Cartes – Support de réflexion et d’accompagnement",
	description:
		"Découvrez la guidance par tirage de cartes comme un support de réflexion permettant d’ouvrir un nouveau regard sur une situation, de prendre du recul et d’apporter plus de clarté.",
	keywords: [
		"guidance",
		"tirage de cartes",
		"accompagnement",
		"réflexion",
		"prise de recul",
		"clarté",
		"émotions",
		"développement personnel",
		"écoute de soi"
	]
};

export default function GuidanceLayout({ children }: { children: React.ReactNode }) {
	return children;
}
