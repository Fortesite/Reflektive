const { Chromeless } = require('chromeless')
async function run() {
	const chromeless = new Chromeless()

	const screenshot = await chromeless
		.goto('https://reflektivedev.wpengine.com/resource/ultimate-guide-1-1s/')
		.type('Demo', '#FirstName')
		.type('Test', '#LastName')
		.type('Demo@gmail.com', '#Email')
		.type('content', '#Company')
		.type('251-500', '#Number_of_Employees_Range__c')
		.type('Human Resources', '#DSCORGPKG__Job_Function__c')
		.type('Management', '#DSCORGPKG__Management_Level__c')
		.setViewport({width: 1024, height: 3453})
		.screenshot({ fullpage: true,filePath: 'google-search.png', scrollbar: true })
		.click('.mktoButton')

	console.log(screenshot)
  	await chromeless.end()
}
run().catch()