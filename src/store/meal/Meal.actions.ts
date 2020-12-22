import { Product } from '../../types';
import * as type from './Meal.types';

export const storeMeal = (meal: Product[]) => ({
	type: type.STORE_MEAL,
	payload: meal
});

export const setIsMealAdded = () => ({
	type: type.SET_IS_MEAL_ADDED
});
