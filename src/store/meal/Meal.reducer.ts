import { MealState, STORE_MEAL, SET_IS_MEAL_ADDED, allMealActions } from './Meal.types';
import { Product } from '../../store/product/Product.types';

const initialState: MealState = {
	meals: [] as Product[],
	isMealAdded: false
};

export const MealReducer = (state: MealState = initialState, action: allMealActions) => {
	switch (action.type) {
		case STORE_MEAL:
			return {
				...state,
				meals: action.payload
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
