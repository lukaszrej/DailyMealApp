import { generate } from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMeals } from '../../store/meal/Meal.selectors';
import { removeMeal, removeMealFromStorage } from '../../store/meal/Meal.actions';
import { getDailyNeed } from '../../store/user/User.selectors';
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

			{meals.map((meal, index) => {
				const mealTotal = { calories: 0, fat: 0, carbs: 0, protein: 0 };

				return (
					<section key={meal.id}>
						<header>
							{T.MEAL} {index + 1}
							<S.IconButton onClick={() => onMealDelete(meal.id)}>
								<S.DeleteIcon/>
							</S.IconButton>
						</header>

						<main>
							<S.ProductTags>
								{meal.products.map(product => {
                                    const { label, calories, protein, carbs, fat } = product;
                                    
									mealTotal.calories += Math.round(calories);
									mealTotal.fat += Math.round(fat);
									mealTotal.carbs += Math.round(carbs);
									mealTotal.protein += Math.round(protein);

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
                <S.Button 
                    onClick={onGoHome}
                    endIcon={<S.HomeIcon />}
                    variant='contained'
                    size='large'
                >
					{T.GO_BACK}
				</S.Button>
			</S.PageButtonContainer>
		</S.Meals>
	);
};
