const puppeteer = require('puppeteer');
var urldata = require('./add_url.json');
var data = require('./data.json');
//npm install dateformat
var dateFormat = require('dateformat');
(async() => {  

    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox'],headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    for(var myKey in urldata) {
       var date=dateFormat(new Date(), "yyyy-mm-dd");
       var time=dateFormat(new Date(), "h-MM-ss");
       console.log("key:"+myKey+", value:"+urldata[myKey]);
        var keyvalue = data[myKey].Email;
        await page.goto(urldata[myKey], {waitUntil: 'networkidle2'});

        if( myKey == "footer_newsletter" ){
            if (await page.$('#email') !== null){
                await page.type('#email', keyvalue);
            }
        }
        if (await page.$('.rsvp-button') !== null){
            await page.click('.rsvp-button');
        }
        if (await page.$('#FirstName') !== null){
            await page.type('#FirstName', data[myKey].Firstname);
        }
        if (await page.$('#LastName') !== null){
            await page.type('#LastName', data[myKey].Lastname);
        }
        if (await page.$('#Email') !== null){
            await page.type('#Email', data[myKey].Email);
        }
        if (await page.$('#Title') !== null){
            await page.type('#Title', data[myKey].Jobtitle);
        }
        if (await page.$('#Company') !== null){
            await page.type('#Company', data[myKey].Companyname);
        }
        if (await page.$('#Number_of_Employees_Range__c') !== null){
            await page.type('#Number_of_Employees_Range__c', data[myKey].Companysize);
        }
        if (await page.$('#Phone') !== null){
            await page.type('#Phone', data[myKey].Phone);
        }
        if (await page.$('#Nature_of_Inquiry__c') !== null){
            await page.type('#Nature_of_Inquiry__c', data[myKey].nature_of_inquiry);
        }
        if (await page.$('#Inquiry_Detials__c') !== null){
            await page.type('#Inquiry_Detials__c', data[myKey].inquiry_details);
        }

        await page.screenshot({
        path: './Screenshots/'+myKey+'__'+date+'__'+time+'.jpg',
        fullPage: true
        });
        if( myKey !== "footer_newsletter" ){
            await page.click('.mktoButton');
        }else{
            await page.click('input[type="submit"]');
        }
        await page.waitFor(4000);
        await page.screenshot({
        path: './Screenshots/'+myKey+'-click__'+date+'__'+time+'.jpg',
        fullPage: true
        });

        console.log('Form Submitted');
                
    }
    await browser.close();
})();
// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });