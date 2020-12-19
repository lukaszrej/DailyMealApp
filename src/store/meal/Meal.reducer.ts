import { MealState, STORE_MEAL, SET_IS_MEAL_ADDED, allMealActions } from './Meal.types';

const initialState: MealState = {
	meals: [],
	isMealAdded: false
};

export const MealReducer = (state: MealState = initialState, action: allMealActions) => {
	switch (action.type) {
		case STORE_MEAL:
			return {
				...state,
				meals: [...state.meals, action.payload]
			};
		case SET_IS_MEAL_ADDED:
			return {
				...state,
				isMealAdded: true
			};
		default:
			return state;
	}
};
