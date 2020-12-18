import React, { useState } from 'react';
import Alert from '../../../components/Alert';
import UserDetailsEdit from './Edit';
import { useSelector } from 'react-redux';
import getActivityLevelDesc from '../../../utils/activity-levels/activityLevelsDesc';
import {
	getUserName,
	getUserHeight,
	getUserWeight,
	getUserAge,
	getUserGender,
	getUserActivityLevel
} from '../../../store/user/User.selectors';
import * as T from "../../../utils/constants";
import * as S from '../../../styles';

const UserDetails = () => {
	const userName = useSelector(getUserName);
	const userHeight = useSelector(getUserHeight);
	const userWeight = useSelector(getUserWeight);
	const userAge = useSelector(getUserAge);
	const userGender = useSelector(getUserGender);
    const userActivityLevel = useSelector(getUserActivityLevel);

	const [displayAlert, setDisplayAlert] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);

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
				<S.Typography variant='h6' noWrap>
					{T.USER_DETAILS_HEADING}
				</S.Typography>

				{userName && <p>{T.NAME}: {userName}</p>}
				{userHeight && <p>{T.HEIGHT}: {userHeight} cm</p>}
				{userWeight && <p>{T.CURRENT_WEIGHT}: {userWeight} kg</p>}
				{userAge && <p>{T.AGE}: {userAge}</p>}
				{userGender && <p>{T.GENDER}: {userGender}</p>}
				{userActivityLevel && <p>{T.ACTIVITY_LEVEL}: {getActivityLevelDesc(userActivityLevel)}</p>}

				<S.Button variant='outlined' color='primary' onClick={handleOpen}>
					{T.EDIT_DATA}
				</S.Button>

				{openEditModal && (
					<UserDetailsEdit
						handleClose={handleClose}
						openEditModal={openEditModal}
						setOpenEditModal={setOpenEditModal}
						setDisplayAlert={setDisplayAlert}
					/>
				)}
			</S.UserDetails>

			{displayAlert && <Alert severity='success'>{T.DATA_CORRECTLY_UPDATED}</Alert>}
		</>
	);
};

export default UserDetails;
