import { Dispatch } from 'redux';
import { Product } from '../../types';
import * as type from './Meal.types';

export const storeMeal = (meal: Product[]) => ({
	type: type.STORE_MEAL,
	payload: meal
});

export const storeToLocalStorage = () => (dispatch: Dispatch, getState: Function) => {
	const state = getState();
	const meals = state.meal.meals;

	localStorage.setItem("meals", JSON.stringify(meals));
}

export const setIsMealAdded = () => ({
	type: type.SET_IS_MEAL_ADDED
});

