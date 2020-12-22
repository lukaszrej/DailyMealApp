import * as type from './Meal.types';
import { Product } from '../../types';

interface MealState {
	meals: Array<Product[]>;
	isMealAdded: boolean;
}

const initialState: MealState = {
	meals: [],
	isMealAdded: false
};

export const MealReducer = (state: MealState = initialState, action: type.allMealActions) => {
	switch (action.type) {
		case type.STORE_MEAL:
			return {
				...state,
				meals: [...state.meals, action.payload]
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
