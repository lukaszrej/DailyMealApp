import React from 'react';
import { useDispatch } from 'react-redux';
import { AlertExtendedProps } from './index.types';
import { removeAlert } from '../../store/login/Login.actions';
import * as S from "../../styles";

const AlertMaterialUI = (props: AlertExtendedProps) => {
	return <S.Alert elevation={6} variant='filled' {...props} />;
};

const Alert = (props: AlertExtendedProps) => {
	const dispatch = useDispatch();
	const { children, severity } = props;
	const [open, setOpen] = React.useState(true);

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		dispatch(removeAlert());
		setOpen(false);
	};

	return (
		<S.Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
			<AlertMaterialUI onClose={handleClose} severity={severity}>
				{children}
			</AlertMaterialUI>
		</S.Snackbar>
	);
};

export default Alert;
