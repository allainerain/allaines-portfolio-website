import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import "./dotenv-config.js";

export default defineConfig({
  plugins: [sveltekit()],
});
