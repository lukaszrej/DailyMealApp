import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { getUserDailyNeed } from '../../../store/user/User.selectors';
import { getCurrentKcalSum } from '../../../store/product/Product.selectors';
import useStyles from './styles';

const UserNeed: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const dailyNeed = useSelector(getUserDailyNeed);
	const currentKcalSum = useSelector(getCurrentKcalSum);

	return (
		<React.Fragment>
			<Paper className={classes.root}>
				<Typography variant='h6' noWrap>
					Daily calorie need
				</Typography>
				<Typography variant='h3' color='primary' noWrap>
					{dailyNeed} kcal
				</Typography>
				<Typography variant='h6' noWrap>
					Current meal
				</Typography>
				<Typography variant='h3' color='secondary' noWrap>
					{currentKcalSum} kcal
				</Typography>
			</Paper>
		</React.Fragment>
	);
};

export default UserNeed;
