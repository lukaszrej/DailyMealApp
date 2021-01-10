import { generate } from 'shortid';
import { Meal } from '../../types';
import * as type from './Meal.types';

interface MealState {
	meals: {
        id: string;
        meals: Meal[];
    };
	isMealAdded: boolean;
}

const localStorageMeals = JSON.parse(localStorage.getItem("meals") as string);

const initialState: MealState = {
    meals: {
        meals: localStorageMeals ? localStorageMeals.meals : [],
        id: localStorageMeals ? localStorageMeals.id : ''
    },
	isMealAdded: localStorageMeals ? true : false
};

export const MealReducer = (state: MealState = initialState, action: type.allMealActions) => {
	switch (action.type) {
		case type.STORE_MEAL:
			return {
				...state,
				meals: {
                    meals: [...state.meals.meals, action.payload],
                    id: generate()
                }
            };
            
		case type.SET_IS_MEAL_ADDED:
			return {
				...state,
				isMealAdded: true
            };
            
		default:
			return state;
	}
};
