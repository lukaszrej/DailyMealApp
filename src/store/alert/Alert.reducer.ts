import { allAlertActions } from './Alert.types';
import { MuiAlert } from '../../types';
import * as type from './Alert.types';

interface AlertState {
	isAlertOpen: boolean;
	alertText: string;
	alertType: MuiAlert;
}

const initialState: AlertState = {
	isAlertOpen: false,
	alertText: '',
	alertType: 'info'
};

export const AlertReducer = (state: AlertState = initialState, action: allAlertActions) => {
	switch (action.type) {
		case type.OPEN_ALERT:
			return {
				...state,
				isAlertOpen: true,
                alertText: action.payload.text,
                alertType: action.payload.alertType
			};

		case type.CLOSE_ALERT:
			return {
				...state,
                isAlertOpen: false,
                alertText: '',
			};

		default:
			return state;
	}
};
