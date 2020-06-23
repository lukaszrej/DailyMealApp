export const LOADING = 'LOADING';
export interface LoadingProductsAction {
	type: typeof LOADING;
}

export const FIND_PRODUCT = 'FIND_PRODUCT';
export interface FindProductAction {
	type: typeof FIND_PRODUCT;
	payload: Array<Object>;
}

export const STORE_PRODUCT = 'STORE_PRODUCT';
export interface StoreProductAction {
	type: typeof STORE_PRODUCT;
	payload: string;
}

export type allProductActionTypes = LoadingProductsAction | FindProductAction | StoreProductAction;
