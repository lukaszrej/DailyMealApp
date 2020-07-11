import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import getDailyNeed from '../../utils/dailyNeed/getDailyNeed';
import {
	getUserHeight,
	getUserWeight,
	getUserAge,
	getUserGender,
	getUserActivityLevel
} from '../../store/user/User.selectors';

const UserNeed: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const height = useSelector(getUserHeight);
	const weight = useSelector(getUserWeight);
	const age = useSelector(getUserAge);
	const gender = useSelector(getUserGender);
	const activityLevel = useSelector(getUserActivityLevel);

	return (
		<React.Fragment>
			<Paper className={classes.root}>
				<Typography variant='h6' noWrap>
					Daily calorie need
				</Typography>
				<Typography variant='h3' color='primary' noWrap>
					{getDailyNeed({ weight, height, age, gender, activityLevel })} kcal
				</Typography>
			</Paper>
		</React.Fragment>
	);
};

export default UserNeed;
