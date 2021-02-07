import { AppState } from '..';

export const getIsAlertOpen = (state: AppState) => state.alert.isAlertOpen;
export const getAlertText = (state: AppState) => state.alert.alertText;
export const getAlertType = (state: AppState) => state.alert.alertType; 
