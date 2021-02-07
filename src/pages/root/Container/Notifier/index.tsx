import { useSelector } from 'react-redux';
import { getIsAlertOpen, getAlertText, getAlertType } from '../../../../store/alert/Alert.selectors';
import { Alert } from '../../../../components/Alert';

export const Notifier = () => {
	const isAlertOpen = useSelector(getIsAlertOpen);
	const alertText = useSelector(getAlertText);
	const alertType = useSelector(getAlertType);

	return <div>{isAlertOpen && <Alert severity={alertType}>{alertText}</Alert>}</div>;
};
