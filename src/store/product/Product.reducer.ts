import {
	ProductState,
	LOADING,
	FIND_PRODUCT,
	STORE_PRODUCT,
	UPDATE_CURRENT_KCAL_SUM,
	SELECT_PRODUCT,
	SELECT_PRODUCT_RESET,
	DELETE_PRODUCT,
	DELETE_ALL_PRODUCTS,
	allProductActions,
} from './Product.types';

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
		case FIND_PRODUCT:
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
				storedProducts: action.payload.newProducts,
				currentKcalSum: action.payload.newKcal,
				selectedProducts: []
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
