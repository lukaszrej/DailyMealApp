import React, { useState } from 'react';
import MealCard from '../components/MealsPage/MealCard';
import { useSelector } from 'react-redux';
import { getMeals } from '../store/meal/Meal.selectors';
import { getUserDailyNeed } from '../store/user/User.selectors';
import { useHistory } from 'react-router-dom';
import * as T from "../utils/constants";
import * as S from '../styles';

export default () => {
	const history = useHistory();
	const meals = useSelector(getMeals);
	const dailyNeed = useSelector(getUserDailyNeed);
	const [openModal, setOpenModal] = useState(false);

	const handleOpen = () => {
		setOpenModal(true);
	};

	const handleClose = () => {
		setOpenModal(false);
	};

	const handleGoBack = () => {
		history.push('/home');
	}

	return (
		<S.Meals>
			<S.Paper square>
				<S.Typography variant='h6' noWrap>
					{T.MEALS_PAGE_HEADING}
				</S.Typography>
			</S.Paper>

			<S.Button onClick={handleOpen}>Open modal something</S.Button>

			<div className="buttons">
				<S.Button
					variant='contained'
					color='primary'
					size='large'
					onClick={handleGoBack}
					endIcon={<S.HomeIcon />}
				>
					{T.GO_BACK}
				</S.Button>
			</div>

			<S.Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={openModal}>
				<MealCard meals={meals} dailyNeed={dailyNeed} />
			</S.Dialog>
		</S.Meals>
	);
};
