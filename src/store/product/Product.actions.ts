import {
	LOADING,
	FIND_PRODUCT,
	STORE_PRODUCT,
	UPDATE_CURRENT_KCAL_SUM,
	SELECT_PRODUCT,
	SELECT_PRODUCT_RESET,
	DELETE_PRODUCT,
	DELETE_ALL_PRODUCTS
} from './Product.types';
import { Dispatch } from 'redux';
import { Product } from '../../store/product/Product.types';
import getData from './Product.api';

export const findProduct = (productName: string) => async (dispatch: Dispatch) => {
	dispatch({
		type: LOADING
	});

	try {
		const response = await getData(productName);

		dispatch({
			type: FIND_PRODUCT,
			payload: response.data.hints
		});

		!response.data.hints.length && alert('nothing found');
	} catch (error) {
		console.warn('server problem, error -> ', error);
	}
};

export const storeProduct = (product: Product) => (dispatch: Dispatch) => {
	dispatch({
		type: STORE_PRODUCT,
		payload: product
	});
};

export const updateCurrentKcalSum = (productKcal: number) => (dispatch: Dispatch) => {
	dispatch({
		type: UPDATE_CURRENT_KCAL_SUM,
		payload: productKcal
	});
};

export const selectProduct = (selectedProductId: string) => (dispatch: Dispatch, getState: Function) => {
	const state = getState();
	const selected = state.product.selectedProducts;
	const selectedIndex = selected.indexOf(selectedProductId);

	let newSelected: string[] = [];

	if (selectedIndex === -1) {
		newSelected = newSelected.concat(selected, selectedProductId);
	} else if (selectedIndex === 0) {
		newSelected = newSelected.concat(selected.slice(1));
	} else if (selectedIndex === selected.length - 1) {
		newSelected = newSelected.concat(selected.slice(0, -1));
	} else if (selectedIndex > 0) {
		newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
	}

	dispatch({
		type: SELECT_PRODUCT,
		payload: newSelected
	});
};

export const selectProductReset = () => (dispatch: Dispatch) => {
	dispatch({
		type: SELECT_PRODUCT_RESET
	});
};

export const deleteProduct = (selectedId: string) => (dispatch: Dispatch, getState: Function) => {
	const state = getState();
	const products = state.product.storedProducts;
	const newProducts: Product = products.filter((storedProduct: Product) => storedProduct.food.foodId !== selectedId);

	let newKcal = 0;
	products.map((product: Product) => {
		if (product.food.foodId !== selectedId) {
			newKcal += Number(product.food.nutrients.ENERC_KCAL);
		}
		return newKcal;
	});

	dispatch({
		type: DELETE_PRODUCT,
		payload: { newProducts, newKcal }
	});
};

export const deleteAllProducts = () => (dispatch: Dispatch) => {
	dispatch({
		type: DELETE_ALL_PRODUCTS
	});
};
