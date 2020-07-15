import { allMealActionTypes, STORE_MEAL } from './Meal.types';
import { Product } from '../../store/product/Product.types';

interface MealState {
	meals: Array<Product>;
}

export const initialState: MealState = {
	meals: []
};

export const MealReducer = (state = initialState, action: allMealActionTypes) => {
	switch (action.type) {
		case STORE_MEAL:
			return {
				...state,
				meals: [...state.meals, action.payload]
			};
		default:
			return state;
	}
};
