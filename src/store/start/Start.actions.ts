import { START_APP, REMOVE_WELCOME_ALERT, SHOW_STEPPER, REMOVE_STEPPER } from './Start.types';
import { Dispatch } from 'redux';

export const startApp = () => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: START_APP
		});
	};
};

export const removeAlert = () => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: REMOVE_WELCOME_ALERT
		});
	};
};

export const showStepper = () => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: SHOW_STEPPER
		});
	};
};

export const removeStepper = () => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: REMOVE_STEPPER
		});
	};
};
