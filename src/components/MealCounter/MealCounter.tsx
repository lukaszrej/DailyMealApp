import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getMeals } from '../../store/meal/Meal.selectors';
import { MEAL_COUNTER_HEADING } from "../../utils/constants";
import * as S from "../_styles";

const MealCounter = () => {
	const meals = useSelector(getMeals);

	return (
		<S.MealCounter>
			<Typography variant='h6' noWrap>
				{MEAL_COUNTER_HEADING}
			</Typography>
			<Typography variant='h3' color='primary' noWrap>
				{meals ? meals.length : '0'}
			</Typography>
		</S.MealCounter>
	);
};

export default MealCounter;
