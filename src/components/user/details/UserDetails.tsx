import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import UserEdit from './edit/UserEdit';
import Alert from '../../utilsComponents/alert/Alert';
import useStyles from './styles';
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

const UserDetails: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const userName = useSelector(getUserName);
	const userHeight = useSelector(getUserHeight);
	const userWeight = useSelector(getUserWeight);
	const userAge = useSelector(getUserAge);
	const userGender = useSelector(getUserGender);
	const userActivityLevel = useSelector(getUserActivityLevel);

	const [ displayAlert, setDisplayAlert ] = React.useState(false);
	const [ openEditModal, setOpenEditModal ] = React.useState(false);

	const handleOpen = () => {
		setOpenEditModal(true);
		setDisplayAlert(false);
	};

	const handleClose = () => {
		setOpenEditModal(false);
	};

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

				<Button variant='outlined' color='primary' onClick={handleOpen}>
					Edit data
				</Button>

				{openEditModal && (
					<UserEdit
						handleClose={handleClose}
						openEditModal={openEditModal}
						setOpenEditModal={setOpenEditModal}
						setDisplayAlert={setDisplayAlert}
					/>
				)}
			</Paper>

			{displayAlert && <Alert severity='success'>The data has been correctly updated.</Alert>}
		</React.Fragment>
	);
};

export default UserDetails;
