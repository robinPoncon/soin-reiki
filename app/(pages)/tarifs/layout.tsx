import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mes Différents Tarifs",
	description:
		"Découvrez les tarifs pour les séances de Reiki et de tirage de cartes. Ils reflètent mon engagement envers la qualité et la profondeur de chaque séance.",
	keywords: ["tarifs", "prix", "séances", "reiki", "tirage de cartes", "qualité", "énergétique"]
};

export default function TarifLayout({ children }: { children: React.ReactNode }) {
	return children;
}
