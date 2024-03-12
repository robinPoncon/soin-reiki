import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tarifs des Accompagnements et des Prestations",
	description:
		"Découvrez plus en détail mes accompagnements et mes prestations musicales d'une durée de 90 minutes !",
	keywords: [
		"tarifs",
		"tirage de carte",
		"accompagnement énergétique",
		"équilibre énergétique",
		"guérison",
		"suivi personnalisé",
		"guidance",
		"méditation guidée",
		"méditation pleine conscience",
		"pleine conscience",
		"chemin de vie",
		"prestation musicale",
		"émotions",
		"relaxation",
		"voyage sonore",
		"stress",
		"anxiété"
	]
};

export default function PricesLayout({ children }: { children: React.ReactNode }) {
	return children;
}
