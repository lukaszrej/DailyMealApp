import { Dispatch } from 'redux';
import { User } from '../../types';
import * as type from './User.types';

export const createUser = ({ name, height, weight, age, gender, activityLevel }: User) => ({
	type: type.CREATE_USER,
	name,
	height,
	weight,
	age,
	gender,
	activityLevel
});

export const calculateDailyNeed = ({ height, weight, age, gender, activityLevel }: User) => {
	return (dispatch: Dispatch) => {
		let dailyNeed: number = 0;

		if (gender === 'Male') {
			dailyNeed = Number(activityLevel) * (10 * Number(weight)) + 6.25 * Number(height) - 5 * Number(age) + 5;
		} else {
			dailyNeed = Number(activityLevel) * (10 * Number(weight)) + 6.25 * Number(height) - 5 * Number(age) - 166;
		}

		dispatch({
			type: type.CALCULATE_DAILY_NEED,
			payload: dailyNeed
		});
	};
};
