import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import EditUser from './edit/EditUser';

const UserPage: React.FC = (): JSX.Element => {
	const name = useSelector((state: AppState) => state.user.name);
	const height = useSelector((state: AppState) => state.user.height);
	const weight = useSelector((state: AppState) => state.user.weight);
	const age = useSelector((state: AppState) => state.user.age);
	const gender = useSelector((state: AppState) => state.user.gender);

	return (
		<React.Fragment>
			<p>Name: {name}</p>
			<p>Height {height} cm</p>
			<p>Current weight: {weight} kg</p>
			<p>Age: {age}</p>
			<p>Gender: {gender}</p>
			<EditUser />
		</React.Fragment>
	);
};

export default UserPage;
