export interface Product {
	food: {
		category: string;
		categoryLabel: string;
		foodId: string;
		label: string;
		nutrients: {
			CHOCDF: number;
			ENERC_KCAL: number;
			FAT: number;
			FIBTG: number;
			PROCNT: number;
		};
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

export type allProductActionTypes = LoadingProductsAction | FindProductAction | StoreProductAction;
