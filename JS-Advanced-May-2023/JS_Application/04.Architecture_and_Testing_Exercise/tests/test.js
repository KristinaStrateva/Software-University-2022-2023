const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('E2E tests', async function () {
    this.timeout(15000);

    before(async () => { browser = await chromium.launch({headless: false, slowMo: 1000}); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('should contans certain titles as text contents', async () => {
        await page.goto('http://localhost:5500');

        const titles = await page.locator('div.head span').allTextContents();

        expect(titles).to.contains('Scalable Vector Graphics');
        expect(titles).to.contains('Open standard');
        expect(titles).to.contains('Unix');
        expect(titles).to.contains('ALGOL');
    });

    it('should check the More button functionality', async () => {
        await page.goto('http://localhost:5500');

        await page.getByText('More').first().click();
        const extraDivElementContent = await page.locator('div.extra').first().allTextContents();
        const extraDivElementVisibility = await page.isVisible('div.extra');

        expect(extraDivElementVisibility).to.be.true;
        expect(extraDivElementContent.length).to.be.greaterThan(0);
    });

    it('should change the More button to Less button when the More button is clicked', async () => {
        await page.goto('http://localhost:5500');

        await page.getByText('More').first().click();
        let extraDivElementVisibility = await page.isVisible('div.extra');
        expect(extraDivElementVisibility).to.be.true;

        await page.getByText('Less').first().click();
        extraDivElementVisibility = await page.isVisible('div.extra');
        expect(extraDivElementVisibility).to.be.false;
    });
});