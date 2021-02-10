import * as type from './Loader.types';

export const showLoader = () => ({
	type: type.SHOW_LOADER
});

export const hideLoader = () => ({
	type: type.HIDE_LOADER
});
