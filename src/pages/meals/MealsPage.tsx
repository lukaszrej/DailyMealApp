import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import MealCard from '../../components/meal/card/MealCard';
import { useSelector } from 'react-redux';
import { getMeals } from '../../store/meal/Meal.selectors';
import { getUserDailyNeed } from '../../store/user/User.selectors';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const MealsPage: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const meals = useSelector(getMeals);
	const dailyNeed = useSelector(getUserDailyNeed);
	const history = useHistory();

	return (
		<main className={classes.root}>
			<Paper square>
				<Typography variant='h6' noWrap>
					Your meals
				</Typography>
			</Paper>

			<MealCard meals={meals} dailyNeed={dailyNeed} />

			<div className={classes.buttons}>
				<Button
					variant='contained'
					color='primary'
					size='large'
					onClick={() => history.push('/home')}
					endIcon={<HomeIcon />}
				>
					Go back
				</Button>
			</div>
		</main>
	);
};

export default MealsPage;
