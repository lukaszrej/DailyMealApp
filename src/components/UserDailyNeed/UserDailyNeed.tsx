import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getUserDailyNeed } from '../../store/user/User.selectors';
import { getCurrentKcalSum } from '../../store/product/Product.selectors';
import { calculateDailyNeed } from '../../store/user/User.actions';
import * as S from '../../styles/components';
import * as T from "../../utils/constants";

const UserNeed = () => {
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
			<Typography variant='h6' noWrap>
				{T.CALORIE_NEED_HEADING}
			</Typography>
			<Typography variant='h3' color='primary' noWrap>
				{dailyNeed} {T.KCAL}
			</Typography>

			{currentKcalSum !== 0 && (
				<>
					<Typography variant='h6' noWrap>
						{T.CURRENT_MEAL}
					</Typography>
					<Typography variant='h3' color='secondary' noWrap>
						{currentKcalSum} {T.KCAL}
					</Typography>
				</>
			)}
		</S.UserDailyNeed>
	);
};

export default UserNeed;
