import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=orange+hrms&oq=orange+hrms&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM2MDdqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'OrangeHRM OrangeHRM https://' }).click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').press('CapsLock');
  await page.getByPlaceholder('Username').fill('A');
  await page.getByPlaceholder('Username').press('CapsLock');
  await page.getByPlaceholder('Username').fill('Amin');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('ArrowDown');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').press('CapsLock');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
});