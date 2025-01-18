const State = () => ({ eventInfo: {}});

const Actions = (state: any) => ({
	updateEventId: (uuid: string) => state.eventInfo.eventId = uuid,
	updateSpecialEventId: (specialEventId: number)=> state.eventInfo.specialEventId = specialEventId,
	updateSessionId: (iRacingSessionId: number)=> state.eventInfo.iRacingSessionId = iRacingSessionId,
});


export {State, Actions}
