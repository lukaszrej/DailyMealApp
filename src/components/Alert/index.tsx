import { useDispatch } from 'react-redux';
import { Props } from './index.types';
import { closeAlert } from '../../store/alert/Alert.actions';
import * as S from '../../styles';

const MuiAlert = (props: Props) => {
	return <S.Alert elevation={6} variant='filled' {...props} />;
};

export const Alert = (props: Props) => {
	const { children, severity } = props;
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeAlert());
	};

	return (
		<S.Snackbar open={true} autoHideDuration={3500} onClose={handleClose}>
			<MuiAlert onClose={handleClose} severity={severity}>
				{children}
			</MuiAlert>
		</S.Snackbar>
	);
};
