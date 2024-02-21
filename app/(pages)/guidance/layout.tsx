import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Déroulement d'une Guidance en Tirage de Cartes",
	description:
		"Découvrez mes services de guidance en tirage de cartes conçus pour vous accompagner dans la réponse à vos questions. Possibilité d'y faire à distance !",
	keywords: [
		"guidance",
		"tirage de cartes",
		"présentiel",
		"distance",
		"spiritualité",
		"développement personnel",
		"guérison",
		"énergétique"
	]
};

export default function guidanceLayout({ children }: { children: React.ReactNode }) {
	return children;
}
