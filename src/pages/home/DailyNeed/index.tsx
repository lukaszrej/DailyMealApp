import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDailyNeed } from '../../../store/user/User.selectors';
import { getKcalSum } from '../../../store/product/Product.selectors';
import { calculateDailyNeed } from '../../../store/user/User.actions';
import * as S from '../../../styles';
import * as T from "../../../utils/constants";

export const DailyNeed = () => {
	const dispatch = useDispatch();
	const dailyNeed = useSelector(getDailyNeed);
	const kcalSum = useSelector(getKcalSum);

	useEffect(() => {
		const localStorageUser = localStorage.getItem("user");
		const parsedUser = JSON.parse(localStorageUser as string)

		dispatch(calculateDailyNeed(parsedUser))
	});

	return (
		<S.UserDailyNeed >
			<S.Typography variant='h6' noWrap>
				{T.CALORIE_NEED_HEADING}
			</S.Typography>
			<S.Typography variant='h3' color='primary' noWrap>
				{dailyNeed} {T.KCAL}
			</S.Typography>

			{kcalSum !== 0 && (
				<>
					<S.Typography variant='h6' noWrap>
						{T.CURRENT_MEAL}
					</S.Typography>
					<S.Typography variant='h3' color='secondary' noWrap>
						{kcalSum} {T.KCAL}
					</S.Typography>
				</>
			)}
		</S.UserDailyNeed>
	);
};

