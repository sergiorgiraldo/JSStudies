import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://www.giral.do/stuff/squash/');
});

//home

test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Squash/);
});

test('get links in home (menu)', async ({ page }) => {
    await expect(page.locator('ul li')).toHaveCount(5);
    await expect(page.locator('ul li').nth(0)).toHaveText('Baan Reservering');
    await expect(page.locator('ul li').nth(1)).toHaveText('Alle Reserveringen');
    await expect(page.locator('ul li').nth(2)).toHaveText('Squash Uitnodiging');
    await expect(page.locator('ul li').nth(3)).toHaveText('Alle Uitnodigingen');
    await expect(page.locator('ul li').nth(4)).toHaveText('Alle Wedstrijden');
});

//reserve court
test('check link to reserve court', async ({ page }) => {
    await page.locator('ul li a').nth(0).click();

    await expect(page).toHaveTitle(/Squashbaan Reservering/);

});

test('check fields to reserve court', async ({ page }) => {
    await page.locator('ul li a').nth(0).click();

    const dateInput = page.locator('#reservationDate');
    await expect(dateInput).toBeVisible();  
    const dateInputType = await dateInput.getAttribute('type');
    expect(dateInputType).toBe('date');

    const timeInput = page.locator('#reservationTime');
    await expect(timeInput).toBeVisible();  
    const timeInputType = await timeInput.getAttribute('type');
    expect(timeInputType).toBe('time');

    const courtInput = page.locator('#courtNumber');
    await expect(courtInput).toBeVisible();  
    const courtInputType = await courtInput.getAttribute('type');
    expect(courtInputType).toBe('number');

    const vanInput = page.locator('#reservationName');
    await expect(vanInput).toBeVisible();  
    const vanInputType = await vanInput.getAttribute('type');
    expect(vanInputType).toBe('text');

});