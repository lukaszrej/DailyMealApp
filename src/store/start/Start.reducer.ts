import { allStartActionTypes, HIDE_WELCOME_MESSAGE, START } from './Start.types';

export const initialState = {
	started: false,
	showMessage: false
};

export const StartReducer = (state = initialState, action: allStartActionTypes) => {
	switch (action.type) {
		case START:
			return {
				...state,
				started: action.payload.started,
				showMessage: action.payload.show
			};
		case HIDE_WELCOME_MESSAGE:
			return {
				...state,
				showMessage: false
			};
		default:
			return state;
	}
};
