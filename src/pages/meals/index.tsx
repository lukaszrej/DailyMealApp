import React from 'react';
import { generate } from 'shortid';
import { useSelector } from 'react-redux';
import { getMeals } from '../../store/meal/Meal.selectors';
import { getDailyNeed } from '../../store/user/User.selectors';
import { useHistory } from 'react-router-dom';
import { Product, Meal } from '../../types';
import MealChart from './MealChart';
import ProductTag from './ProductTag';
import * as T from "../../utils/constants";
import * as S from '../../styles';

const Meals = () => {
	const history = useHistory();
    const meals = useSelector(getMeals);
	const dailyNeed = useSelector(getDailyNeed);

	const onGoHome = () => {
		history.push('/home');
	}

	return (
		<S.Meals square>
			<S.Typography variant='h6' noWrap>
				{T.MEALS_PAGE_HEADING}
			</S.Typography>

			{meals.meals.map((meal: Meal, index: number) => {
				const mealTotal = { calories: 0, fat: 0, carbs: 0, protein: 0 };

				return (
					<section key={generate()}>
						<header>
							{T.MEAL} {index + 1}
						</header>

						<main>
							<S.ProductTags>
								{meal.map((product: Product) => {
									const calories = Math.round(product.food.nutrients.ENERC_KCAL);
									const protein = Math.round(product.food.nutrients.PROCNT);
									const carbs = Math.round(product.food.nutrients.CHOCDF);
									const fat = Math.round(product.food.nutrients.FAT);
									const label = product.food.label;

									mealTotal.calories += calories;
									mealTotal.fat += fat;
									mealTotal.carbs += carbs;
									mealTotal.protein += protein;

									return <ProductTag key={generate()} label={label} calories={calories} />;
								})}
							</S.ProductTags>

							<S.MealCharts>
								<MealChart mealTotal={mealTotal} dailyNeed={dailyNeed} />
							</S.MealCharts>
						</main>

						{meals.meals.length > 1 ? <S.Divider /> : ''}
					</section>
				);
			})}

			<S.PageButtonContainer>
				<S.Button variant='contained' size='large' onClick={onGoHome} endIcon={<S.HomeIcon />}>
					{T.GO_BACK}
				</S.Button>
			</S.PageButtonContainer>
		</S.Meals >
	);
};

export default Meals;
