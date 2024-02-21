import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Déroulement d'une Séance de Reiki",
	description:
		"Découvrez comment je guide chaque séance de Reiki avec les étapes, ses bienfaits et à quoi vous pouvez vous attendre d'une séance avec moi !",
	keywords: ["reiki", "séance", "étapes", "bienfaits", "guérison", "soin", "énergétique"]
};

export default function soinReikiLayout({ children }: { children: React.ReactNode }) {
	return children;
}
