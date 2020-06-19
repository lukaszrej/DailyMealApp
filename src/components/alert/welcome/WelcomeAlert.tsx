import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideWelcomeMessage } from '../../../store/start/Start.actions';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useStyles from './styles';

const Alert = (props: AlertProps): JSX.Element => {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const WelcomeAlert: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const showMessage = useSelector((state: any) => state.start.showMessage);
	const dispatch = useDispatch();
	const [ open ] = React.useState(showMessage);

	const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
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
