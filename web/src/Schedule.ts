import m from "mithril";
// @ts-ignore
import b from "bss";
import { LocalDateTime } from "@js-joda/core";
import { formatToTime, getLocalDateTime, RaceZones } from "./DateTime";

const DriverSchedule = "ul" + b`
	list-style: none;
`;

const DriverSelect = "li" + b`
	margin-bottom: 4px;
`;
const DriverLabel = "label" + b`
	display: inline-block;
	width: 225px; 
`;

const raceInfo = {
	raceStart: "2024-08-17T18:15:00",
	raceEnd: "2024-08-18T18:15:00",
	raceLength: 86400,
	averageLapTime: 241,
	averagePitTime: 80
};

const carInfo = {
	name: "Ferrari 296",
	fuelCapacity: 104, //liters
	averageFuelPerLap: 7.75
};

const driversInfo = {
	averageLapTime: 241,
	roster: [
		{ id: -1, name: "Select Driver" },
		{ id: 1, name: "Obi-Wan Kenobi", averageLapTime: 241, timeZone: RaceZones.EST },
		{ id: 2, name: "Luke Skywalker", averageLapTime: 241, timeZone: RaceZones.HST },
		{ id: 3, name: "Kannan Jarrus", averageLapTime: 241, timeZone: RaceZones.PST },
		{ id: 4, name: "Ezra Bridger", averageLapTime: 241, timeZone: RaceZones.CET }
	]
};

interface StintEstimate {
	numberOfStints: number,
	estimatedStintTime: number
}

function computeEstimates(): StintEstimate {
	const expectedLapsPerStint = Math.floor(carInfo.fuelCapacity / carInfo.averageFuelPerLap);
	const estimatedStintTime = (raceInfo.averageLapTime * expectedLapsPerStint) + raceInfo.averagePitTime;
	return {
		numberOfStints: Math.ceil(raceInfo.raceLength / estimatedStintTime),
		estimatedStintTime
	};
}

function stintDriver() {
	return driversInfo.roster.map(driver => m("option", { "data-id": driver.id, value: driver.id }, driver.name));
}


function DriverSelection(): any {
	const stintEstimate = computeEstimates();
	let s = [];
	let t = 0;
	const startDateTime: LocalDateTime = getLocalDateTime(raceInfo.raceStart);
	for (let i = 0; i < stintEstimate.numberOfStints; i++) {
		const num = i + 1;
		const start = startDateTime.plusSeconds(t);
		t = t + stintEstimate.estimatedStintTime;
		const end = startDateTime.plusSeconds(t);
		s.push(m(DriverSelect, [
			m(DriverLabel, `${num} - ${formatToTime(start)} to ${formatToTime(end)}`),
			m("select", {
					id: `stint-${num}`,
					"data-stintnumber": num,
					"data-race-start": start,
					"data-race-end": end
				}, stintDriver()
			)
		]));

	}
	return s;
}


const Schedule = {
	view: () => {
		return m("div", [
			m("h2", "Driver Schedule"),
			m("form", [
				m(DriverSchedule, DriverSelection())
			])
		]);
	}
};

export default Schedule;
