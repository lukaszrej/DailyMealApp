import { FIND_PRODUCT, allFindProductActionTypes } from './Find.types';

export const initialState = {
	productToBeFound: ''
};

export const FindProductReducer = (state = initialState, action: allFindProductActionTypes) => {
	switch (action.type) {
		case FIND_PRODUCT:
			return {
				...state,
				productToBeFound: action.payload
			};
		default:
			return state;
	}
};
