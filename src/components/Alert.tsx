import React from 'react';
import styled from "styled-components";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux';
import { removeAlert } from '../store/start/Start.actions';

const AlertWrapper = styled.div`
	width: 100%;

	& > * + * {
		margin-top: 16px;
	}
`;

interface AlertExtendedProps extends AlertProps {
	children?: React.ReactNode;
	severity?: 'error' | 'info' | 'success' | 'warning';
}

const AlertMaterialUI = (props: AlertExtendedProps) => {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const Alert = (props: AlertExtendedProps) => {
	const dispatch = useDispatch();
	const { children, severity } = props;
	const [ open, setOpen ] = React.useState(true);

	const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
		if (reason === 'clickaway') {
			return;
		}

		dispatch(removeAlert());
		setOpen(false);
	};

	return (
		<AlertWrapper>
			<Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
				<AlertMaterialUI onClose={handleClose} severity={severity}>
					{children}
				</AlertMaterialUI>
			</Snackbar>
		</AlertWrapper>
	);
};

export default Alert;
