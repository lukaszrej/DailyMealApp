import { useEffect, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import * as type from './Login.types';

export const startApp = () => ({
	type: type.START_APP
});

export const endApp = () => {
	return (dispatch: Dispatch) => {
		localStorage.clear();

		dispatch({
			type: type.END_APP
		});
	};
};

export const showStepper = () => ({
	type: type.SHOW_STEPPER
});

export const removeStepper = () => ({
	type: type.REMOVE_STEPPER
});

export const useRemoveStepper = (seconds: number, setSeconds: React.Dispatch<SetStateAction<number>>) => {
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
