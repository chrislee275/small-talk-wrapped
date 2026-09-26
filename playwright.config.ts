import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  timeout: 120000,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:5186",
    viewport: { width: 390, height: 844 },
    browserName: "chromium",
    headless: true,
    acceptDownloads: true,
  },
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:5186",
    reuseExistingServer: true,
    timeout: 120000,
  },
});
