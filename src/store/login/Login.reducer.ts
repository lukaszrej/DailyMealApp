import * as type from './Login.types';

interface LoginState {
	started: string | boolean | null;
	showAlert: boolean;
	showStepper: boolean;
}

const initialState: LoginState = {
	started: localStorage.getItem('started') ? localStorage.getItem('started') : false,
	showAlert: false,
	showStepper: true
};

export const LoginReducer = (state: LoginState = initialState, action: type.allLoginActions) => {
	switch (action.type) {
		case type.START_APP:
			return {
				...state,
				started: true,
				showAlert: true
			};
		case type.REMOVE_WELCOME_ALERT:
			return {
				...state,
				showAlert: false
			};
		case type.REMOVE_STEPPER:
			return {
				...state,
				showStepper: false
			};
		case type.SHOW_STEPPER:
			return {
				...state,
				showStepper: true
			};
		case type.END_APP:
			return {
				...state,
				started: false
			};
		default:
			return state;
	}
};
