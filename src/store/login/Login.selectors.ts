import { AppState } from '..';

export const getStarted = (state: AppState) => state.login.started;
export const getShowAlert = (state: AppState) => state.login.showAlert;
export const getShowStepper = (state: AppState) => state.login.showStepper;
