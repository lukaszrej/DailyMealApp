import { Product } from '../../types';

export const STORE_MEAL = 'STORE_MEAL';
export interface StoreMealAction {
	type: typeof STORE_MEAL;
	payload: { 
        products: Product[];
        id: string;
    };
}

export const SET_IS_MEAL_ADDED = 'SET_IS_MEAL_ADDED';
export interface SetIsMealAddedAction {
	type: typeof SET_IS_MEAL_ADDED;
}

export type allMealActions =
	StoreMealAction |
	SetIsMealAddedAction;
