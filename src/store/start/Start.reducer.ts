import { allStartActionTypes, HIDE_WELCOME_MESSAGE, START } from './Start.types';

export const initialState = {
	started: false,
	showAlert: false
};

export const StartReducer = (state = initialState, action: allStartActionTypes) => {
	switch (action.type) {
		case START:
			return {
				...state,
				started: action.payload.started,
				showAlert: action.payload.show
			};
		case HIDE_WELCOME_MESSAGE:
			return {
				...state,
				showAlert: false
			};
		default:
			return state;
	}
};
