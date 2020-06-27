import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

const UserNeed: React.FC = (): JSX.Element => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Paper className={classes.root}>
				<Typography variant='h6' noWrap>
					Daily calorie need
				</Typography>
				<p>According provided data your daily calorie is ...</p>
			</Paper>
		</React.Fragment>
	);
};

export default UserNeed;
