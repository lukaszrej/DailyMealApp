import { LOADING, FOUND_PRODUCTS } from './Product.types';
import getData from './Product.api';

export const fetchProduct = (productName: string) => async (dispatch: Function) => {
	dispatch({
		type: LOADING
	});

	try {
		const response = await getData(productName);

		dispatch({
			type: FOUND_PRODUCTS,
			payload: response.data.hints
		});

		!response.data.hints.length && alert('nothing found');
	} catch (error) {
		console.warn('server problem, error -> ', error);
	}
};
