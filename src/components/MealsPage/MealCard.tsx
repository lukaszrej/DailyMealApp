import React from 'react';
import shortid from 'shortid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { Product } from '../../store/product/Product.types';
import MealChart from './MealChart';
import MealProductTag from '../MealSection/MealProductTag';
import * as T from '../../utils/constants';
import * as S from '../../styles/components';

interface MealCardProps {
	meals: any[];
	dailyNeed: number;
}

const MealCard = (props: MealCardProps) => {
	const { meals, dailyNeed } = props;

	return (
		<Paper square>
			<S.MealCard>
				{meals.map((meal: Product[], index: number) => {
					const mealTotal = {
						calories: 0,
						fat: 0,
						carbs: 0,
						protein: 0
					};

					return (
						<section key={shortid.generate()}>
							<header>
								{T.MEAL} {index + 1}
							</header>

							<main className='meal'>
								{meal.map((item: Product) => {
									const calories = Math.round(item.food.nutrients.ENERC_KCAL);
									const protein = Math.round(item.food.nutrients.PROCNT);
									const carbs = Math.round(item.food.nutrients.CHOCDF);
									const fat = Math.round(item.food.nutrients.FAT);
									const label = item.food.label;

									mealTotal.calories += calories;
									mealTotal.fat += fat;
									mealTotal.carbs += carbs;
									mealTotal.protein += protein;

									return (
										<MealProductTag key={shortid.generate()} label={label} calories={calories} />
									);
								})}
							</main>

							<MealChart mealTotal={mealTotal} dailyNeed={dailyNeed} />

							{meals.length > 1 ? <Divider /> : ''}
						</section>
					);
				})}
			</S.MealCard>
		</Paper>
	);
};

export default MealCard;
