import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& > * + *': {
				marginLeft: theme.spacing(2)
			}
		}
	});

const Loader = (props: WithStyles<typeof styles>) => {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<CircularProgress size={24} />
		</div>
	);
};

export default withStyles(styles)(Loader);
