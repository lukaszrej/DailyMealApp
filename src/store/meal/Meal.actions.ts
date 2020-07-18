import { STORE_MEAL, SET_IS_MEAL_ADDED } from './Meal.types';
import { Product } from '../../store/product/Product.types';
import { Dispatch } from 'redux';

export const storeMeal = (meal: Array<Product>) => (dispatch: Dispatch) => {
	dispatch({
		type: STORE_MEAL,
		payload: meal
	});
};

export const setIsMealAdded = () => (dispatch: Dispatch) => {
	dispatch({
		type: SET_IS_MEAL_ADDED
	});
};
