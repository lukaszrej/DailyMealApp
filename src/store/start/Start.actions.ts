import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { START_APP, REMOVE_WELCOME_ALERT, SHOW_STEPPER, REMOVE_STEPPER } from './Start.types';

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
