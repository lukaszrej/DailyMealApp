import { AppState } from '../../store/index';

export const getIsLoading = (state: AppState) => state.product.isLoading;
export const getFoundProducts = (state: AppState) => state.product.foundProducts;
export const getStoredProducts = (state: AppState) => state.product.storedProducts;
export const getCurrentKcalSum = (state: AppState) => state.product.currentKcalSum;
export const getSelectedProducts = (state: AppState) => state.product.selectedProducts;
