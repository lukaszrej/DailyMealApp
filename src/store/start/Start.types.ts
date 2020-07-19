export const START_APP = 'START_APP';
export interface StartAppAction {
	type: typeof START_APP;
}

export const REMOVE_WELCOME_ALERT = 'REMOVE_WELCOME_ALERT';
export interface HideAlertAction {
	type: typeof REMOVE_WELCOME_ALERT;
}

export const REMOVE_STEPPER = 'REMOVE_STEPPER';
export interface RemoveStepperAction {
	type: typeof REMOVE_STEPPER;
}

export type allStartActionTypes = StartAppAction | HideAlertAction | RemoveStepperAction;
