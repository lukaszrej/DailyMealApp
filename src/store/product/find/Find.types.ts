// action constants
export const FIND_PRODUCT = 'FIND_PRODUCT';

// types
export interface FindProductAction {
	type: typeof FIND_PRODUCT;
	payload: string;
}

export type allFindProductActionTypes = FindProductAction;
