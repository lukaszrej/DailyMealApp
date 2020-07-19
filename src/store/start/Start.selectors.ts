import { AppState } from '..';

export const getStarted = (state: AppState) => state.start.started;
export const getShowAlert = (state: AppState) => state.start.showAlert;
export const getShowStepper = (state: AppState) => state.start.showStepper;
