export const START = 'START';
export interface StartAction {
	type: typeof START;
	payload: { started: boolean; show: boolean };
}

export const HIDE_WELCOME_MESSAGE = 'HIDE_WELCOME_MESSAGE';
export interface HideMessageAction {
	type: typeof HIDE_WELCOME_MESSAGE;
	payload: boolean;
}

export type allStartActionTypes = StartAction | HideMessageAction;
