import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Certifications Reiki & Tirage de Cartes",
	description:
		"Découvrez les formations et certifications qui ont accompagné mon parcours en Reiki et en guidance par les cartes, et qui soutiennent aujourd’hui ma pratique d’accompagnement.",
	keywords: [
		"certification reiki",
		"diplôme reiki",
		"formation reiki",
		"tirage de cartes",
		"formation guidance",
		"praticien reiki"
	]
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
	return children;
}
