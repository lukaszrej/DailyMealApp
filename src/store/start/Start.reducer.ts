import { allStartActionTypes, START, HIDE_ALERT } from './Start.types';

export const initialState = {
	started: false,
	showAlert: false
};

export const StartReducer = (state = initialState, action: allStartActionTypes) => {
	switch (action.type) {
		case START:
			return {
				...state,
				started: true,
				showAlert: true
			};
		case HIDE_ALERT:
			return {
				...state,
				showAlert: false
			};
		default:
			return state;
	}
};
