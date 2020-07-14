import { allMealActionTypes, STORE_MEAL } from './Meal.types';

export const initialState = {};

export const MealReducer = (state = initialState, action: allMealActionTypes) => {
	switch (action.type) {
		case STORE_MEAL:
			return {
				...state,
				state
			};
		default:
			return state;
	}
};
