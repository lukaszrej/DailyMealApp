import React from 'react';
import shortid from 'shortid';
import MealChart from './MealChart';
import ProductTag from './ProductTag';
import { Product } from '../../../store/product/Product.types';
import { MealCardProps } from './index.types';
import * as T from '../../../utils/constants';
import * as S from '../../../styles';

const MealCard = (props: MealCardProps) => {
	const { meals, dailyNeed } = props;

	return (
		<S.MealCard>
			{meals.map((meal: any, index: number) => {
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

						<main className="meal">
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

								return <ProductTag key={shortid.generate()} label={label} calories={calories} />;
							})}
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
