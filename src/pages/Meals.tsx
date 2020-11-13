import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import MealCard from '../components/MealsPage/MealCard';
import { useSelector } from 'react-redux';
import { getMeals } from '../store/meal/Meal.selectors';
import { getUserDailyNeed } from '../store/user/User.selectors';
import { useHistory } from 'react-router-dom';
import { MEALS_PAGE_HEADING, GO_BACK } from "../utils/constants";
import * as S from './styles';

export default () => {
	const meals = useSelector(getMeals);
	const dailyNeed = useSelector(getUserDailyNeed);
	const history = useHistory();

	return (
		<S.Meals>
			<Paper square>
				<Typography variant='h6' noWrap>
					{MEALS_PAGE_HEADING}
				</Typography>
			</Paper>

			<MealCard meals={meals} dailyNeed={dailyNeed} />

			<div className="buttons">
				<Button
					variant='contained'
					color='primary'
					size='large'
					onClick={() => history.push('/home')}
					endIcon={<HomeIcon />}
				>
					{GO_BACK}
				</Button>
			</div>
		</S.Meals>
	);
};
