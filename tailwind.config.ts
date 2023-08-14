import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/pages/**/*.{js,ts,jsx,tsx,mdx}", "./app/components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundColor: {
				darkTurquoise: "#062933",
				customWhite: "#fcf2d9"
			},
			colors: {
				darkTurquoise: "#062933",
				customWhite: "#fcf2d9"
			}
		},
		fontFamily: {
			sans: ["Helvetica", "sans-serif"]
		}
	},
	plugins: []
};
export default config;
