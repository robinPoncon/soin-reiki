import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mon Histoire | Robin Ponçon – Accompagnement à Bordeaux",
	description:
		"Découvrez mon histoire, mon parcours et la manière dont mon expérience a façonné ma vision de l’accompagnement, basée sur l’écoute, la présence et la recherche de clarté intérieure.",
	keywords: [
		"mon histoire",
		"parcours thérapeute",
		"accompagnement",
		"écoute",
		"pleine conscience",
		"reiki bordeaux",
		"magnétisme",
		"accompagnement énergétique",
		"chemin personnel",
		"clarté",
		"émotions",
		"handpan",
		"voyage sonore",
		"bien-être",
		"bordeaux"
	]
};

export default function MyStoryLayout({ children }: { children: React.ReactNode }) {
	return children;
}
