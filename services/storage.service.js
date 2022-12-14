import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

export async function saveKeyValue(key, value) {
	let data = {};

	if (await IsExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file);
	}

	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
}

export async function getKeyValue(key) {
	if (await IsExist(filePath)) {
		const file = await promises.readFile(filePath);
		const data = JSON.parse(file);
		return data[key];
	}
	return undefined;
}

async function IsExist(path) {
	try {
		await promises.stat(path);
		return true;
	} catch(e) {
		return false;
	} 
}