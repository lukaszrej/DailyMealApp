import { LOADING, FIND_PRODUCT, STORE_PRODUCT, DELETE_PRODUCT } from './Product.types';
import { Dispatch } from 'redux';
import { Product } from '../../store/product/Product.types';
import getData from './Product.api';

export const fetchProduct = (productName: string) => async (dispatch: Dispatch) => {
	dispatch({
		type: LOADING
	});

	try {
		const response = await getData(productName);

		dispatch({
			type: FIND_PRODUCT,
			payload: response.data.hints
		});

		!response.data.hints.length && alert('nothing found');
	} catch (error) {
		console.warn('server problem, error -> ', error);
	}
};

export const storeProduct = (product: Product) => (dispatch: Dispatch) => {
	dispatch({
		type: STORE_PRODUCT,
		payload: product
	});
};

export const deleteProduct = (product: Product) => (dispatch: Dispatch) => {
	dispatch({
		type: DELETE_PRODUCT,
		payload: product
	})
};
