import { test as base } from '@playwright/test';

export const test = base.extend({
  login: async ({ page }, use) => {

    await page.goto('http://202.83.16.221:9003/');
    await page.locator("#email").fill("")
     await page.locator("#password").fill("Tommy@123")
     await page.getByRole("button",{name:" Login "}).click()


  }
});

export { expect } from '@playwright/test';
