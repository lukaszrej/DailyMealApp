import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getMeals } from '../store/meal/Meal.selectors';
import * as S from "./styles";

const MealCounter: React.FC = (): JSX.Element => {
	const meals = useSelector(getMeals);

	return (
		<S.MealCounter>
			<Typography variant='h6' noWrap>
				Meals added
			</Typography>
			<Typography variant='h3' color='primary' noWrap>
				{meals ? meals.length : '0'}
			</Typography>
		</S.MealCounter>
	);
};

export default MealCounter;
