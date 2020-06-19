// action constants
export const ADD_PRODUCT = 'ADD_PRODUCT';

// types
export interface ProductAction {
	type: typeof ADD_PRODUCT;
	payload?: any;
}

export type allProductActionTypes = ProductAction;
