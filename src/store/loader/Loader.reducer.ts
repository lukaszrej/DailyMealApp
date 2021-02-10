import { allLoaderActions } from './Loader.types';
import * as type from './Loader.types';

interface LoaderState {
	isLoading: boolean;
}

const initialState: LoaderState = {
	isLoading: false
};

export const LoaderReducer = (state: LoaderState = initialState, action: allLoaderActions) => {
	switch (action.type) {
		case type.SHOW_LOADER:
			return {
				...state,
				isLoading: true
			};

		case type.HIDE_LOADER:
			return {
				...state,
                isLoading: false
			};

		default:
			return state;
	}
};
