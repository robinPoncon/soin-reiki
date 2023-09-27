import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Réservez Votre Séance",
	description:
		"Réservez votre séance de Reiki ou de tirage de cartes en choisissant la date et l'heure qui vous conviennent pour votre voyage vers le bien-être !",
	keywords: [
		"réserver",
		"réservation",
		"rendez-vous",
		"séance",
		"reiki",
		"planifier",
		"tirage de cartes",
		"énergétique"
	]
};

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
	return children;
}
