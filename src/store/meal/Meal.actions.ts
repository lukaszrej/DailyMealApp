import { STORE_MEAL } from './Meal.types';
import { Product } from '../../store/product/Product.types';
import { Dispatch } from 'redux';

export const storeMeal = (meal: Array<Product>) => (dispatch: Dispatch) => {
	dispatch({
		type: STORE_MEAL,
		payload: meal
	});
};
