// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://smart-ace-designs.github.io",
  base: "/astro-minimal-blog-card",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Sora",
      cssVariable: "--font-sora",
      weights: [400, 600, 700],
      styles: ["normal"],
    },
  ],
});
