const puppeteer = require('puppeteer');
var data = require('./data.json');
const url = process.argv[2]

if ( !url ) {
    console.error('Please enter URL of page.')
    process.exit(1)
}

(async() => {  

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto(url, {waitUntil: 'networkidle2'});

    await page.click('.rsvp-button');
    await page.waitFor(2000);

    await page.type('#FirstName', data.illuminatevip.Firstname);
    await page.type('#LastName', data.illuminatevip.Lastname);
    await page.type('#Email', data.illuminatevip.Email);
    await page.type('#Title', data.illuminatevip.Jobtitle);
    await page.type('#Company', data.illuminatevip.Companyname);
    await page.screenshot({
    path: 'illuminatevip.jpg',
    fullPage: true
    });
    await page.click('.mktoButton');
    
    console.log('Form Submitted');
    await page.waitFor(4000);
    await page.screenshot({
    path: 'illuminatevip-click.jpg',
    fullPage: true
    });
    await browser.close();
})();