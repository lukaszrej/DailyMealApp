import { LOADING, FOUND_PRODUCTS, allFetchProductActionTypes } from './Product.types';

export const initialState = {
	isLoading: false,
	productsFound: []
};

export const ProductReducer = (state = initialState, action: allFetchProductActionTypes) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				isLoading: true
			};
		case FOUND_PRODUCTS:
			return {
				...state,
				productsFound: action.payload,
				isLoading: false
			};
		default:
			return state;
	}
};
