import { test, expect } from '@playwright/test';
import { testEnv } from 'e2e/enviroments/enviroment';

test('flaky test', async ({ page }, testInfo) => {
  await page.goto('/');

  console.log("CI:", testEnv.ci);

  let name = 'fake title'
  if(testInfo.retry){
    // name = 'Hello 1, test-ci'
  }
  console.log("name:", name)
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
});

test('browser', {
  tag: '@c-essential'
} ,async ({page}) => {
  test.setTimeout(50 * 1000);
  await page.goto('https://workspace-workspace.haulmer.dev');
  await page.getByLabel('Email').fill('usuario_test01@haulmer.net');
  await page.getByLabel('Contraseña').fill('Pass1234');
  await page.getByRole('button', { name: 'iniciar', exact: true }).click();
  await expect(page.locator('app-homepage-initial')).toBeVisible({timeout: 20 * 1000});
})