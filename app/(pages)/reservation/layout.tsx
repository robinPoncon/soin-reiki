import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Réservez votre Séance",
	description:
		"Réservez votre séance d'accompagnement énergétique en choisissant la date et l'heure qui vous conviennent !",
	keywords: [
		"réservation",
		"rendez-vous",
		"séance",
		"accompagnement énergétique",
		"prestation musicale"
	]
};

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
	return children;
}
