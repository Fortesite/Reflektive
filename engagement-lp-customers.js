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

    await page.type('#FirstName', data.engagement_lp_customers.Firstname);
    await page.type('#LastName', data.engagement_lp_customers.Lastname);
    await page.type('#Email', data.engagement_lp_customers.Email);
    await page.type('#Company', data.engagement_lp_customers.Companyname);
    await page.screenshot({
    path: 'engagement-lp-customers.jpg',
    fullPage: true
    });
    await page.click('.mktoButton');
    
    console.log('Form Submitted');
    await page.waitFor(4000);
    await page.screenshot({
    path: 'engagement-lp-customers-click.jpg',
    fullPage: true
    });
    await browser.close();
})();