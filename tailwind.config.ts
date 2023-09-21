import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundColor: {
				darkTurquoise: "#062933",
				darkBackground: "#0b3242",
				customWhite: "#fcf2d9",
				blueGreen: "#3ad9bc",
				customYellow: "#fdd542"
			},
			colors: {
				darkTurquoise: "#062933",
				darkBackground: "#0b3242",
				customWhite: "#fcf2d9",
				blueGreen: "#3ad9bc",
				customYellow: "#fdd542",
				darkTurquoiseLighter: "#148bad"
			},
			boxShadow: {
				blueGreen: "0 0 10px #3ad9bc",
				customYellow: "0 0 10px #fdd542",
				darkTurquoise: "0 0 10px #062933"
			},
			border: {
				blueGreen: "#3ad9bc"
			}
		},
		fontFamily: {
			sans: ["Helvetica", "sans-serif"]
		},
		screens: {
			sm: "576px",
			md: "768px",
			lg: "1024px",
			xl: "1280px"
		}
	}
};
export default config;
