
import { test, expect } from '../fixtures/custom fixtures/login';

test('User logs in successfully', async ({ login }) => {

  await expect(login).toHaveTitle("My account");
});

