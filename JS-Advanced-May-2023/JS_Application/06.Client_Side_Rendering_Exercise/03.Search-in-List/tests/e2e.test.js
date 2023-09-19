//@ts-check
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:3000'; // Application host (NOT service host - that can be anything)

const DEBUG = false;
const slowMo = 500;

let browser;
let page;

// @ts-ignore
describe('E2E tests', function () {
  this.timeout(10000);

  // @ts-ignore
  before(async () => {
    browser = await chromium.launch(DEBUG ? { headless: false, slowMo } : {});
  });
  // @ts-ignore
  after(async () => {
    await browser.close();
  });
  // @ts-ignore
  beforeEach(async () => {
    page = await browser.newPage();
  });
  // @ts-ignore
  afterEach(async () => {
    await page.close();
  });

  // @ts-ignore
  describe('Search', () => {
    // @ts-ignore
    it('Load Matches with 1 Letter', async () => {
      await page.goto(host);
      await page.fill('#searchText', 'S');
      page.click('text=Search');
      await page.waitForTimeout(500);
      const town = await page.$$eval('#result', (t) =>
        t.map((l) => l.textContent)
      );
      expect(town[0]).to.equal('1 matches found');
    });

    // @ts-ignore
    it('Load Matches with 1 Letter', async () => {
      await page.goto(host);
      await page.fill('#searchText', 'P');
      page.click('text=Search');
      await page.waitForTimeout(500);
      const town = await page.$$eval('#result', (t) =>
        t.map((l) => l.textContent)
      );
      expect(town[0]).to.equal('2 matches found');
    });

    // @ts-ignore
    it('Load Matches with small letter', async () => {
      await page.goto(host);
      await page.fill('#searchText', 'pl');
      page.click('text=Search');
      await page.waitForTimeout(500);
      const town = await page.$$eval('#result', (t) =>
        t.map((l) => l.textContent)
      );
      expect(town[0]).to.equal('0 matches found');
    });

    // @ts-ignore
    it('Check active class with correct input', async () => {
      await page.goto(host);
      await page.fill('#searchText', 'Pl');
      page.click('text=Search');
      await page.waitForTimeout(500);
      const town = await page.$$eval('.active', (t) =>
        t.map((l) => l.textContent)
      );
      expect(town.length).to.equal(2);
    });

    // @ts-ignore
    it('Check active class with incorrect', async () => {
      await page.goto(host);
      await page.fill('#searchText', 's');
      page.click('text=Search');
      await page.waitForTimeout(500);
      const town = await page.$$eval('.active', (t) =>
        t.map((l) => l.textContent)
      );
      expect(town.length).to.equal(0);
    });
  });
});
