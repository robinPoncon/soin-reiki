import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tarifs du Voyage Sonore en groupe",
	description:
		"Découvrez en plus sur les différents tarifs que je propose pour les voyages sonores en groupe !",
	keywords: ["voyage sonore", "tarifs", "instrument de musique", "handpan", "prestation musicale"]
};

export default function PriceListLayout({ children }: { children: React.ReactNode }) {
	return children;
}
