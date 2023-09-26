import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Réservation",
	description: "Venez prendre un rendez-vous !"
};

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
	return children;
}
