import {
	allLoginActions,
	LoginState,
	START_APP,
	END_APP,
	REMOVE_WELCOME_ALERT,
	SHOW_STEPPER,
	REMOVE_STEPPER
} from './Login.types';


const initialState: LoginState = {
	started: localStorage.getItem('started') ? localStorage.getItem('started') : false,
	showAlert: false,
	showStepper: true
};

export const LoginReducer = (state: LoginState = initialState, action: allLoginActions) => {
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
		case END_APP:
			return {
				...state,
				started: false
			};
		default:
			return state;
	}
};
