
const puppeteer = require('puppeteer');


const sleep = async (ms) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, ms)
    });
  }

const ID = {
    login: '#email',
    pass: '#pass'
  };

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://facebook.com', {
        waitUntil: 'networkidle2'
      });
    await page.waitForSelector(ID.login);


    await page.type(ID.login, 'wmgev@yahoo.com');
    await page.type(ID.pass, '');
    await sleep(500);

    await page.click("#loginbutton")
    await page.screenshot({path: 'example.png'});
  
    // await browser.close();
  })();