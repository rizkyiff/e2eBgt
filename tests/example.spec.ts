import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import { Status } from "allure-js-commons";
import { ContentType } from "allure-js-commons";

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("Test Authentication", async () => {
  await allure.step("Step 1", async () => {
    await allure.step("Sub-step 1", async (ctx) => {
      await ctx.parameter("foo", "1");
      // ...
    });
    await allure.step("Sub-step 2", async (ctx) => {
      await ctx.parameter("foo", "2");
      // ...
    });
  });
  await allure.logStep("Step 2", Status.SKIPPED);
});


for (const login of ["johndoe", "johndoe@example.com"]) {
  test(`Test Authentication as ${login}`, async () => {
    await allure.parameter("login", login);
    await allure.parameter("time", new Date().toUTCString(), { excluded: true });
    // ...
  });
}
test("Test Authentication With Empty Login", async ({ page }) => {
  await allure.parameter("login", "");
  await allure.parameter("auth_method", "password");
  // ...
});


test("Test Authentication2 23", async () => {
  // ...

  await allure.attachment("Text file", "This is the file content.", ContentType.TEXT);

  // Attach a tiny 1x1 PNG image from memory to avoid filesystem dependency
  const tinyPngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PkW6VwAAAABJRU5ErkJggg==";
  await allure.attachment("Screenshot", Buffer.from(tinyPngBase64, "base64"), ContentType.PNG);
});
