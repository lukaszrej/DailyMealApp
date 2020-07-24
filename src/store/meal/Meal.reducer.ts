import { STORE_MEAL, SET_IS_MEAL_ADDED, allMealActionTypes } from './Meal.types';
import { Product } from '../../store/product/Product.types';

interface MealState {
	meals: (Product | any)[];
	isMealAdded: boolean;
}

export const initialState: MealState = {
	meals: [],
	isMealAdded: false
};

export const MealReducer = (state: MealState = initialState, action: allMealActionTypes) => {
	switch (action.type) {
		case STORE_MEAL:
			return {
				...state,
				meals: [ ...state.meals, action.payload ]
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
