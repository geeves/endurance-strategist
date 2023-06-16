import Circuit from "./Circuit";

interface RaceEvent {
	raceEventId: number,
	uuid: string,
	dateStart: string,
	dateEnd: string,
	eventDuration: number, // minutes
	name: string,
	circuit: Circuit
}

export default RaceEvent;
