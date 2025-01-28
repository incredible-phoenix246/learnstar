import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				cream: "#FDF6EC",
				golden: "#D4A762",
				brown: "#2D1810",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				rotate: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				float: "float 6s ease-in-out infinite",
				rotate: "rotate 20s linear infinite",
			},

		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
