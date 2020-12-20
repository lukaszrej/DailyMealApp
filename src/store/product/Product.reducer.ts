import {
	LOADING,
	FIND_PRODUCTS,
	STORE_PRODUCT,
	UPDATE_CURRENT_KCAL_SUM,
	SELECT_PRODUCT,
	SELECT_PRODUCT_RESET,
	DELETE_PRODUCT,
	UPDATE_KCAL,
	DELETE_ALL_PRODUCTS,
	allProductActions,
	Product
} from './Product.types';

export interface ProductState {
	isLoading: boolean;
	foundProducts: Product[];
	storedProducts: Product[];
	selectedProducts: string[];
	currentKcalSum: number;
}

const initialState: ProductState = {
	isLoading: false,
	foundProducts: [],
	storedProducts: [],
	selectedProducts: [],
	currentKcalSum: 0
};

export const ProductReducer = (state: ProductState = initialState, action: allProductActions) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				isLoading: true
			};
		case FIND_PRODUCTS:
			return {
				...state,
				foundProducts: action.payload,
				isLoading: false
			};
		case STORE_PRODUCT:
			return {
				...state,
				storedProducts: [...state.storedProducts, action.payload],
				foundProducts: []
			};
		case UPDATE_CURRENT_KCAL_SUM:
			return {
				...state,
				currentKcalSum: state.currentKcalSum + action.payload
			};
		case SELECT_PRODUCT:
			return {
				...state,
				selectedProducts: action.payload
			};
		case SELECT_PRODUCT_RESET:
			return {
				...state,
				selectedProducts: []
			};
		case DELETE_PRODUCT:
			return {
				...state,
				storedProducts: action.payload,
				selectedProducts: []
			};
		case UPDATE_KCAL:
			return {
				...state,
				currentKcalSum: action.payload,
			};
		case DELETE_ALL_PRODUCTS:
			return {
				...state,
				storedProducts: [],
				selectedProducts: [],
				currentKcalSum: 0
			};
		default:
			return state;
	}
};
