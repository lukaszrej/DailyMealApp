import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getActivityLevelDesc } from '../../../utils/getActivityLevelDesc';
import { UserEdit } from './UserEdit';
import * as selector from '../../../store/user/User.selectors';
import * as T from "../../../constants/constants";
import * as S from '../../../styles';

export const UserDetails = () => {
	const userName = useSelector(selector.getUserName);
	const userHeight = useSelector(selector.getUserHeight);
	const userWeight = useSelector(selector.getUserWeight);
	const userAge = useSelector(selector.getUserAge);
	const userGender = useSelector(selector.getUserGender);
    const activityLevel = useSelector(selector.getActivityLevel);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpen = () => {
		setIsModalOpen(true);
	};

	const handleClose = () => {
		setIsModalOpen(false);
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
				{activityLevel && <p>{T.ACTIVITY_LEVEL}: {getActivityLevelDesc(activityLevel)}</p>}

				<S.Button variant='outlined' color='primary' onClick={handleOpen}>
					{T.EDIT_DATA}
				</S.Button>

				{isModalOpen && (
					<UserEdit
						handleClose={handleClose}
						isModalOpen={isModalOpen}
						setIsModalOpen={setIsModalOpen}
					/>
				)}
			</S.UserDetails>
		</>
	);
};
