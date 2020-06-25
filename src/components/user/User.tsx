import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName, getUserHeight, getUserWeight, getUserAge, getUserGender } from '../../store/user/User.selectors';
import EditUser from './edit/EditUser';
import Paper from '@material-ui/core/Paper';

const User: React.FC = (): JSX.Element => {
	const userName = useSelector(getUserName);
	const userHeight = useSelector(getUserHeight);
	const userWeight = useSelector(getUserWeight);
	const userAge = useSelector(getUserAge);
	const userGender = useSelector(getUserGender);

	return (
		<React.Fragment>
			<Paper>
				{userName && <p>Name: {userName}</p>}
				{userHeight && <p>Height: {userHeight} cm</p>}
				{userWeight && <p>Current weight: {userWeight} kg</p>}
				{userAge && <p>Age: {userAge}</p>}
				{userGender && <p>Gender: {userGender}</p>}

				<EditUser />
			</Paper>
		</React.Fragment>
	);
};

export default User;
