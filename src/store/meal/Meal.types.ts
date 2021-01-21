import { Meal } from '../../types';

export const STORE_MEAL = 'STORE_MEAL';
export interface StoreMealAction {
	type: typeof STORE_MEAL;
	payload: Meal;
}

export const SET_IS_MEAL_ADDED = 'SET_IS_MEAL_ADDED';
export interface SetIsMealAddedAction {
	type: typeof SET_IS_MEAL_ADDED;
}

export const DELETE_MEAL = 'DELETE_MEAL';
export interface DeleteMealAction {
    type: typeof DELETE_MEAL; 
    payload: Meal[];
}

export type allMealActions =
	StoreMealAction |
    SetIsMealAddedAction |
    DeleteMealAction;
