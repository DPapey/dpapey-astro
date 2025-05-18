// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.dpapey.dev",
  integrations: [mdx(), icon(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
