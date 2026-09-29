import { test, expect } from "@playwright/test";

test("English copy fits at 320 px with 200% text and exports whole words", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setViewportSize({ width: 320, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page).toHaveTitle("BIW Wrapped — Fictional Portfolio Demo");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "36px";
  });
  await page.getByRole("button", { name: "Open the story" }).click();
  for (const name of ["Milo", "Nora", "Theo"]) {
    await page.getByRole("radio", { name: new RegExp(name) }).check();
    await page.getByRole("button", { name: "Continue", exact: true }).click();
    for (let i = 0; i < 32; i++) {
      const screen = await page.locator("main").getAttribute("data-screen");
      const show = page.getByRole("button", { name: "Show all", exact: true });
      if (await show.count()) {
        try {
          await show.click({ timeout: 750 });
        } catch (error) {
          // Reduced motion can finish a passive reveal before the click lands.
          if (await show.count()) throw error;
        }
      }
      expect(await page.locator("body").innerText()).not.toMatch(
        /\p{Script=Han}/u,
      );
      const overflow = await page.evaluate(() => ({
        page: document.documentElement.scrollWidth > innerWidth + 1,
        clipped: [
          ...document.querySelectorAll("button, .panel, .credits-window"),
        ]
          .filter(
            (el) =>
              el.scrollWidth > el.clientWidth + 2 ||
              (el.classList.contains("credits-window") &&
                el.scrollHeight > el.clientHeight + 2),
          )
          .map((el) => el.className),
      }));
      expect(overflow, `${name}/${screen}`).toEqual({
        page: false,
        clipped: [],
      });
      if (screen === "S30") {
        const nextDownload = page.waitForEvent("download");
        await page
          .getByRole("button", { name: "Story-worthy. Save it." })
          .click();
        await (
          await nextDownload
        ).saveAs(info.outputPath(`${name}-english.png`));
      }
      if (screen === "S31") break;
      await page
        .getByRole("button", { name: "Next screen", exact: true })
        .click();
    }
    await page.getByRole("button", { name: "Try another perspective" }).click();
  }
  expect(errors).toEqual([]);
});
