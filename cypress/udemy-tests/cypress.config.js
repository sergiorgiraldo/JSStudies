const { defineConfig } = require("cypress");
//const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = defineConfig({
	viewportHeight: 1080,
	viewportWidth: 1920,
	video: false,
	defaultCommandTimeout: 10000,
	projectId: "p1x2u9",
	experimentalWebKitSupport: true,
	env: {
		"username": 'cytest@test.com', 
		"password": 'Welcome123',
		"apiUrl": 'https://api.realworld.io',
		"cypress-plugin-snapshots": {
			imageConfig: {
				threshold: 0.01
			}
		}
	},

	e2e: {
		setupNodeEvents(on, config) {
		},
		baseUrl: "http://localhost:4200/",
		excludeSpecPattern: [
			"**/examples/*",
			"**/__snapshots__/*",
			"**/__image_snapshots__/*"
		],
		specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}"
	}
});
