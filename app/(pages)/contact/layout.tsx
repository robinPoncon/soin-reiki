import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contactez-moi pour plus d'informations",
	description:
		"Si vous avez besoin de renseignements sur mon accompagnement énergétique ou mes prestations musicales, n'hésitez pas à me contacter !",
	keywords: ["contactez-moi", "guérison", "accompagnement énergétique", "prestation musicale"]
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return children;
}
