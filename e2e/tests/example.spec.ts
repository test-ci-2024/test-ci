import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('/');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Hello 1, test-ci' })).toBeVisible();
});
