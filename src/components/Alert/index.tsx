import { useDispatch } from 'react-redux';
import { Props } from './types';
import { closeAlert } from '../../store/alert/Alert.actions';
import { Snackbar, Alert as MUIAlert } from '../../styles';

const MuiAlert = (props: Props) => {
	return <MUIAlert elevation={6} variant='filled' {...props} />;
};

export const Alert = (props: Props) => {
	const { children, severity } = props;
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeAlert());
	};

	return (
		<Snackbar open={true} onClose={handleClose} autoHideDuration={3500}>
			<MuiAlert onClose={handleClose} severity={severity}>
				{children}
			</MuiAlert>
		</Snackbar>
	);
};
