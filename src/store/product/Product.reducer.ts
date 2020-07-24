import {
	LOADING,
	FIND_PRODUCT,
	STORE_PRODUCT,
	SELECT_PRODUCT,
	SELECT_PRODUCT_RESET,
	DELETE_PRODUCT,
	DELETE_ALL_PRODUCTS,
	allProductActionTypes
} from './Product.types';
import { Product } from '../../store/product/Product.types';

interface ProductState {
	isLoading: boolean;
	foundProducts: Product[];
	storedProducts: Product[];
	selectedProducts: string[];
}

export const initialState: ProductState = {
	isLoading: false,
	foundProducts: [] as Product[],
	storedProducts: [] as Product[],
	selectedProducts: [] as string[]
};

export const ProductReducer = (state: ProductState = initialState, action: allProductActionTypes) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				isLoading: true
			};
		case FIND_PRODUCT:
			return {
				...state,
				foundProducts: action.payload,
				isLoading: false
			};
		case STORE_PRODUCT:
			return {
				...state,
				storedProducts: [ ...state.storedProducts, action.payload ],
				foundProducts: [] as Product[]
			};
		case SELECT_PRODUCT:
			return {
				...state,
				selectedProducts: action.payload
			};
		case SELECT_PRODUCT_RESET:
			return {
				...state,
				selectedProducts: [] as string[]
			};
		case DELETE_PRODUCT:
			return {
				...state,
				storedProducts: action.payload,
				selectedProducts: [] as string[]
			};
		case DELETE_ALL_PRODUCTS:
			return {
				...state,
				storedProducts: [] as Product[],
				selectedProducts: [] as string[]
			};
		default:
			return state;
	}
};
