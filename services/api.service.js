import axios from "axios";
import https from "https";
import { getKeyValue } from "./storage.service.js";

export async function getWeather(city) {
	// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
	const token = await getKeyValue("token");
	if (!token) {
		throw new Error("No API key, set it via command -t [API_KEY]");
	}

	const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
		params: {
			q: city,
			appid: token,
			lang: "en",
			units: "metric"
		}
	});

	return data;
	
	// const url = new URL("https://api.openweathermap.org/data/2.5/weather");
	// url.searchParams.append("q", city);
	// url.searchParams.append("appid", token);
	// url.searchParams.append("lang", "en");
	// url.searchParams.append("units", "metric");
	// https.get(url, (res) => {
	// 	let result = "";

	// 	res.on("data", (chunk) => {
	// 		result += chunk;
	// 	});

	// 	res.on("end", () => {
	// 		console.log(result);
	// 	});
	// });
}

export function getIcon(icon) {
	switch (icon.slice(0, -1)) {
		case "01":
			return "☀️";
		case "02":
			return "🌤️";
		case "03":
			return "☁️";
		case "04":
			return "☁️";
		case "09":
			return "🌧️";
		case "10":
			return "🌦️";
		case "11":
			return "🌩️";
		case "13":
			return "❄️";
		case "50":
			return "🌫️";
	}
}