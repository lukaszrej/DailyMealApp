import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserDetailsEdit from './UserDetailsEdit';
import Alert from '../Alert';
import * as S from '../../styles/components';
import { useSelector } from 'react-redux';
import getActivityLevelDesc from '../../utils/activityLevelsDesc';
import {
	getUserName,
	getUserHeight,
	getUserWeight,
	getUserAge,
	getUserGender,
	getUserActivityLevel
} from '../../store/user/User.selectors';
import {
	USER_DETAILS_HEADING,
	EDIT_DATA,
	DATA_CORRECTLY_UPDATED,
	NAME,
	HEIGHT,
	CURRENT_WEIGHT,
	GENDER,
	AGE,
	ACTIVITY_LEVEL
} from "../../utils/constants";

const UserDetails = () => {
	const userName = useSelector(getUserName);
	const userHeight = useSelector(getUserHeight);
	const userWeight = useSelector(getUserWeight);
	const userAge = useSelector(getUserAge);
	const userGender = useSelector(getUserGender);
	const userActivityLevel = useSelector(getUserActivityLevel);

	const [ displayAlert, setDisplayAlert ] = useState(false);
	const [ openEditModal, setOpenEditModal ] = useState(false);

	const handleOpen = () => {
		setOpenEditModal(true);
		setDisplayAlert(false);
	};

	const handleClose = () => {
		setOpenEditModal(false);
	};

	return (
		<>
			<S.UserDetails>
				<Typography variant='h6' noWrap>
					{USER_DETAILS_HEADING}
				</Typography>

				{userName && <p>{NAME}: {userName}</p>}
				{userHeight && <p>{HEIGHT}: {userHeight} cm</p>}
				{userWeight && <p>{CURRENT_WEIGHT}: {userWeight} kg</p>}
				{userAge && <p>{AGE}: {userAge}</p>}
				{userGender && <p>{GENDER}: {userGender}</p>}
				{userActivityLevel && <p>{ACTIVITY_LEVEL}: {getActivityLevelDesc(userActivityLevel)}</p>}

				<Button variant='outlined' color='primary' onClick={handleOpen}>
					{EDIT_DATA}
				</Button>

				{openEditModal && (
					<UserDetailsEdit
						handleClose={handleClose}
						openEditModal={openEditModal}
						setOpenEditModal={setOpenEditModal}
						setDisplayAlert={setDisplayAlert}
					/>
				)}
			</S.UserDetails>

			{displayAlert && <Alert severity='success'>{DATA_CORRECTLY_UPDATED}</Alert>}
		</>
	);
};

export default UserDetails;
