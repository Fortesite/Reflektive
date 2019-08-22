const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
 
nightmare
  .goto('https://www.reflektive.com/contact/')
  .type('#FirstName', 'Reflektive')
  .type('#LastName', 'Lastname')
  .type('#Email', 'email@gmail.com')
  .type('#Company', 'Company')
  .type('#Number_of_Employees__c', '251-500')
  .type('#Title', 'Demo')
  .type('#Phone', '9876543210')
  .click('.mktoButton')
  .end()
  .screenshot('demo.jpg')
  .wait(5000)
  .screenshot('demo-click.jpg')
  .then("Form Submited!")
  .catch(error => {
    console.error('Search failed:', error)
  })
 
