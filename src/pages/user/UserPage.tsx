import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import EditUser from './edit/EditUser';
import Paper from '@material-ui/core/Paper';

const UserPage: React.FC = (): JSX.Element => {
	const name = useSelector((state: AppState) => state.user.name);
	const height = useSelector((state: AppState) => state.user.height);
	const weight = useSelector((state: AppState) => state.user.weight);
	const age = useSelector((state: AppState) => state.user.age);
	const gender = useSelector((state: AppState) => state.user.gender);

	return (
		<React.Fragment>
			<Paper>
				{name && <p>Name: {name}</p>}
				{height && <p>Height: {height} cm</p>}
				{weight && <p>Current weight: {weight} kg</p>}
				{age && <p>Age: {age}</p>}
				{gender && <p>Gender: {gender}</p>}
				<EditUser />
			</Paper>
		</React.Fragment>
	);
};

export default UserPage;
