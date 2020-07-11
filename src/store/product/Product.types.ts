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

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export interface DeleteProductAction {
	type: typeof DELETE_PRODUCT;
}

export type allProductActionTypes =
	| LoadingProductsAction
	| FindProductAction
	| StoreProductAction
	| DeleteProductAction;
