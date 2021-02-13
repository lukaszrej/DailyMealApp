import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDailyNeed } from '../../../store/user/User.selectors';
import { calculateDailyNeed } from '../../../store/user/User.actions';
import { getKcalSum } from '../../../store/product/Product.selectors';
import { UserDailyNeed, Typography } from '../../../styles';
import * as T from "../../../constants/constants";

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
		<UserDailyNeed >
			<Typography variant='h6' noWrap>
				{T.CALORIE_NEED_HEADING}
			</Typography>
			<Typography variant='h3' color='primary' noWrap>
				{dailyNeed} {T.KCAL}
			</Typography>

			{kcalSum !== 0 && 
				<>
					<Typography variant='h6' noWrap>
						{T.CURRENT_MEAL}
					</Typography>
					<Typography variant='h3' color='secondary' noWrap>
						{kcalSum} {T.KCAL}
					</Typography>
				</>
			}
		</UserDailyNeed>
	);
};

