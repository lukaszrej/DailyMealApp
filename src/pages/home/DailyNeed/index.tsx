import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDailyNeed } from '../../../store/user/User.selectors';
import { getCurrentKcalSum } from '../../../store/product/Product.selectors';
import { calculateDailyNeed } from '../../../store/user/User.actions';
import * as S from '../../../styles';
import * as T from "../../../utils/constants";

const DailyNeed = () => {
	const dispatch = useDispatch();
	const dailyNeed = useSelector(getUserDailyNeed);
	const currentKcalSum = useSelector(getCurrentKcalSum);

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

			{currentKcalSum !== 0 && (
				<>
					<S.Typography variant='h6' noWrap>
						{T.CURRENT_MEAL}
					</S.Typography>
					<S.Typography variant='h3' color='secondary' noWrap>
						{currentKcalSum} {T.KCAL}
					</S.Typography>
				</>
			)}
		</S.UserDailyNeed>
	);
};

export default DailyNeed;
