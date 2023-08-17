import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/pages/**/*.{js,ts,jsx,tsx,mdx}", "./app/components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundColor: {
				darkTurquoise: "#062933",
				customWhite: "#fcf2d9",
				blueGreen: "#3ad9bc"
			},
			colors: {
				darkTurquoise: "#062933",
				customWhite: "#fcf2d9",
				blueGreen: "#3ad9bc"
			}
		},
		fontFamily: {
			sans: ["Helvetica", "sans-serif"]
		}
	},
	plugins: []
};
export default config;
