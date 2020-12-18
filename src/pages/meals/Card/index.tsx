import React from 'react';
import shortid from 'shortid';
import MealChart from '../Chart';
import MealProductTag from '../../home/MealSection/MealProductTag';
import { Product } from '../../../store/product/Product.types';
import * as T from '../../../utils/constants';
import * as S from '../../../styles';

interface MealCardProps {
	meals: Product[];
	dailyNeed: number;
}

const MealCard = (props: MealCardProps) => {
	const { meals, dailyNeed } = props;

	return (
		<S.MealCard>
			{meals.map((meal: Product, index: number) => {
				const mealTotal = {
					calories: 0,
					fat: 0,
					carbs: 0,
					protein: 0
				};

				const calories = Math.round(meal.food.nutrients.ENERC_KCAL);
				const protein = Math.round(meal.food.nutrients.PROCNT);
				const carbs = Math.round(meal.food.nutrients.CHOCDF);
				const fat = Math.round(meal.food.nutrients.FAT);
				const label = meal.food.label;

				mealTotal.calories += calories;
				mealTotal.fat += fat;
				mealTotal.carbs += carbs;
				mealTotal.protein += protein;

				return (
					<section key={shortid.generate()}>
						<header>
							{T.MEAL} {index + 1}
						</header>

						<main className='meal'>
							<MealProductTag key={shortid.generate()} label={label} calories={calories} />
						</main>

						<MealChart mealTotal={mealTotal} dailyNeed={dailyNeed} />

						{meals.length > 1 ? <S.Divider /> : ''}
					</section>
				);
			})}
		</S.MealCard>
	);
};

export default MealCard;
