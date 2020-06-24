import { LOADING, FIND_PRODUCT, STORE_PRODUCT, allProductActionTypes } from './Product.types';

export const initialState = {
	isLoading: false,
	foundProducts: [],
	isAdding: false,
	storedProducts: []
};

export const ProductReducer = (state = initialState, action: allProductActionTypes) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				isLoading: true
			};
		case FIND_PRODUCT:
			return {
				...state,
				foundProducts: action.payload,
				isLoading: false
			};
		case STORE_PRODUCT:
			return {
				...state,
				storedProducts: [ ...state.storedProducts, action.payload ],
				isAdding: true,
				foundProducts: []
			};
		default:
			return state;
	}
};
