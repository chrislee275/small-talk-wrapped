import { test, expect, type Page } from "@playwright/test";
import { readFile } from "node:fs/promises";
async function choose(page: Page, name = "Milo") {
  await page.goto("/");
  await page.getByRole("button", { name: "打开这本日常" }).click();
  await expect(page.locator("main")).toHaveAttribute("data-screen", "S01");
  await expect(
    page.getByRole("button", { name: "选好了，继续" }),
  ).toBeDisabled();
  await page.getByRole("radio", { name: new RegExp(name) }).check();
  await page.getByRole("button", { name: "选好了，继续" }).click();
}
async function reveal(page: Page) {
  const all = page.getByRole("button", { name: "显示全部", exact: true });
  if (await all.count()) {
    try {
      await all.click({ timeout: 750 });
    } catch (error) {
      if (await all.count()) throw error;
    }
  }
}
async function advance(page: Page) {
  await reveal(page);
  await page.getByRole("button", { name: "下一屏", exact: true }).click();
}
async function to(page: Page, id: string) {
  for (
    let i = 0;
    i < 32 && (await page.locator("main").getAttribute("data-screen")) !== id;
    i++
  )
    await advance(page);
  await expect(page.locator("main")).toHaveAttribute("data-screen", id);
}
async function noOverflow(page: Page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1,
    ),
  ).toBe(true);
}

test("quantity reveal, desktop layout and pausable ending", async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await choose(page, "Theo");
  await to(page, "S19");
  await expect(page.locator(".quantity .big-number")).toHaveText("?");
  await page.getByRole("button", { name: "拆开看看" }).click();
  await expect(page.locator(".quantity .big-number")).toHaveText("3");
  await expect(page.locator(".seeds span[data-visible=true]")).toHaveCount(3);
  await to(page, "S31");
  await page.getByRole("button", { name: "暂停字幕" }).click();
  const before = await page
    .locator(".credits")
    .evaluate((node) => getComputedStyle(node).transform);
  await page.waitForTimeout(400);
  expect(
    await page
      .locator(".credits")
      .evaluate((node) => getComputedStyle(node).transform),
  ).toBe(before);
  await page.getByRole("button", { name: "继续字幕" }).click();
  await expect(page.getByRole("button", { name: "暂停字幕" })).toHaveCount(0, {
    timeout: 12000,
  });
  await expect(page.locator("main")).toHaveAttribute("data-screen", "S31");
  await noOverflow(page);
  await page.screenshot({
    path: testInfo.outputPath("desktop-ending.png"),
    fullPage: true,
  });
});

