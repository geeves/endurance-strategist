import { EventInfo } from "../model/EventInfo";
import { Connection, Constants } from "./index";

const { db } = Connection;

type Nullable<T> = T | null;

interface AppState {
	eventInfo: Nullable<EventInfo>,
	count: number;
}

const store: AppState = {
	eventInfo: {
		eventId: "FEEDFACE",
		specialEventId: 0,
		iRacingSessionId: 0
	},
	count: 0
};

const getEventInfo = () => {
	return db.get(Constants.EVENT_INFO)
		.then(function(info: EventInfo): EventInfo {
			if (undefined === info) {
				return {
					eventId: "CAFEDEAD",
					specialEventId: 0,
					iRacingSessionId: 0
				};
			}
			return info;
		}).catch(function(err: any) {
			console.log(err);
		});
};

export {
	getEventInfo
};
export default store;
