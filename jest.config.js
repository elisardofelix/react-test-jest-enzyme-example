module.exports = {
	clearMocks: true,
	coverageDirectory: "coverage",
	testRegex: "/Tests/.*test\\.(js|jsx)$",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.jsx?$": "babel-jest",
		"^.+\\.js?$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(gif|ttf|eot|svg|png)$": "<rootDir>/Tests/__mocks__/fileMock.js",
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
	setupFilesAfterEnv: ["<rootDir>/Tests/setup.js"],
};
