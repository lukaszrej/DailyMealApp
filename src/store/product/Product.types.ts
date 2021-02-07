import { Product } from '../../types'

export const LOADING = 'LOADING';
export interface LoadingProductsAction {
	type: typeof LOADING;
}

export const FIND_PRODUCTS = 'FIND_PRODUCTS';
export interface FindProductAction {
	type: typeof FIND_PRODUCTS;
	payload: Product[];
}

export const STORE_PRODUCT = 'STORE_PRODUCT';
export interface StoreProductAction {
	type: typeof STORE_PRODUCT;
	payload: Product[];
}

export const INCREASE_KCAL_SUM = 'INCREASE_KCAL_SUM';
export interface IncreaseKcalSumAction {
	type: typeof INCREASE_KCAL_SUM;
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
	payload: Product[];
}

export const DECREASE_KCAL = 'DECREASE_KCAL';
export interface DecreaseKcalAction {
	type: typeof DECREASE_KCAL;
	payload: number;
}

export const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS';
export interface DeleteAllProductsAction {
	type: typeof DELETE_ALL_PRODUCTS;
}

export type allProductActions =
	LoadingProductsAction |
	FindProductAction |
	StoreProductAction |
	IncreaseKcalSumAction |
	SelectProductAction |
	SelectProductResetAction |
	DeleteProductAction |
	DecreaseKcalAction |
    DeleteAllProductsAction;
