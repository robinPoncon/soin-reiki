import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contactez-moi pour plus d'informations",
	description:
		"Si vous avez besoin de renseignements ou si vous souhaitez planifier une séance de Reiki ou de tirage de cartes, n'hésitez pas à me contacter ! :)",
	keywords: [
		"contact",
		"informations",
		"soin reiki",
		"tirage de cartes",
		"renseignement",
		"énergétique"
	]
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return children;
}
