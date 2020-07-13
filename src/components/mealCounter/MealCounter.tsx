import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

const MealCounter: React.FC = (): JSX.Element => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Paper className={classes.root}>
				<Typography variant='h6' noWrap>
					Meals addded
				</Typography>
				<Typography variant='h3' color='primary' noWrap>
					0
				</Typography>
			</Paper>
		</React.Fragment>
	);
};

export default MealCounter;
