import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getUserDailyNeed } from '../../store/user/User.selectors';
import { getCurrentKcalSum } from '../../store/product/Product.selectors';
import { CALORIE_NEED_HEADING, CURRENT_MEAL, KCAL } from "../../utils/constants";
import * as S from '../../styles/components';

const UserNeed = () => {
	const dailyNeed = useSelector(getUserDailyNeed);
	const currentKcalSum = useSelector(getCurrentKcalSum);

	return (
		<S.UserDailyNeed >
			<Typography variant='h6' noWrap>
				{CALORIE_NEED_HEADING}
			</Typography>
			<Typography variant='h3' color='primary' noWrap>
				{dailyNeed} {KCAL}
			</Typography>

			{currentKcalSum !== 0 && (
				<React.Fragment>
					<Typography variant='h6' noWrap>
						{CURRENT_MEAL}
					</Typography>
					<Typography variant='h3' color='secondary' noWrap>
						{currentKcalSum} {KCAL}
					</Typography>
				</React.Fragment>
			)}
		</S.UserDailyNeed>
	);
};

export default UserNeed;
