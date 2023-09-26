import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mes certifications",
	description: "Venez prendre un rendez-vous !"
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
	return children;
}
