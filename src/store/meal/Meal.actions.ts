import { STORE_MEAL, SET_IS_MEAL_ADDED } from './Meal.types';
import { Product } from '../../store/product/Product.types';

export const storeMeal = (meal: Product[]) => ({
	type: STORE_MEAL,
	payload: meal
});

export const setIsMealAdded = () => ({
	type: SET_IS_MEAL_ADDED
});
