import { allStartActionTypes, START_APP, REMOVE_WELCOME_ALERT, SHOW_STEPPER, REMOVE_STEPPER } from './Start.types';

interface StartState {
	started: boolean;
	showAlert: boolean;
	showStepper: boolean;
}

export const initialState: StartState = {
	started: false,
	showAlert: false,
	showStepper: true
};

export const StartReducer = (state: StartState = initialState, action: allStartActionTypes) => {
	switch (action.type) {
		case START_APP:
			return {
				...state,
				started: true,
				showAlert: true
			};
		case REMOVE_WELCOME_ALERT:
			return {
				...state,
				showAlert: false
			};
		case REMOVE_STEPPER:
			return {
				...state,
				showStepper: false
			};
		case SHOW_STEPPER:
			return {
				...state,
				showStepper: true
			};
		default:
			return state;
	}
};
