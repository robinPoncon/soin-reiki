import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Déroulement d'une séance",
	description: "Découvrez en plus sur le déroulement exacte d'une séance avec moi !",
	keywords: [
		"bienfaits",
		"soin",
		"soin reiki",
		"guidance",
		"tirage de carte",
		"guérison",
		"équilibre énergétique",
		"émotions",
		"pleine conscience"
	]
};

export default function SoundTravelLayout({ children }: { children: React.ReactNode }) {
	return children;
}
