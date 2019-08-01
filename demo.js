const puppeteer = require('puppeteer');
let page;

async function getBrowserPage() {
  // Launch headless Chrome. Turn off sandbox so Chrome can run under root.
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  return browser.newPage();
}

exports.screenshot = async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.send('Please provide URL as GET parameter, for example: <a href="?url=https://example.com">?url=https://example.com</a>');
  }

  if (!page) {
    page = await getBrowserPage();
  }

  await page.goto(url);
  const imageBuffer = await page.screenshot();
  res.set('Content-Type', 'image/png');
  res.send(imageBuffer);
};
// const puppeteer = require('puppeteer');
// var data = require('./data.json');

// (async() => {  

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setViewport({ width: 1280, height: 800 })
//     await page.goto("https://reflektivedev.wpengine.com/contact/", {waitUntil: 'networkidle2'});

//     await page.waitFor(10000);
//     if (await page.$('#FirstName') !== null){
//         await page.type('#FirstName', data.contact.Firstname);
//     }
//     if (await page.$('#LastName') !== null){
//        await page.type('#LastName', data.contact.Lastname);
//     }

// if (await page.$('#Email') !== null){
//         await page.type('#Email', data.contact.Email);
//     }

// if (await page.$('#Title') !== null){
//        await page.type('#Title', data.contact.Jobtitle);
//     }

// if (await page.$('#Company') !== null){
//         await page.type('#Company', data.contact.Companyname);
//     }

// if (await page.$('#Number_of_Employees_Range__c') !== null){
//        await page.type('#Number_of_Employees_Range__c', data.contact.Companysize);
//     }
// if (await page.$('#Phone') !== null){
//       await page.type('#Phone', data.contact.Phone);
//     }
//     if (await page.$('#Nature_of_Inquiry__c') !== null){
//        await page.type('#Nature_of_Inquiry__c', data.contact.nature_of_inquiry);
//     }
//     if (await page.$('#Inquiry_Detials__c') !== null){
//        await page.type('#Inquiry_Detials__c', data.contact.inquiry_details);
//     }
    
//     await page.screenshot({
//     path: 'contact-us.jpg',
//     fullPage: true
//     });
//      if (await page.$('.mktoButton') !== null){
//        await page.click('.mktoButton');
//     }
    
    
//     console.log('Form Submitted');
//     await page.waitFor(1000);
//     await page.screenshot({
//     path: 'contact-us-click.jpg',
//     fullPage: true
//     });
//     await browser.close();
// })();