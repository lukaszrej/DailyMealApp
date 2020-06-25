import { AppState } from '..';

export const getStarted = (state: AppState) => state.start.started;
export const getShowMessage = (state: AppState) => state.start.showMessage;
