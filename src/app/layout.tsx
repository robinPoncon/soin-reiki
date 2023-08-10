import "./globals.css";
import type { Metadata } from "next";
import HeaderMenu from "./_components/Menu/headerMenu";
import "./_customCSS/textEffect.scss";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="font-helvetica mt-20">
				<HeaderMenu />
				{children}
			</body>
		</html>
	);
}
