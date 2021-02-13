import { useSelector } from 'react-redux';
import { getMeals } from '../../../store/meal/Meal.selectors';
import { MealsCounter, Typography } from '../../../styles';
import * as T from '../../../constants/constants';

export const MealCounter = () => {
	const meals = useSelector(getMeals);

	return (
		<MealsCounter>
			<Typography variant='h6' noWrap>
				{T.MEAL_COUNTER_HEADING}
			</Typography>
			<Typography variant='h3' color='primary' noWrap>
				{meals ? meals.length : '0'}
			</Typography>
		</MealsCounter>
	);
};
