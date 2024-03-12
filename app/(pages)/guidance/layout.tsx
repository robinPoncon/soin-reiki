import { Metadata } from "next";

export const metadata: Metadata = {
	title: "La Guidance des Cartes",
	description:
		"Découvrez en plus sur ma vision de la guidance par tirage de cartes et de ses bienfaits !",
	keywords: ["guidance", "tirage de carte", "guérison", "prise de conscience"]
};

export default function GuidanceLayout({ children }: { children: React.ReactNode }) {
	return children;
}
