import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Drupdater",
  description: "Drupdater documentation",
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
});
