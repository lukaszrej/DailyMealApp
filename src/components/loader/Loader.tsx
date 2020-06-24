import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';

const Loader: React.FC = (): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CircularProgress size={24} />
		</div>
	);
};

export default Loader;
