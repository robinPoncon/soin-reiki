import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Déroulement d'une séance",
	description:
		"Découvrez comment se déroule une séance : un temps d’écoute, de relâchement et de mise en perspective pour mieux comprendre ce que vous traversez et avancer avec plus de clarté.",
	keywords: [
		"accompagnement",
		"écoute",
		"clarification",
		"bien-être",
		"reiki",
		"pleine conscience",
		"voyage sonore",
		"gestion des émotions",
		"période de transition"
	]
};

export default function SoundTravelLayout({ children }: { children: React.ReactNode }) {
	return children;
}
