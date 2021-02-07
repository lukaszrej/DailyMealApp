import { Dispatch } from 'redux';
import { Product } from '../../types';
import { AppState } from '../index';
import { openAlert } from '../alert/Alert.actions';
import { getAPIProducts, configProducts } from './Product.api';
import * as type from './Product.types';
import * as T from '../../constants/constants';

export const findProducts = (productName: string) => async (dispatch: Dispatch) => {
	dispatch({
		type: type.LOADING
	});

	try {
		const response = await getAPIProducts(productName);
		const configuredProducts = configProducts(response.data.hints);

		dispatch({
			type: type.FIND_PRODUCTS,
			payload: configuredProducts
		});

        !response.data.hints.length && dispatch(openAlert(T.NOTHING_FOUND, 'warning'));
	} catch (error) {
		console.warn('server problem, error -> ', error);
	}
};

export const storeProduct = (product: Product) => (dispatch: Dispatch, getState: Function) => {
	const state = getState();
	const storedProducts = state.product.storedProducts;

	dispatch({
		type: type.STORE_PRODUCT,
		payload: [ ...storedProducts, product ]
	});
};

export const increaseKcalSum = (productKcal: number) => (dispatch: Dispatch, getState: Function) => {
	const state = getState();
	const kcalSum = state.product.kcalSum;

	dispatch({
		type: type.INCREASE_KCAL_SUM,
		payload: kcalSum + productKcal
	});
};

export const selectProduct = (selectedItem: string | string[]) => (dispatch: Dispatch, getState: Function) => {
	const state = getState();
	const selectedProducts = state.product.selectedProducts;
	const selectedIndex = selectedProducts.indexOf(selectedItem);

	let newSelectedArray: string[] = [];

	if (selectedIndex === -1) {
		newSelectedArray = newSelectedArray.concat(selectedProducts, selectedItem);
	} else if (selectedIndex === 0) {
		newSelectedArray = newSelectedArray.concat(selectedProducts.slice(1));
	} else if (selectedIndex === selectedProducts.length - 1) {
		newSelectedArray = newSelectedArray.concat(selectedProducts.slice(0, -1));
	} else if (selectedIndex > 0) {
		newSelectedArray = newSelectedArray.concat(
			selectedProducts.slice(0, selectedIndex),
			selectedProducts.slice(selectedIndex + 1)
		);
	}

	dispatch({
		type: type.SELECT_PRODUCT,
		payload: newSelectedArray
	});
};

export const selectProductReset = () => ({
	type: type.SELECT_PRODUCT_RESET
});

export const deleteProduct = (selectedId: string) => (dispatch: Dispatch, getState: Function) => {
	const state: AppState = getState();
	const products = state.product.storedProducts;
	const newProducts = products.filter((storedProduct) => storedProduct.foodId !== selectedId);

	dispatch({
		type: type.DELETE_PRODUCT,
		payload: newProducts
	});
};

export const decreaseKcal = (selectedId: string) => (dispatch: Dispatch, getState: Function) => {
	const state: AppState = getState();
	const products = state.product.storedProducts;

	let newKcal = 0;
	products.map((product) => {
		if (product.foodId !== selectedId) {
			newKcal += Number(product.calories);
		}
		return newKcal;
	});

	dispatch({
		type: type.DECREASE_KCAL,
		payload: newKcal
	});
};

export const deleteAllProducts = () => ({
	type: type.DELETE_ALL_PRODUCTS
});
