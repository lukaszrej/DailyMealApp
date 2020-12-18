import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import FormControl from '@material-ui/core/FormControl';
import ModalTitle from '../../../components/ModalTitle';
import ModalContent from '../../../components/ModalContent';
import { activityOptions } from '../../../utils/activity-levels/activityLevels';
import { createUser, calculateDailyNeed } from '../../../store/user/User.actions';
import {
	getUserName,
	getUserHeight,
	getUserWeight,
	getUserAge,
	getUserGender,
	getUserActivityLevel
} from '../../../store/user/User.selectors';
import * as T from '../../../utils/constants';
import * as S from '../../../styles';

interface UserEditProps {
	handleClose: () => void;
	openEditModal: boolean;
	setOpenEditModal: (open: boolean) => void;
	setDisplayAlert: (displayAlert: boolean) => void;
}

const UserDetailsEdit = (props: UserEditProps) => {
	const { handleClose, openEditModal, setOpenEditModal, setDisplayAlert } = props;
	const dispatch = useDispatch();

	const currentName = useSelector(getUserName);
	const [name, setName] = useState(currentName);
	const currentHeight = useSelector(getUserHeight);
	const [height, setHeight] = useState(currentHeight);
	const currentWeight = useSelector(getUserWeight);
	const [weight, setWeight] = useState(currentWeight);
	const currentAge = useSelector(getUserAge);
	const [age, setAge] = useState(currentAge);
	const currentGender = useSelector(getUserGender);
	const [gender, setGender] = useState(currentGender);
	const currentActivityLevel = useSelector(getUserActivityLevel);
	const [activityLevel, setActivityLevel] = useState(currentActivityLevel);

	const handleActivityLevelChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setActivityLevel((event.target as HTMLInputElement).value);
	};

	const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGender((event.target as HTMLInputElement).value);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(createUser({ name, height, weight, age, gender, activityLevel }));
		dispatch(calculateDailyNeed({ height, weight, age, gender, activityLevel }));

		localStorage.setItem('user', JSON.stringify({ name, height, weight, age, gender, activityLevel }));
		setOpenEditModal(false);

		if (
			name !== currentName ||
			height !== currentHeight ||
			weight !== currentWeight ||
			age !== currentAge ||
			gender !== currentGender ||
			activityLevel !== currentActivityLevel
		) {
			setDisplayAlert(true);
		}
	};

	return (
		<S.Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={openEditModal}>
			<ModalTitle id='customized-dialog-title' onClose={handleClose}>
				{T.EDIT_USER_DATA}
			</ModalTitle>

			<form onSubmit={handleSubmit}>
				<ModalContent dividers>
					<S.TextField
						variant='outlined'
						fullWidth
						id='name'
						name='name'
						label={T.NAME_LABEL}
						autoComplete='name'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<S.TextField
						variant='outlined'
						margin='normal'
						fullWidth
						id='height'
						name='height'
						label={T.HEIGHT_LABEL}
						autoComplete='height'
						type='number'
						onChange={(e) => setHeight(e.target.value)}
						value={height}
					/>
					<S.TextField
						variant='outlined'
						fullWidth
						id='weight'
						name='weight'
						label={T.WEIGHT_LABEL}
						autoComplete='weight'
						type='number'
						onChange={(e) => setWeight(e.target.value)}
						value={weight}
					/>
					<S.TextField
						variant='outlined'
						fullWidth
						id='age'
						name='age'
						label={T.AGE_LABEL}
						autoComplete='age'
						type='number'
						onChange={(e) => setAge(e.target.value)}
						value={age}
					/>
					<S.UserDetailsEdit variant='outlined' className='activity'>
						<S.InputLabel id='demo-simple-select-outlined-label'>{T.ACTIVITY_LEVEL}</S.InputLabel>
						<S.Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={activityLevel}
							displayEmpty
							onChange={handleActivityLevelChange}
							label={T.ACTIVITY_LEVEL_LABEL}
						>
							{activityOptions.map((element) => {
								return (
									<S.MenuItem value={element.activityValue} key={shortid.generate()}>
										{element.activityDescription}
									</S.MenuItem>
								);
							})}
						</S.Select>
					</S.UserDetailsEdit>
					<FormControl component='fieldset'>
						<S.RadioGroup aria-label='gender' name='gender1' value={gender} onChange={handleGenderChange}>
							<S.FormControlLabel value='male' control={<S.Radio />} label={T.MALE} />
							<S.FormControlLabel value='female' control={<S.Radio />} label={T.FEMALE} />
						</S.RadioGroup>
					</FormControl>
				</ModalContent>

				<S.UserDetailsButtons>
					<S.Button autoFocus type='submit' color='primary'>
						{T.SAVE}
					</S.Button>
				</S.UserDetailsButtons>
			</form>
		</S.Dialog>
	);
};

export default UserDetailsEdit;