test("three full routes, independent branches, download and ending actions", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const name of ["Milo", "Nora", "Theo"]) {
    await choose(page, name);
    for (let i = 2; i <= 30; i++) {
      await expect(page.locator("main")).toHaveAttribute(
        "data-screen",
        `S${String(i).padStart(2, "0")}`,
      );
      if (i >= 23)
        await expect(page.locator("main")).toHaveAttribute(
          "data-person",
          name.toLowerCase(),
        );
      await noOverflow(page);
      if (i === 30) {
        const download = page.waitForEvent("download");
        await page.getByRole("button", { name: "这张值得一个Story" }).click();
        const file = await download;
        expect(file.suggestedFilename()).toBe(`BIW-Demo-${name}.png`);
        const bytes = await readFile((await file.path())!);
        expect(bytes.subarray(1, 4).toString()).toBe("PNG");
        expect(bytes.readUInt32BE(16)).toBe(1080);
        expect(bytes.readUInt32BE(20)).toBe(1920);
      }
      await advance(page);
    }
    await expect(page.locator("main")).toHaveAttribute("data-screen", "S31");
    await reveal(page);
    await page.getByRole("button", { name: "换个视角继续看" }).click();
    await expect(
      page.getByRole("button", { name: "选好了，继续" }),
    ).toBeDisabled();
    await page.getByRole("radio", { name: /Nora/ }).check();
    await page.getByRole("button", { name: "选好了，继续" }).click();
    await expect(page.locator("main")).toHaveAttribute("data-screen", "S23");
    await page.goBack();
    await expect(page.locator("main")).toHaveAttribute("data-screen", "S01");
    await page.goBack();
    await expect(page.locator("main")).toHaveAttribute("data-screen", "S00");
    await choose(page, "Nora");
    await to(page, "S31");
    await page.getByRole("button", { name: "从开头再看" }).click();
    await expect(page.locator("main")).toHaveAttribute("data-screen", "S00");
  }
  expect(errors).toEqual([]);
});
test("Back, refresh, keyboard, image failure and screenshots", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "打开这本日常" }).click();
  await page.getByRole("radio", { name: /Milo/ }).focus();
  await page.keyboard.press("Space");
  await expect(page.getByRole("radio", { name: /Milo/ })).toBeChecked();
  await page.screenshot({ path: "docs/images/selection.png", fullPage: true });
  await page.getByRole("button", { name: "选好了，继续" }).click();
  await advance(page);
  await page.getByRole("button", { name: "返回上一屏" }).click();
  await expect(page.locator("main")).toHaveAttribute("data-screen", "S02");
  await page.reload();
  await expect(page.locator("main")).toHaveAttribute("data-screen", "S00");
  await choose(page);
  await to(page, "S25");
  await page.getByRole("button", { name: "展开说明" }).click();
  await expect(page.locator(".signature")).toHaveAttribute("data-stage", "3");
  await page.screenshot({
    path: "docs/images/interaction.png",
    fullPage: true,
  });
  await to(page, "S30");
  await page.screenshot({ path: "docs/images/share-card.png", fullPage: true });
  await page.route("**/avatars/*.svg", (route) => route.abort());
  await page.goto("/");
  await page.getByRole("button", { name: "打开这本日常" }).click();
  await expect(page.locator(".portrait").first()).toContainText("M");
  await noOverflow(page);
});
test("S05 does not run before visibility and pauses offscreen", async ({
  page,
}) => {
  await choose(page);
  await to(page, "S05");
  await expect(page.locator(".montage")).toHaveAttribute(
    "data-started",
    "false",
  );
  await page.waitForTimeout(2000);
  await expect(page.locator(".montage")).toHaveAttribute(
    "data-started",
    "false",
  );
  await page
    .locator(".montage")
    .evaluate((node) => node.scrollIntoView({ block: "center" }));
  await expect(page.locator(".montage")).toHaveAttribute(
    "data-started",
    "true",
  );
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
  const text = await page.locator(".montage-current").textContent();
  await page.waitForTimeout(2200);
  await expect(page.locator(".montage-current")).toHaveText(text!);
  await page
    .locator(".montage")
    .evaluate((node) => node.scrollIntoView({ block: "center" }));
  await expect(
    page.getByText("改名很勤快，整理还没开始。", { exact: true }),
  ).toBeVisible({ timeout: 10000 });
  await expect(page.locator("main")).toHaveAttribute("data-screen", "S05");
});
test("signature actions, achievement and reduced motion", async ({ page }) => {
  for (const [name, id, button] of [
    ["Nora", "S25", "开始揭晓"],
    ["Theo", "S26", "Restart"],
  ]) {
    await choose(page, name);
    await to(page, id);
    await expect(page.locator(".signature-result")).toHaveCount(0);
    await page.getByRole("button", { name: button, exact: true }).click();
    await expect(page.locator(".signature")).toHaveAttribute("data-stage", "3");
    await to(page, "S29");
    await expect(page.locator(".achievement-after")).toHaveCount(0);
    await page.getByRole("button", { name: "点击解锁成就" }).click();
    await expect(page.locator(".achievement-after")).toBeVisible();
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await choose(page);
  await to(page, "S31");
  await expect(page.locator(".credits")).toHaveClass(/instant/);
});
test("320/360/390, text zoom and scroll-first behavior", async ({ page }) => {
  for (const width of [320, 360, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await choose(page);
    await to(page, "S16");
    await reveal(page);
    await noOverflow(page);
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "36px";
    });
    await noOverflow(page);
    await page
      .getByRole("button", { name: "下一屏", exact: true })
      .scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("button", { name: "下一屏", exact: true }),
    ).toBeVisible();
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "";
    });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await choose(page);
  await to(page, "S16");
  await reveal(page);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.mouse.move(180, 400);
  await page.mouse.wheel(0, 350);
  await expect(page.locator("main")).toHaveAttribute("data-screen", "S16");
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1300);
  for (let i = 0; i < 3; i++) {
    await page.mouse.wheel(0, 65);
    await page.waitForTimeout(70);
  }
  await expect(page.locator("main")).toHaveAttribute("data-screen", "S17");
});
