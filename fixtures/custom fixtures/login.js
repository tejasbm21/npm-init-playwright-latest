import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  login: async ({ page }, use) => {
    await page.goto('http://202.83.16.221:9003/');
    await page.locator("//a[text()='Login']").click()

    await page.locator('#email').fill("tommy@gmail.com");
    await page.locator('#password').fill("Tommy@123");

    await page.getByRole('button', { name: 'Login' }).click();

    // expose logged-in page
    await use(page);
  },
});

export { expect };

//how to use it

// import { test, expect } from '../fixtures/login.fixture';

// test('user is logged in', async ({ login }) => {
//   await expect(login.locator('text=Dashboard')).toBeVisible();
// });
