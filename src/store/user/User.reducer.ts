import { allUserActions, CREATE_USER, CALCULATE_DAILY_NEED } from './User.types';

const localStorageUser = JSON.parse(localStorage.getItem("user") as string);

export interface UserState {
	name: string;
	height: string;
	weight: string;
	age: string;
	gender: string;
	activityLevel: string;
	dailyNeed: number;
}

const initialState: UserState = {
	name: localStorageUser ? localStorageUser.name : '',
	height: localStorageUser ? localStorageUser.height : '',
	weight: localStorageUser ? localStorageUser.weight : '',
	age: localStorageUser ? localStorageUser.age : '',
	gender: localStorageUser ? localStorageUser.gender : 'male',
	activityLevel: localStorageUser ? localStorageUser.activityLevel : '1.2',
	dailyNeed: localStorageUser ? localStorageUser.dailyNeed : 0
};

export const UserReducer = (state: UserState = initialState, action: allUserActions) => {
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
