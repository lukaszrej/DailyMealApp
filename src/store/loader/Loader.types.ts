export const SHOW_LOADER = 'SHOW_LOADER';
export interface ShowLoaderAction {
    type: typeof SHOW_LOADER;
}

export const HIDE_LOADER = 'HIDE_LOADER';
export interface HideLoaderAction {
	type: typeof HIDE_LOADER;
}

export type allLoaderActions = ShowLoaderAction | HideLoaderAction;
