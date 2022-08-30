import chalk from "chalk";
import dedent from "dedent-js";
import { getWeather, getIcon } from "./api.service.js";
import { getKeyValue } from "./storage.service.js";

const { bgRed, bgGreen, bgCyan, bgYellow } = chalk;

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

export async function printWeather() {
	try {
		const city = await getKeyValue("city");
		const data = await getWeather(city);
		console.log(
			dedent
			`
			${bgYellow(" WEATHER ")} City: ${data.name}
			${getIcon(data.weather[0].icon)}  ${data.weather[0].description}
			Temperature: ${data.main.temp} (feels like ${data.main.feels_like})
			Humidity: ${data.main.humidity}
			Wind speed: ${data.wind.speed}
			`
		);
	} catch(e) {
		if (e?.response?.status == 404) {
			printError("Wrong city");
		} else if (e?.response?.status == 401) {
			printError("Wrong token");
		} else {
			printError(e.message);
		}
	}
}

//   coord: { lon: 32, lat: 51 },
//   weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' } ],
//   base: 'stations',
//   main: {
//     temp: 27.19,
//     feels_like: 27.35,
//     temp_min: 27.19,
//     temp_max: 27.19,
//     pressure: 1014,
//     humidity: 46,
//     sea_level: 1014,
//     grnd_level: 1000
//   },
//   visibility: 10000,
//   wind: { speed: 6.01, deg: 269, gust: 7.24 },
//   dt: 1661849560,
//   timezone: 10800,
//   id: 710734,
//   name: 'Chernihiv',
//   cod: 200