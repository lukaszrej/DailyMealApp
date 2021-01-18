import { AppState } from '..';

export const getStartedApp = (state: AppState) => state.login.startedApp;
export const getDisplayedAlert = (state: AppState) => state.login.displayedAlert;
export const getDisplayedStepper = (state: AppState) => state.login.displayedStepper;
