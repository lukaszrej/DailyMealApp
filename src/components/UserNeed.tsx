import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { getUserDailyNeed } from '../store/user/User.selectors';
import { getCurrentKcalSum } from '../store/product/Product.selectors';
import * as S from './styles';

const UserNeed: React.FC = (): JSX.Element => {
	const dailyNeed = useSelector(getUserDailyNeed);
	const currentKcalSum = useSelector(getCurrentKcalSum);

	return (
		<S.UserNeed >
			<Typography variant='h6' noWrap>
				Daily calorie need
			</Typography>
			<Typography variant='h3' color='primary' noWrap>
				{dailyNeed} kcal
			</Typography>

			{currentKcalSum !== 0 && (
				<React.Fragment>
					<Typography variant='h6' noWrap>
						Current meal
					</Typography>
					<Typography variant='h3' color='secondary' noWrap>
						{currentKcalSum} kcal
					</Typography>
				</React.Fragment>
			)}
		</S.UserNeed>
	);
};

export default UserNeed;
