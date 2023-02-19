const config = {
	verbose: true,
	testEnvironment: "jest-environment-node",
	testMatch: ["**/?(*.)+(spec|test).[t]s?(x)"],
	testPathIgnorePatterns: ["node_modules", "coverage"],
	// you must let jest transform and don't compile by your tsc, because it's very possible that you run the test without compiling first, so the test will run on the old compiled js files.
	transform: {
		"^.+\\.ts?$": "ts-jest",
		"^.+\\.ts?x$": "ts-jest",
	},
};

export default config;
