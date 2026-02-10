import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tarifs des accompagnements et des voyages sonores",
	description:
		"Découvrez les tarifs des accompagnements individuels et des voyages sonores en groupe, ainsi que le déroulement des différentes propositions.",
	keywords: [
		"tarifs accompagnement",
		"accompagnement énergétique",
		"reiki bordeaux",
		"tirage de carte",
		"pleine conscience",
		"voyage sonore",
		"handpan",
		"relaxation",
		"méditation guidée",
		"écoute",
		"clarifier sa situation",
		"stress",
		"anxiété",
		"émotions",
		"prestation musicale"
	]
};

export default function PricesLayout({ children }: { children: React.ReactNode }) {
	return children;
}
