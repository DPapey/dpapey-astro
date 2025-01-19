/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"dark-radial":
					"radial-gradient(circle, rgba(255,0,150,0.3) 0%, rgba(0,0,255,0.3) 100%)",
				"fancy-layered":
					"linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('/assets/backgrounds/hero.jpg')",
			},
			animation: {
				"gradient-shift": "gradientMove 6s ease infinite alternate",
			},
			keyframes: {
				"0%": { backgroundPosition: "0% 50%" },
				"100%": { backgroundPosition: "100% 50%" },
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
