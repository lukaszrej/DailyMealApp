import { Product } from '../../types';
import { allProductActions } from './Product.types';
import * as type from './Product.types';

export interface ProductState {
	isLoading: boolean;
	foundProducts: Product[];
	storedProducts: Product[];
	selectedProducts: string[];
	kcalSum: number;
}

const initialState: ProductState = {
	isLoading: false,
	foundProducts: [],
	storedProducts: [],
	selectedProducts: [],
	kcalSum: 0
};

export const ProductReducer = (state: ProductState = initialState, action: allProductActions) => {
	switch (action.type) {
		case type.LOADING:
			return {
				...state,
				isLoading: true
			};

		case type.FIND_PRODUCTS:
			return {
				...state,
				foundProducts: action.payload,
				isLoading: false
			};

		case type.STORE_PRODUCT:
			return {
				...state,
				storedProducts: action.payload,
				foundProducts: []
			};

		case type.INCREASE_KCAL_SUM:
			return {
				...state,
				kcalSum: action.payload
			};

		case type.SELECT_PRODUCT:
			return {
				...state,
				selectedProducts: action.payload
			};

		case type.SELECT_PRODUCT_RESET:
			return {
				...state,
				selectedProducts: []
			};

		case type.DELETE_PRODUCT:
			return {
				...state,
				storedProducts: action.payload,
				selectedProducts: []
			};

		case type.DECREASE_KCAL:
			return {
				...state,
				kcalSum: action.payload
			};

		case type.DELETE_ALL_PRODUCTS:
			return {
				...state,
				storedProducts: [],
				selectedProducts: [],
				kcalSum: 0
			};

		default:
			return state;
	}
};
