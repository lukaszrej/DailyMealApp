import { AppState } from '..';

export const getIsLoading = (state: AppState) => state.product.isLoading;
export const getFoundProducts = (state: AppState) => state.product.foundProducts;
export const getIsAdding = (state: AppState) => state.product.isAdding;
export const getStoredProducts = (state: AppState) => state.product.storedProducts;
