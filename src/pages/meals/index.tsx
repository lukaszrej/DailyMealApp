import { useState } from 'react';
import { generate } from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMeals } from '../../store/meal/Meal.selectors';
import { removeMeal, removeMealFromStorage } from '../../store/meal/Meal.actions';
import { getDailyNeed } from '../../store/user/User.selectors';
import { MealChart } from './MealChart';
import { ProductTag } from './ProductTag';
import { MealDeleteModal } from './MealDeleteModal';
import { openAlert } from '../../store/alert/Alert.actions';
import { routes } from '../../routing/routes';
import { Meal } from '../../types';
import { Loader } from '../../components/Loader';
import { getIsLoading } from '../../store/loader/Loader.selectors';
import { showLoader, hideLoader } from '../../store/loader/Loader.actions';
import { useTimeoutLoader } from '../../hooks/useTimeoutLoader';
import * as T from '../../constants/constants';
import {
	Meals as MealsContainer,
	Typography,
	IconButton,
	DeleteIcon,
	ProductTags,
	MealCharts,
	PageButtonContainer,
	Button,
	HomeIcon,
	Divider
} from '../../styles';

export const Meals = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const meals = useSelector(getMeals);
	const dailyNeed = useSelector(getDailyNeed);
	const [ isModalOpen, setIsModalOpen ] = useState(false);
	const [ selectedMealId, setSelectedMealId ] = useState('');
    const isLoading = useSelector(getIsLoading);

	const onDeleteModalOpen = (meal: Meal) => {
		setIsModalOpen(true);
		setSelectedMealId(meal.id);
	};

	const onMealDelete = () => {
        dispatch(showLoader());
		dispatch(removeMeal(selectedMealId));
		dispatch(removeMealFromStorage(selectedMealId));
		setIsModalOpen(false);
		dispatch(openAlert(`Meal ${selectedMealId} deleted!`, 'success'));
	};

	const handleClose = () => {
		setIsModalOpen(false);
	};

	const onGoHome = () => {
		history.push(routes.home);
	};

    useTimeoutLoader(hideLoader, isLoading);

	return (
		<MealsContainer square>
			<Typography variant='h6' noWrap>
				{T.MEALS_PAGE_HEADING}
			</Typography>

			{meals.map((meal, index) => {
				const mealTotal = { calories: 0, fat: 0, carbs: 0, protein: 0 };

				return (
					<section key={meal.id}>
						<header>
							{T.MEAL} {index + 1}
							<IconButton onClick={() => onDeleteModalOpen(meal)}>
								<DeleteIcon />
							</IconButton>
						</header>

						<main>
							<ProductTags>
								{meal.products.map((product) => {
									const { label, calories, protein, carbs, fat } = product;

									mealTotal.calories += Math.round(calories);
									mealTotal.fat += Math.round(fat);
									mealTotal.carbs += Math.round(carbs);
									mealTotal.protein += Math.round(protein);

									return <ProductTag key={generate()} label={label} calories={calories} />;
								})}
							</ProductTags>

							<MealCharts>
								<MealChart mealTotal={mealTotal} dailyNeed={dailyNeed} />
							</MealCharts>
						</main>

						{meals.length > 1 ? <Divider /> : ''}
					</section>
				);
			})}

			<PageButtonContainer>
				<Button onClick={onGoHome} endIcon={<HomeIcon />} variant='contained' size='large'>
					{T.GO_BACK}
				</Button>
			</PageButtonContainer>

			{isModalOpen && (
				<MealDeleteModal handleClose={handleClose} isModalOpen={isModalOpen} onMealDelete={onMealDelete} />
			)}

            {isLoading && (
                <Loader />
            )}
		</MealsContainer>
	);
};
