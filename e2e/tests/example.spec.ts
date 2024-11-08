import { test, expect } from '@playwright/test';
import { testEnv } from 'e2e/enviroments/enviroment';

test('get started link', async ({ page }) => {
  await page.goto('/');

  console.log("CI:", testEnv.ci);

  const name = 'Hello 1, test-ci'
  console.log("name:", name)
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name })).toBeVisible();
});
