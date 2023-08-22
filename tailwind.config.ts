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
				customWhite: "#fcf2d9",
				blueGreen: "#3ad9bc",
				customYellow: "#fdd542"
			},
			colors: {
				darkTurquoise: "#062933",
				customWhite: "#fcf2d9",
				blueGreen: "#3ad9bc",
				customYellow: "#fdd542"
			},
			boxShadow: {
				blueGreen: "0 0 10px #3ad9bc",
				customYellow: "0 0 10px #fdd542"
			}
		},
		fontFamily: {
			sans: ["Helvetica", "sans-serif"]
		}
	},
	plugins: []
};
export default config;
