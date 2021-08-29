import puppeteer from "puppeteer";

describe('show/hide an event details', () => {
  let browser;
  let page;
  
  beforeAll(async () => {
    jest.setTimeout(15000);
    browser = await puppeteer.launch(
      // {
      //   headless: false,
      //   slowMo: 250,
      //   args: ['--start-fullscreen'],
      // }
    );
    page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.modal');
  });

  afterAll(() => {
    browser.close();
  });

  //Scenario 1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .modal');
    const className = await page.evaluate(el => el.className, eventDetails);
    expect(className).toBe('modal display-none'); //if the element has the display-none class => not visible
  });

  //Scenario 2
  test('User can expand an event to see its details', async () => {
    const button = await page.$('.open-btn');
    await button.click();

    const eventDetails = await page.$('.modal');
    const className = await page.evaluate(el => el.className, eventDetails);
    expect(className).toBe('modal display-block'); //if the element has the display-block class => visible
  });

  test('User can collapse an event to hide its details', async () => {
    const button = await page.$('.modal .close-btn');
    await button.click();

    const eventDetails = await page.$('.event .modal');
    const className = await page.evaluate(el => el.className, eventDetails);
    expect(className).toBe('modal display-none'); //if the element has the display-none class => not visible
  });
});