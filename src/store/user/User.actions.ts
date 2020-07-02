import { UserAction, USER } from './User.types';
import { Dispatch } from 'redux';

export const createUser = ({ name, height, weight, age, gender, activityLevel }: UserAction) => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: USER,
			name,
			height,
			weight,
			age,
			gender,
			activityLevel
		});
	};
};
