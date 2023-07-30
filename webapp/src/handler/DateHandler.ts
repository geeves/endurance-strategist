import { LocalDateTime, DateTimeFormatter } from "@js-joda/core";

const dtPattern: string = "yyyy-MM-ddTHH:mm:ss";
const precisePattern: string = "yyyy-MM-ddTHH:mm:ss.SSSZ";

let foo = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

enum RaceZones {
	BERLIN = "Europe/Berlin",
	LONDON = "Europe/London",
	GMT = "GMT",
	EAST = "US/Eastern",
	CENTRAL = "US/Central",
	INDIANA = "US/Indiana-East",
	MOUNTAIN = "US/Mountain",
	ARIZONA = "US/Arizona",
	PACIFIC = "US/Pacific",
	HAWAII = "US/Hawaii"
}

function secondsToMinutes(seconds: number) {

}

export function twentyFourHours(): string[] {
	let ten: number = 10;
	return [...Array(24)].map((_, i) => {
		return (ten > i) ? `0${i}` : `${i}`
	})
}

export function intervalFifteenMinutes(): string[] {
	return ["00", "15", "30", "45"]
}

export function intervalTenMinutes(): string[] {
	return ["00", "10", "20", "30", "40", "50"]
}


