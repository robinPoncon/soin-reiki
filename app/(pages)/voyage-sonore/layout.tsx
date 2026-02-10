import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Le Voyage Sonore – Expérience musicale au Handpan",
	description:
		"Découvrez le voyage sonore, une expérience immersive mêlant relaxation guidée et musique au Handpan, invitant au relâchement, à l’écoute intérieure et à un moment de pause.",
	keywords: [
		"voyage sonore",
		"handpan",
		"méditation guidée",
		"relaxation",
		"expérience sonore",
		"musique méditative",
		"pleine conscience",
		"écoute intérieure",
		"détente",
		"instrument handpan",
		"voyage musical",
		"bordeaux"
	]
};

export default function SoundTravelLayout({ children }: { children: React.ReactNode }) {
	return children;
}
