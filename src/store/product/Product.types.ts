export interface Product {
	food: {
		foodId: string;
		label: string;
		nutrients: {
			CHOCDF: number;
			ENERC_KCAL: number;
			FAT: number;
			PROCNT: number;
		};
	};
}

export interface ProductsApiResponse {
	data: {
		hints: Array<Product>;
	};
}

export const LOADING = 'LOADING';
export interface LoadingProductsAction {
	type: typeof LOADING;
}

export const FIND_PRODUCT = 'FIND_PRODUCT';
export interface FindProductAction {
	type: typeof FIND_PRODUCT;
	payload: Product;
}

export const STORE_PRODUCT = 'STORE_PRODUCT';
export interface StoreProductAction {
	type: typeof STORE_PRODUCT;
	payload: Product;
}

export const UPDATE_CURRENT_KCAL_SUM = 'UPDATE_CURRENT_KCAL_SUM';
export interface UpdateCurrentKcalSumAction {
	type: typeof UPDATE_CURRENT_KCAL_SUM;
	payload: number;
}

export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export interface SelectProductAction {
	type: typeof SELECT_PRODUCT;
	payload: string[];
}

export const SELECT_PRODUCT_RESET = 'SELECT_PRODUCT_RESET';
export interface SelectProductResetAction {
	type: typeof SELECT_PRODUCT_RESET;
}

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export interface DeleteProductAction {
	type: typeof DELETE_PRODUCT;
	payload: { newProducts: Product; newKcal: number };
}

export const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS';
export interface DeleteAllProductsAction {
	type: typeof DELETE_ALL_PRODUCTS;
}

export type allProductActionTypes =
	| LoadingProductsAction
	| FindProductAction
	| StoreProductAction
	| UpdateCurrentKcalSumAction
	| SelectProductAction
	| SelectProductResetAction
	| DeleteProductAction
	| DeleteAllProductsAction;
