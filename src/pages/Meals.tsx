import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import HomeIcon from '@material-ui/icons/Home';
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

	return (
		<S.Meals>
			<Paper square>
				<Typography variant='h6' noWrap>
					{T.MEALS_PAGE_HEADING}
				</Typography>
			</Paper>

			<Button onClick={handleOpen}>Open modal something</Button>

			<div className="buttons">
				<Button
					variant='contained'
					color='primary'
					size='large'
					onClick={() => history.push('/home')}
					endIcon={<HomeIcon />}
				>
					{T.GO_BACK}
				</Button>
			</div>

			<Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={openModal}>
				<MealCard meals={meals} dailyNeed={dailyNeed} />
			</Dialog>
		</S.Meals>
	);
};
