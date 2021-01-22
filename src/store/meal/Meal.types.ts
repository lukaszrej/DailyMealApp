import { Meal } from '../../types';

export const STORE_MEAL = 'STORE_MEAL';
export interface StoreMealAction {
	type: typeof STORE_MEAL;
	payload: Meal[];
}

export const SET_IS_MEAL_ADDED = 'SET_IS_MEAL_ADDED';
export interface SetIsMealAddedAction {
	type: typeof SET_IS_MEAL_ADDED;
}

export const REMOVE_MEAL = 'REMOVE_MEAL';
export interface RemoveMealAction {
    type: typeof REMOVE_MEAL; 
    payload: Meal[];
}

export type allMealActions =
	StoreMealAction |
    SetIsMealAddedAction |
    RemoveMealAction;
