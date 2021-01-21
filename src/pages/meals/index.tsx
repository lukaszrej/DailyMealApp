import { generate } from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMeals } from '../../store/meal/Meal.selectors';
import { removeMeal, removeMealFromStorage } from '../../store/meal/Meal.actions';
import { getDailyNeed } from '../../store/user/User.selectors';
import { Product, Meal } from '../../types';
import { MealChart } from './MealChart';
import { ProductTag } from './ProductTag';
import { routes } from '../../routing/routes';
import * as T from '../../constants/constants';
import * as S from '../../styles';

export const Meals = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const meals = useSelector(getMeals);
	const dailyNeed = useSelector(getDailyNeed);

	const onGoHome = () => {
		history.push(routes.home);
	};

	const onMealDelete = (mealId: string) => {
		dispatch(removeMeal(mealId));
		dispatch(removeMealFromStorage(mealId));
	};

	return (
		<S.Meals square>
			<S.Typography variant='h6' noWrap>
				{T.MEALS_PAGE_HEADING}
			</S.Typography>

			{meals.map((meal: Meal, index: number) => {
				const mealTotal = { calories: 0, fat: 0, carbs: 0, protein: 0 };

				return (
					<section key={meal.id}>
						<header>
							{T.MEAL} {index + 1}
							<S.IconButton>
								<S.DeleteIcon onClick={() => onMealDelete(meal.id)}/>
							</S.IconButton>
						</header>

						<main>
							<S.ProductTags>
								{meal.products.map((product: Product) => {
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

						{meals.length > 1 ? <S.Divider /> : ''}
					</section>
				);
			})}

			<S.PageButtonContainer>
				<S.Button variant='contained' size='large' onClick={onGoHome} endIcon={<S.HomeIcon />}>
					{T.GO_BACK}
				</S.Button>
			</S.PageButtonContainer>
		</S.Meals>
	);
};
