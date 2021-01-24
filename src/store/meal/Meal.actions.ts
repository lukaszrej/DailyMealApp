import { Dispatch } from 'redux';
import { generate } from 'shortid';
import { Product } from '../../types';
import { AppState } from '../index';
import * as type from './Meal.types';

export const storeMeal = (products: Product[]) => (dispatch: Dispatch, getState: Function) => {
	const state: AppState = getState();
    const storedMeals = state.meal.meals;
    
	const meal = {
		products,
		id: generate()
	};

	dispatch({
		type: type.STORE_MEAL,
		payload: [ ...storedMeals, meal ]
	});
};

export const storeToLocalStorage = () => (dispatch: Dispatch, getState: Function) => {
	const state: AppState = getState();
	const meals = state.meal.meals;

	localStorage.setItem('meals', JSON.stringify(meals));
};

export const setIsMealAdded = () => ({
	type: type.SET_IS_MEAL_ADDED
});

export const removeMeal = (mealId: string) => (dispatch: Dispatch, getState: Function) => {
	const state: AppState = getState();
	const meals = state.meal.meals;

    const filteredMeals = meals.filter((meal) => meal.id !== mealId);

	dispatch({
		type: type.REMOVE_MEAL,
		payload: filteredMeals
	});
};

export const removeMealFromStorage = (mealId: string) => (dispatch: Dispatch, getState: Function) => {
	const state: AppState = getState();
	const meals = state.meal.meals;

	const filteredMeals = meals.filter((meal) => meal.id !== mealId);

	localStorage.setItem('meals', JSON.stringify(filteredMeals));
};
