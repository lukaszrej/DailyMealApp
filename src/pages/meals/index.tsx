import React from 'react';
import shortid from 'shortid';
import { useSelector } from 'react-redux';
import { getMeals } from '../../store/meal/Meal.selectors';
import { getDailyNeed } from '../../store/user/User.selectors';
import { useHistory } from 'react-router-dom';
import { Product } from '../../types';
import MealChart from './MealChart';
import ProductTag from './ProductTag';
import * as T from "../../utils/constants";
import * as S from '../../styles';

const Meals = () => {
	const history = useHistory();
	const meals = useSelector(getMeals);
	const dailyNeed = useSelector(getDailyNeed);

	const handleGoBack = () => {
		history.push('/home');
	}

	return (
		<S.Meals>
			<S.Paper square>
				<S.Typography variant='h6' noWrap>
					{T.MEALS_PAGE_HEADING}
				</S.Typography>

				<article>
					{meals.map((meal: Product[], index: number) => {
						const mealTotal = {
							calories: 0,
							fat: 0,
							carbs: 0,
							protein: 0
						};

						return (
							<section key={shortid.generate()}>
								<header>Meal {index + 1}</header>

								<main>
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
				</article>

				<div className="buttons">
					<S.Button variant='contained' color='primary' size='large' onClick={handleGoBack} endIcon={<S.HomeIcon />}>
						{T.GO_BACK}
					</S.Button>
				</div>

			</S.Paper>

		</S.Meals >
	);
};

export default Meals;
