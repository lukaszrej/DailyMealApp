import { START, HIDE_WELCOME_MESSAGE } from './Start.types';
import { Dispatch } from 'redux';

export const start = (started: boolean, show: boolean) => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: START,
			payload: { started, show }
		});
	};
};

export const hideWelcomeMessage = (showMessage: boolean) => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: HIDE_WELCOME_MESSAGE,
			payload: showMessage
		});
	};
};
