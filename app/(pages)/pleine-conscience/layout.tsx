import { Metadata } from "next";

export const metadata: Metadata = {
	title: "La Pleine Conscience",
	description: "Découvrez en plus sur la Pleine Conscience et ses Bienfaits !",
	keywords: [
		"émotions",
		"lâcher-prise",
		"bien-être",
		"pleine conscience",
		"croissance personnelle",
		"pensées négatives",
		"guérison",
		"amour de soi"
	]
};

export default function FullConsciousnessLayout({ children }: { children: React.ReactNode }) {
	return children;
}
