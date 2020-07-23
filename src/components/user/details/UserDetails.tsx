import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import EditUser from '../edit/EditUser';
import { useSelector } from 'react-redux';
import getActivityLevelDesc from '../../../utils/activityLevels/getActivityLevelsDesc';
import {
	getUserName,
	getUserHeight,
	getUserWeight,
	getUserAge,
	getUserGender,
	getUserActivityLevel
} from '../../../store/user/User.selectors';
import useStyles from './styles';

const UserDetails: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const userName = useSelector(getUserName);
	const userHeight = useSelector(getUserHeight);
	const userWeight = useSelector(getUserWeight);
	const userAge = useSelector(getUserAge);
	const userGender = useSelector(getUserGender);
	const userActivityLevel = useSelector(getUserActivityLevel);

	return (
		<React.Fragment>
			<Paper className={classes.root}>
				<Typography variant='h6' noWrap>
					User details
				</Typography>
				{userName && <p>Name: {userName}</p>}
				{userHeight && <p>Height: {userHeight} cm</p>}
				{userWeight && <p>Current weight: {userWeight} kg</p>}
				{userAge && <p>Age: {userAge}</p>}
				{userGender && <p>Gender: {userGender}</p>}
				{userActivityLevel && <p>Activity level: {getActivityLevelDesc(userActivityLevel)}</p>}
				<EditUser />
			</Paper>
		</React.Fragment>
	);
};

export default UserDetails;
