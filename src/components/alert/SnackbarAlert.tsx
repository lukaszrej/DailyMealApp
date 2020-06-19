import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useStyles from './styles';

const Alert = (props: AlertProps) => {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const SnackbarAlert: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(true);

	const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success'>
					The data has been correctly updated.
				</Alert>
			</Snackbar>
		</div>
	);
};

export default SnackbarAlert;
