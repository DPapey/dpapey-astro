/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "dark-radial":
          "radial-gradient(circle, rgba(255,0,150,0.4) 0%, rgba(0,0,255,0.3) 100%)", // Darker Purples and Orange
        "light-radial":
          "radial-gradient(circle, rgba(255, 193, 204, 0.4) 0%, rgba(255, 214, 163, 0.3) 35%, rgba(173, 216, 230, 0.2) 70%, rgba(240, 248, 255, 0.1) 100%)",
      },
      colors: {},
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
