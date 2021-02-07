import { allLoginActions } from './Login.types';
import * as type from './Login.types';

interface LoginState {
	startedApp: boolean;
	displayedAlert: boolean;
	displayedStepper: boolean;
}

const initialState: LoginState = {
	startedApp: localStorage.getItem('started') ? JSON.parse(localStorage.getItem('started') as string) : false,
	displayedAlert: false,
	displayedStepper: localStorage.getItem('started') ? false : true,
};

export const LoginReducer = (state: LoginState = initialState, action: allLoginActions) => {
	switch (action.type) {
		case type.START_APP:
			return {
				...state,
				startedApp: true,
				displayedAlert: true
            };
            
		case type.REMOVE_WELCOME_ALERT:
			return {
				...state,
				displayedAlert: false
            };
            
		case type.REMOVE_STEPPER:
			return {
				...state,
				displayedStepper: false
            };
            
		case type.SHOW_STEPPER:
			return {
				...state,
				displayedStepper: true
            };
            
		case type.END_APP:
			return {
				...state,
				startedApp: false
            };
            
		default:
			return state;
	}
};
