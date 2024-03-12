import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Certifications Reiki & Tirage de Cartes",
	description:
		"Découvrezw mes certifications en Reiki et tirage de cartes qui attestent de mon expertise et de mes compétences dans ces domaines.",
	keywords: [
		"certifications Reiki",
		"certification tirage de cartes",
		"diplômes reiki",
		"diplôme tirage de cartes"
	]
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
	return children;
}
