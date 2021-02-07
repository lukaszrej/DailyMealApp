import { MuiAlert } from '../../types';
import * as type from './Alert.types';

export const openAlert = (text: string, alertType: MuiAlert) => {
    const alertDetails = { text, alertType };

    return ({
        type: type.OPEN_ALERT,
        payload: alertDetails
    })
};

export const closeAlert = () => ({
	type: type.CLOSE_ALERT
});
