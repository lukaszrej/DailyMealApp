import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () =>
	createStyles({
		root: {
			padding: 24,
			paddingBottom: 0,
			textAlign: 'center'
		}
	});

const StepperTitle = (props: WithStyles<typeof styles>) => {
	const { classes } = props;

	return (
		<Typography variant='h6' noWrap className={classes.root}>
			Welcome, start here
		</Typography>
	);
};

export default withStyles(styles)(StepperTitle);
