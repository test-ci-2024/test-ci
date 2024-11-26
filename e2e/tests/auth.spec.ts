import { test, expect } from '@playwright/test';

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