export const START = 'START';
export interface StartAction {
	type: typeof START;
}

export const HIDE_ALERT = 'HIDE_WELCOME_MESSAGE';
export interface HideAlertAction {
	type: typeof HIDE_ALERT;
}

export type allStartActionTypes = StartAction | HideAlertAction;
