import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";

const dtPattern: string = "yyyy-MM-ddTHH:mm:ss";
const precisePattern: string = "yyyy-MM-ddTHH:mm:ss.SSSZ";

let foo = DateTimeFormatter.ISO_LOCAL_DATE_TIME;

export enum RaceZones {
	CET = "Europe/Berlin",
	LONDON = "Europe/London",
	GMT = "GMT",
	EST = "US/Eastern",
	CST = "US/Central",
	MST = "US/Mountain",
	ARIZONA = "US/Arizona",
	PST = "US/Pacific",
	AKST = "US/Alaska",
	HST = "US/Hawaii",
	ACST = "Australia/Adelaide",
	AEST = "Australia/Brisbane"
}

export function getLocalDateTime(datetime: string) {
	return LocalDateTime.parse(datetime);
}

export function formatToTime(datetime: LocalDateTime) {
	return datetime.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
}

function secondsToMinutes(seconds: number) {

}

export function twentyFourHours(): string[] {
	let ten: number = 10;
	return [...Array(24)].map((_, i) => {
		return (ten > i) ? `0${i}` : `${i}`;
	});
}

export function intervalFifteenMinutes(): string[] {
	return ["00", "15", "30", "45"];
}

export function intervalTenMinutes(): string[] {
	return ["00", "10", "20", "30", "40", "50"];
}


