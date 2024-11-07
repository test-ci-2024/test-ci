import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: '2 Hello 2, test-ci' })).toBeVisible();
});
