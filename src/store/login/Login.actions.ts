import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import {
	START_APP,
	END_APP,
	REMOVE_WELCOME_ALERT,
	SHOW_STEPPER,
	REMOVE_STEPPER
} from './Login.types';

export const startApp = () => ({
	type: START_APP
});

export const endApp = () => {
	return (dispatch: Dispatch) => {
		localStorage.clear();

		dispatch({
			type: END_APP
		});
	};
};

export const removeAlert = () => ({
	type: REMOVE_WELCOME_ALERT
});

export const showStepper = () => ({
	type: SHOW_STEPPER
});

export const removeStepper = () => ({
	type: REMOVE_STEPPER
});

export const useRemoveStepper = (seconds: number, setSeconds: React.Dispatch<React.SetStateAction<number>>) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((seconds: number) => seconds - 1);
		}, 1000);

		seconds === 0 && dispatch(removeStepper())

		return () => {
			clearInterval(interval);

		}
	}, [seconds, setSeconds, dispatch]);
};
