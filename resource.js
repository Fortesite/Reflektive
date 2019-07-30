const puppeteer = require('puppeteer');

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

    await page.type('#FirstName', 'FirstName');
    await page.type('#LastName', 'LastName');
    await page.type('#Email', 'lstiris@reflektive.com');
    await page.type('#Company', 'Reflektive');
    await page.type('#Number_of_Employees_Range__c', '501-1000');
    await page.type('#DSCORGPKG__Job_Function__c', 'Human Resources');
    await page.type('#DSCORGPKG__Management_Level__c', 'Management');
    await page.click('.mktoButton')
    
    // await page.evaluate(() => {
    //   window.scrollBy(0, window.innerHeight);
    // })
    //await page.waitFor(10000);
    await page.screenshot({
    path: 'Resources.jpg',
    fullPage: true
    });
    //await page.pdf({path: 'YE.pdf', format: 'A4'});
    console.log('Form Submitted');
    await page.waitFor(4000);
    await page.screenshot({
    path: 'Resources-click.jpg',
    fullPage: true
    });
    await browser.close();
})();