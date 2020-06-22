// action constants
export const LOADING = 'LOADING';
export const FOUND_PRODUCTS = 'FOUND_PRODUCTS';

// types
export interface LoadingProductsAction {
	type: typeof LOADING;
}

export interface FoundProductsAction {
	type: typeof FOUND_PRODUCTS;
	payload: Array<any>;
}

export type allFetchProductActionTypes = LoadingProductsAction | FoundProductsAction;
