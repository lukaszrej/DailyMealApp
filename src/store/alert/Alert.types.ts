import { MuiAlert } from '../../types';

export const OPEN_ALERT = 'OPEN_ALERT';
export interface OpenAlertAction {
    type: typeof OPEN_ALERT;
    payload: {
        text: string;
        alertType: MuiAlert;
    };
}

export const CLOSE_ALERT = 'CLOSE_ALERT';
export interface CloseAlertAction {
	type: typeof CLOSE_ALERT;
}

export type allAlertActions = OpenAlertAction | CloseAlertAction;
