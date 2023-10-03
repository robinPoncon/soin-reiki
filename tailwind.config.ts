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
				blackBackground: "#011721",
				customWhite: "#fcf2d9",
				blueGreen: "#3ad9bc",
				blueGreenLighter: "#4eddc3",
				customYellow: "#fdd542",
				customYellowLighter: "#fdd955",
				pink: "pink",
				pinkLighter: "#ffc6d0"
			},
			colors: {
				darkTurquoise: "#062933",
				darkBackground: "#0b3242",
				customWhite: "#fcf2d9",
				blueGreen: "#3ad9bc",
				customYellow: "#fdd542",
				darkTurquoiseLighter: "#17a1c9",
				pink: "pink"
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
			xl: "1280px",
			"2xl": "1536px"
		}
	}
};
export default config;
