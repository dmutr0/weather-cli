import chalk from "chalk";
import dedent from "dedent-js";

const { bgRed, bgGreen, bgCyan } = chalk;

export function printError(error) {
	console.log(`${bgRed(" ERROR ")} ${error}`);
}

export function printSuccess(message) {
	console.log(`${bgGreen(" SUCCESS ")} ${message}`);
}

export function printHelp() {
	console.log(
		dedent`
		${bgCyan(" HELP ")}
		No parameters - weather output
		-c [CITY] to set the city
		-h to call a help
		-t [API_KEY] to save the token
		`);
}