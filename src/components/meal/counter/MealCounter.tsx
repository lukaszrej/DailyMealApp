import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { getMeals } from '../../../store/meal/Meal.selectors';
import useStyles from './styles';

const MealCounter: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const meals = useSelector(getMeals);

	return (
		<Paper className={classes.root}>
			<Typography variant='h6' noWrap>
				Meals added
			</Typography>
			<Typography variant='h3' color='primary' noWrap>
				{meals ? meals.length : '0'}
			</Typography>
		</Paper>
	);
};

export default MealCounter;
