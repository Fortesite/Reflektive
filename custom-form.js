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

    await page.type('#FirstName', data.custom_form.Firstname);
    await page.type('#LastName', data.custom_form.Lastname);
    await page.type('#Email', data.custom_form.Email );
    await page.type('#Company', data.custom_form.Companyname );
    await page.type('#Number_of_Employees__c', data.custom_form.Companysize );
    await page.type('#Title', data.custom_form.Jobtitle );
    await page.type('#Phone', data.custom_form.Phone );
    await page.screenshot({
    path: 'custom.jpg',
    fullPage: true
    });
    await page.click('.mktoButton');
    
    console.log('Form Submitted');
    await page.waitFor(4000);
    await page.screenshot({
    path: 'custom-click.jpg',
    fullPage: true
    });
    await browser.close();
})();