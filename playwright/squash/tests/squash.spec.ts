import { test, expect } from '@playwright/test';
import { before } from 'node:test';

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

test('reserve a court and expect alert', async ({ page }) => {

    await page.locator('ul li a').nth(0).click();

    await page.fill('#reservationDate', '2022-11-11');

    await page.fill('#reservationTime', '12:00');

    await page.fill('#courtNumber', '1');

    await page.fill('#reservationName', 'test');

    const dialogPromise = new Promise(resolve => {
        page.once('dialog', async dialog => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('Baanreservering succesvol opgeslagen!!');
            await dialog.accept();
            resolve(null);
        });
    });

    await page.click('button[type="submit"]');

    await dialogPromise;
});

//all reservations
test('check link to get courts reserved', async ({ page }) => {
    await page.locator('ul li a').nth(1).click();

    await expect(page).toHaveTitle(/Alle Reserveringen/);
});

test('reserve a court and expect to be shown. then delete it', async ({ page }) => {
    //first reserve
    await page.locator('ul li a').nth(0).click();

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split('T')[0];
    await page.fill('#reservationDate', formattedDate);

    await page.fill('#reservationTime', '12:00');

    await page.fill('#courtNumber', '1');

    await page.fill('#reservationName', 'test-foo-bar');

    const dialogPromise = new Promise(resolve => {
        page.once('dialog', async dialog => {
            await dialog.accept();
            resolve(null);
        });
    });

    await page.click('button[type="submit"]');
    await dialogPromise;

    //go to reservation list and check if it is there
    await page.locator('ul li a').nth(0).click();

    let tdReservation = page.locator('#reservationTable tbody tr td:has-text("test-foo-bar")');
    await expect(tdReservation).toBeVisible();

    //delete reservation

    //delete is in the next cell
    const deleteButton = tdReservation.locator('xpath=./following-sibling::td[1]//button');
    await deleteButton.click();

    tdReservation = page.locator('#reservationTable tbody tr td:has-text("test-foo-bar")');
    await expect(tdReservation).not.toBeVisible();
});