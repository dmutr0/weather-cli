#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {  printHelp, printWeather } from "./services/log.service.js";
import { saveCity, saveToken } from "./services/save.service.js";

function initCLI() {
	const args = getArgs(process.argv);
	if (args.h) {
		printHelp();
	}
	if (args.c) {
		return saveCity(args.c);
	}
	if (args.t) {
		return saveToken(args.t);
	}
	printWeather();
}

initCLI();

