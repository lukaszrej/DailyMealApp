import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useStyles from './styles';

interface AlertExtendedProps extends AlertProps {
	children?: React.ReactNode;
	severity?: 'error' | 'info' | 'success' | 'warning';
}

const AlertMaterialUI = (props: AlertExtendedProps) => {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const Alert: React.FC<AlertExtendedProps> = (props: AlertExtendedProps): JSX.Element => {
	const classes = useStyles();
	const { children, severity } = props;
	const [ open, setOpen ] = React.useState(true);

	const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
				<AlertMaterialUI onClose={handleClose} severity={severity}>
					{children}
				</AlertMaterialUI>
			</Snackbar>
		</div>
	);
};

export default Alert;
