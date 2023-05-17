const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './cypress/cucumber-report/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '96'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
	}	
});