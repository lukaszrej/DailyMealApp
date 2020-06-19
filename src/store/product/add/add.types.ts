// action constants
export const ADD_PRODUCT = 'ADD_PRODUCT';

// types
export interface AddProductAction {
	type: typeof ADD_PRODUCT;
	payload?: any;
}

export type allAddProductActionTypes = AddProductAction;
