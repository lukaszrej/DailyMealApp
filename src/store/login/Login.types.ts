export const START_APP = 'START_APP';
export interface StartAppAction {
	type: typeof START_APP;
}

export const SHOW_STEPPER = 'SHOW_STEPPER';
export interface ShowStepperAction {
	type: typeof SHOW_STEPPER;
}

export const REMOVE_STEPPER = 'REMOVE_STEPPER';
export interface RemoveStepperAction {
	type: typeof REMOVE_STEPPER;
}

export const END_APP = 'END_APP';
export interface EndAppAction {
	type: typeof END_APP;
}

export type allLoginActions =
	StartAppAction |
	ShowStepperAction |
	RemoveStepperAction |
	EndAppAction;
