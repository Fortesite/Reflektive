const puppeteer = require('puppeteer');
var data = require('./data.json');
// const url = process.argv[2]

// if ( !url ) {
//     console.error('Please Enter URL of page.')
//     process.exit(1)
// }

(async() => {  

    const browser = await puppeteer.launch({headless: true,args: ['--no-sandbox', '--disable-setuid-sandbox'],ignoreDefaultArgs: ['--disable-extensions']});
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36');
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('http://mywebdev.a2hosted.com/wft/test.html', {waitUntil: 'networkidle2'});

    await page.type('#FirstName', data.contact.Firstname);
    await page.type('#LastName', data.contact.Lastname);
    await page.type('#Email', data.contact.Email);
    await page.type('#Title', data.contact.Jobtitle);
    await page.type('#Company', data.contact.Companyname);
    await page.type('#Number_of_Employees_Range__c', data.contact.Companysize);
    await page.type('#Phone', data.contact.Phone);
    await page.type('#Nature_of_Inquiry__c', data.contact.nature_of_inquiry);
    await page.type('#Inquiry_Detials__c', data.contact.inquiry_details);
    await page.screenshot({
    path: 'contact-us.jpg',
    fullPage: true
    });
    await page.click('.mktoButton');
    
    console.log('Form Submitted');
    await page.waitFor(4000);
    await page.screenshot({
    path: 'contact-us-click.jpg',
    fullPage: true
    });
    await browser.close();
})();