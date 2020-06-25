import { LOADING, FIND_PRODUCT, STORE_PRODUCT } from './Product.types';
import { Dispatch } from 'redux';
import getData from './Product.api';

export const fetchProduct = (productName: string) => async (dispatch: Dispatch): Promise<void> => {
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

export const storeProduct = (product: string) => (dispatch: Dispatch): void => {
	dispatch({
		type: STORE_PRODUCT,
		payload: product
	});
};
