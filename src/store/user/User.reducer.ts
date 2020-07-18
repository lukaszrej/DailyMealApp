import { allUserActionTypes, CREATE_USER, CALCULATE_DAILY_NEED } from './User.types';

interface UserDetailsState {
	name: string;
	height: string;
	weight: string;
	age: string;
	gender: string;
	activityLevel: string;
	dailyNeed: number;
}

export const initialState: UserDetailsState = {
	name: '',
	height: '',
	weight: '',
	age: '',
	gender: 'male',
	activityLevel: '1.2',
	dailyNeed: 0
};

export const UserReducer = (state: UserDetailsState = initialState, action: allUserActionTypes) => {
	switch (action.type) {
		case CREATE_USER:
			return {
				...state,
				name: action.name,
				height: action.height,
				weight: action.weight,
				age: action.age,
				gender: action.gender,
				activityLevel: action.activityLevel
			};
		case CALCULATE_DAILY_NEED:
			return {
				...state,
				dailyNeed: action.payload
			};
		default:
			return state;
	}
};
