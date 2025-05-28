import { test as base, expect, Page, chromium } from "@playwright/test";

type MyFixture = { webApp: Page };

const test = base.extend<MyFixture>({
  webApp: async ({ page }, use) => {
    await page.goto("/");
    await page.getByRole("link", { name: "swagger" }).click();
    expect(page).toHaveTitle(/^test\sAPI$/);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await use(page);
  },
});

test("sample test", async ({ webApp, page }) => {
  console.log("xxx");
  await expect(webApp.getByRole("heading", { name: "My API" })).toBeVisible();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await expect(page.getByRole("heading", { name: "My API" })).toBeVisible();
});

test.only("without fixtures", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("/");
});
