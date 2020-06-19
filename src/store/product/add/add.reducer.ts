import { ADD_PRODUCT, allAddProductActionTypes } from './add.types';

export const initialState = {
	productList: ''
};

export const AddProductReducer = (state = initialState, action: allAddProductActionTypes) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				productList: action.payload
			};
		default:
			return state;
	}
};
