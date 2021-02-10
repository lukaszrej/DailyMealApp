import { AppState } from '..';

export const getIsLoading = (state: AppState) => state.loader.isLoading;
