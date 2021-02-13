import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getActivityLevelDesc } from '../../../utils/getActivityLevelDesc';
import { UserEditModal } from './UserEditModal';
import { UserDetails as UserDetailsContainer, Typography, Button } from '../../../styles';
import * as selector from '../../../store/user/User.selectors';
import * as T from "../../../constants/constants";

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
        <UserDetailsContainer>
            <Typography variant='h6' noWrap>
                {T.USER_DETAILS_HEADING}
            </Typography>

            {userName && <p>{T.NAME}: {userName}</p>}
            {userHeight && <p>{T.HEIGHT}: {userHeight} cm</p>}
            {userWeight && <p>{T.CURRENT_WEIGHT}: {userWeight} kg</p>}
            {userAge && <p>{T.AGE}: {userAge}</p>}
            {userGender && <p>{T.GENDER}: {userGender}</p>}
            {activityLevel && <p>{T.ACTIVITY_LEVEL}: {getActivityLevelDesc(activityLevel)}</p>}

            <Button variant='outlined' color='primary' onClick={handleOpen}>
                {T.EDIT_DATA}
            </Button>

            {isModalOpen && (
                <UserEditModal
                    handleClose={handleClose}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </UserDetailsContainer>
	);
};
