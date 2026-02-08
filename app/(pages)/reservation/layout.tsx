import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Réserver une séance",
	description:
		"Réservez votre séance d’accompagnement en choisissant simplement la date et l’horaire qui vous conviennent.",
	keywords: [
		"réservation",
		"rendez-vous",
		"séance",
		"accompagnement",
		"reiki bordeaux",
		"prise de rendez-vous"
	]
};

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
	return children;
}
