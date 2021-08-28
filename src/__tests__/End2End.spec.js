import puppeteer from "puppeteer";

describe('show/hide an event details', () => {

  //Scenario 1
  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch({ 
     // headless: false,
      // slowMo: 250 
    });
  
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  
    await page.waitForSelector('.event');
  
    const eventDetails = await page.$('.event .modal');
    const className = await page.evaluate(el => el.className, eventDetails);
    expect(className).toBe('modal display-none'); //if the element has the display-none class => not visible
   browser.close();
  });

  //Scenario 2
  test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    await page.waitForSelector('.modal');
  
    const button = await page.$('.open-btn');
    await button.evaluate( button => button.click());

    const eventDetails = await page.$('.modal');
    const className = await page.evaluate(el => el.className, eventDetails);
    expect(className).toBe('modal display-block'); //if the element has the display-block class => visible
    browser.close();
  });
});