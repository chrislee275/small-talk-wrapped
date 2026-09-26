import { defineConfig } from "vite";
import vinext from "vinext";
export default defineConfig({
  plugins: [vinext()],
  build: { sourcemap: false },
  server: { host: "127.0.0.1" },
});
