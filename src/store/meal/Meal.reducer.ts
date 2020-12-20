import { STORE_MEAL, SET_IS_MEAL_ADDED, allMealActions } from './Meal.types';
import { Product } from '../product/Product.types';

interface MealState {
	meals: Array<Product[]>;
	isMealAdded: boolean;
}

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
