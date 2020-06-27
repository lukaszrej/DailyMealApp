import { START, HIDE_ALERT } from './Start.types';
import { Dispatch } from 'redux';

export const start = () => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: START
		});
	};
};

export const hideAlert = () => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: HIDE_ALERT
		});
	};
};
