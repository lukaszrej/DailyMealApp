import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ModalTitle from '../ModalTitle';
import ModalContent from '../ModalContent';
import { activityOptions } from '../../utils/activityLevels';
import { createUser, calculateDailyNeed } from '../../store/user/User.actions';
import * as S from '../../styles/components';
import {
	EDIT_USER_DATA,
	NAME_LABEL,
	HEIGHT_LABEL,
	WEIGHT_LABEL,
	AGE_LABEL,
	ACTIVITY_LEVEL_LABEL,
	MALE,
	FEMALE,
	SAVE
} from "../../utils/constants";
import {
	getUserName,
	getUserHeight,
	getUserWeight,
	getUserAge,
	getUserGender,
	getUserActivityLevel
} from '../../store/user/User.selectors';

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

		localStorage.setItem("user", JSON.stringify({ name, height, weight, age, gender, activityLevel }));
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
		<Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={openEditModal}>
			<ModalTitle id='customized-dialog-title' onClose={handleClose}>
				{EDIT_USER_DATA}
			</ModalTitle>

			<form onSubmit={handleSubmit}>
				<ModalContent dividers>
					<TextField
						variant='outlined'
						fullWidth
						id='name'
						name='name'
						label={NAME_LABEL}
						autoComplete='name'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						fullWidth
						id='height'
						name='height'
						label={HEIGHT_LABEL}
						autoComplete='height'
						type='number'
						onChange={(e) => setHeight(e.target.value)}
						value={height}
					/>
					<TextField
						variant='outlined'
						fullWidth
						id='weight'
						name='weight'
						label={WEIGHT_LABEL}
						autoComplete='weight'
						type='number'
						onChange={(e) => setWeight(e.target.value)}
						value={weight}
					/>
					<TextField
						variant='outlined'
						fullWidth
						id='age'
						name='age'
						label={AGE_LABEL}
						autoComplete='age'
						type='number'
						onChange={(e) => setAge(e.target.value)}
						value={age}
					/>
					<S.UserDetailsEdit variant='outlined' className="activity">
						<InputLabel id='demo-simple-select-outlined-label'>Activity level</InputLabel>
						<Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={activityLevel}
							displayEmpty
							onChange={handleActivityLevelChange}
							label={ACTIVITY_LEVEL_LABEL}
						>
							{activityOptions.map((element) => {
								return (
									<MenuItem value={element.activityValue} key={shortid.generate()}>
										{element.activityDescription}
									</MenuItem>
								);
							})}
						</Select>
					</S.UserDetailsEdit>
					<FormControl component='fieldset'>
						<RadioGroup aria-label='gender' name='gender1' value={gender} onChange={handleGenderChange}>
							<FormControlLabel value='male' control={<Radio />} label={MALE} />
							<FormControlLabel value='female' control={<Radio />} label={FEMALE} />
						</RadioGroup>
					</FormControl>
				</ModalContent>

				<S.UserDetailsButtons>
					<Button autoFocus type='submit' color='primary'>
						{SAVE}
					</Button>
				</S.UserDetailsButtons>
			</form>
		</Dialog>
	);
};

export default UserDetailsEdit;
