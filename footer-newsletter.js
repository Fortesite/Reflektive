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

    await page.type('#email', data.footer_newsletter.Email);
    await page.screenshot({
        path: 'footer-newsletter.jpg',
        fullPage: true
    });
    await page.click('.form--submit_button');
    
    console.log('Form Submitted');
    await page.waitFor(4000);
    await page.screenshot({
        path: 'footer-newsletter-click.jpg',
        fullPage: true
    });
    await browser.close();
})();