import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as S from "../styles";

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
			<S.CircularProgress size={24} />
		</div>
	);
};

export default withStyles(styles)(Loader);
