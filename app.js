const http = require('http');
const port = process.env.PORT || 3000
const puppeteer = require('puppeteer');
var urll = req.query.url;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});

(async() => {  

    const browser = await puppeteer.launch({headless: false,args: ['--no-sandbox', '--disable-setuid-sandbox'],ignoreDefaultArgs: ['--disable-extensions']});
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36');
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto(urll, {waitUntil: 'networkidle2'});

    await page.type('#FirstName', "sefsrdfrf");
    await page.type('#LastName', "sefsrdfrf");
    await page.type('#Email', "sefsrdfrf@gmil.com");
    await page.type('#Title', "sefsrdfrf");
    await page.type('#Company', "sefsrdfrf");
    await page.type('#Number_of_Employees_Range__c', "sefsrdfrf");
    await page.type('#Phone', "sefsrdfrf");
    await page.type('#Nature_of_Inquiry__c', "sefsrdfrf");
    await page.type('#Inquiry_Detials__c', "sefsrdfrf");
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