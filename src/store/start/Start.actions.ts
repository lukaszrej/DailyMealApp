import { START, HIDE_WELCOME_MESSAGE } from './Start.types';

export const start = (started: boolean, show: boolean) => {
	return (dispatch: Function) => {
		dispatch({
			type: START,
			payload: { started, show }
		});
	};
};

export const hideWelcomeMessage = (showMessage: boolean) => {
	return (dispatch: Function) => {
		dispatch({
			type: HIDE_WELCOME_MESSAGE,
			payload: showMessage
		});
	};
};
