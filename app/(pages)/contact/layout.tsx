import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact – Prendre contact et poser vos questions",
	description:
		"Pour toute question concernant le déroulement des séances, mon accompagnement ou mes prestations musicales, vous pouvez me contacter via ce formulaire. Je vous répondrai dans les meilleurs délais.",
	keywords: [
		"contact",
		"accompagnement",
		"reiki bordeaux",
		"prise de rendez-vous",
		"question accompagnement",
		"prestation musicale",
		"contact thérapeute"
	]
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
	return children;
}
