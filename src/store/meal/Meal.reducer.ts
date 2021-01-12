import { Meal } from '../../types';
import * as type from './Meal.types';

interface MealState {
	meals: Meal[];
	isMealAdded: boolean;
}

const localStorageMeals = JSON.parse(localStorage.getItem('meals') as string);

const initialState: MealState = {
	meals: localStorageMeals ? localStorageMeals : [],
	isMealAdded: localStorageMeals ? true : false
};

export const MealReducer = (state: MealState = initialState, action: type.allMealActions) => {
	switch (action.type) {
		case type.STORE_MEAL:
			return {
				...state,
				meals: [ ...state.meals, action.payload ]
			};

		case type.SET_IS_MEAL_ADDED:
			return {
				...state,
				isMealAdded: true
			};

		default:
			return state;
	}
};
