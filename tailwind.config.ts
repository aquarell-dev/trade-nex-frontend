import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: {
					primary: "#1b2627",
					secondary: "#202c2d",
				},
				accent: {
					primary: "#b2f35f",
				},
				text: {
					primary: "#fff",
					secondary: "#879798",
				},
			},
		},
	},
	plugins: [],
}
export default config
