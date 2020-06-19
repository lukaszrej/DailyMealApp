import React, { SyntheticEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useStyles from './styles';
// import {showWelcomeMessage} from "../../../store/start/Start.actions";
import { hideWelcomeMessage } from '../../../store/start/Start.actions';

const Alert = (props: AlertProps) => {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const WelcomeAlert: React.FC = () => {
	const classes = useStyles();
	const showMessage = useSelector((state: any) => state.start.showMessage);
	const dispatch = useDispatch();
	const [ open ] = useState(showMessage);

	const handleClose = (event?: SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		dispatch(hideWelcomeMessage(false));
	};

	return (
		<div className={classes.root}>
			<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success'>
					Welcome User!
				</Alert>
			</Snackbar>
		</div>
	);
};

export default WelcomeAlert;
