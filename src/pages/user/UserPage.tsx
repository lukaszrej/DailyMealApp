import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import EditUser from './edit/EditUser';

const UserPage: React.FC = () => {
	const name = useSelector((state: AppState) => state.user.name);
	const height = useSelector((state: AppState) => state.user.height);
	const weight = useSelector((state: AppState) => state.user.weight);
	const age = useSelector((state: AppState) => state.user.age);
	const gender = useSelector((state: AppState) => state.user.gender);

	return (
		<Fragment>
			<p>Your name: {name}</p>
			<p>Your height {height} cm</p>
			<p>Your current weight: {weight} kg</p>
			<p>Your age: {age}</p>
			<p>Your gender: {gender}</p>
			<EditUser />
		</Fragment>
	);
};

export default UserPage;
