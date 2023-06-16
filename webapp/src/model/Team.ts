import Driver from "./Driver";

interface Team {
	teamId: number,
	uuid: string,
	teamName: string,
	drivers: Driver[]
}

interface TeamDriver {
	id: number,
	teamId: number,
	driverId: number
}

export type { Team, TeamDriver };
