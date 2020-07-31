import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const StepperTitle: React.FC = () => {
	const classes = useStyles();

	return (
		<Typography variant='h6' noWrap className={classes.root}>
			Welcome, start here
		</Typography>
	);
};

export default StepperTitle;
