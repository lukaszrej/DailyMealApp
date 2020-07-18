import { AppState } from '../index';

export const getMeals = (state: AppState) => state.meal.meals;
export const getIsMealAdded = (state: AppState) => state.meal.isMealAdded;
