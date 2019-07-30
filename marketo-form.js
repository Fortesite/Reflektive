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

    await page.type('#FirstName', data.marketo_form.Firstname);
    await page.type('#LastName', data.marketo_form.Lastname);
    await page.type('#Email', data.marketo_form.Email);
    await page.type('#Company', data.marketo_form.Companyname);
    await page.type('#Number_of_Employees__c', data.marketo_form.Companysize);
    await page.type('#Title', data.marketo_form.Jobtitle);
    await page.type('#Phone', data.marketo_form.Phone);
    await page.screenshot({
    path: 'marketo-form-1.jpg',
    fullPage: true
    });
    await page.click('.mktoButton');
    
    console.log('Form Submitted');
    await page.waitFor(4000);
    await page.screenshot({
    path: 'marketo-form-2.jpg',
    fullPage: true
    });
    await browser.close();
})();