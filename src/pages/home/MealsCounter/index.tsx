import React from 'react';
import { useSelector } from 'react-redux';
import { getMeals } from '../../../store/meal/Meal.selectors';
import * as T from "../../../utils/constants";
import * as S from "../../../styles";

const MealsCounter = () => {
	const meals = useSelector(getMeals);

	return (
		<S.MealsCounter>
			<S.Typography variant='h6' noWrap>
				{T.MEAL_COUNTER_HEADING}
			</S.Typography>
			<S.Typography variant='h3' color='primary' noWrap>
				{meals ? meals.length : '0'}
			</S.Typography>
		</S.MealsCounter>
	);
};

export default MealsCounter;
