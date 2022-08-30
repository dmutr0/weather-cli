import { printError, printSuccess } from "./log.service.js";
import { saveKeyValue } from "./storage.service.js";

export async function saveToken(token) {
	if (!token.length) {
		printError("Did not get the token");
		return;
	}
	try {
		await saveKeyValue("token", token);
		printSuccess("Token has been saved");
	} catch(e) {
		printError(e.message);
	}
}

export async function saveCity(city) {
	if (!city.length) {
		printError("Did not get the token");
		return;
	}
	try {
		await saveKeyValue("city", city);
		printSuccess("City has been saved");
	} catch(e) {
		printError(e.message);
	}
}

