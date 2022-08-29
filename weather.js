#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

async function saveToken(token) {
	try {
		await saveKeyValue("token", token);
		printSuccess("Token has been saved");
	} catch(e) {
		printError(e.message);
	}
}

function initCLI() {
	const args = getArgs(process.argv);
	if (args.h) {
		printHelp();
	}
	if (args.c) {
	}
	if (args.t) {
		return saveToken(args.t);
	}
}

initCLI();