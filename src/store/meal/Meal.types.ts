import { Product } from '../product/Product.types';

export const STORE_MEAL = 'STORE_MEAL';
export interface StoreMealAction {
	type: typeof STORE_MEAL;
	payload: Array<Product>;
}

export type allMealActionTypes = StoreMealAction;
