import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  login: async ({ page }, use) => {
    await page.goto('http://202.83.16.221:9003/');

    await page.locator('#email').fill(process.env.EMAIL);
    await page.locator('#password').fill(process.env.PASSWORD);

    await page.getByRole('button', { name: 'Login' }).click();

    // wait till login completes
    await page.waitForURL('**/dashboard');

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
