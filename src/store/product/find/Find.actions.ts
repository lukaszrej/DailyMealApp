import { FIND_PRODUCT } from './Find.types';

export const findProduct = (productName: string) => {
	console.log('dispatch an action findProduct | Find.actions.ts');
	console.log(productName, 'productName actions');
	
	return (dispatch: Function) => {
		dispatch({
			type: FIND_PRODUCT,
			payload: productName
		});
	};
};
