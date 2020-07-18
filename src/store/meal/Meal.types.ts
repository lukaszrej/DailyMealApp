import { Product } from '../product/Product.types';

export const STORE_MEAL = 'STORE_MEAL';
export interface StoreMealAction {
	type: typeof STORE_MEAL;
	payload: Array<Product>;
}

export const SET_IS_MEAL_ADDED = 'SET_IS_MEAL_ADDED';
export interface SetIsMealAddedAction {
	type: typeof SET_IS_MEAL_ADDED;
}

export type allMealActionTypes = StoreMealAction | SetIsMealAddedAction;
