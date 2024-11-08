import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('/');

  console.log(process.env["ENV"]);

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: '2 Hello 1, test-ci' })).toBeVisible();
});
