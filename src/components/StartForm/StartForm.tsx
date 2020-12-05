import React, { useState } from 'react';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import ModalTitle from '../ModalTitle';
import ModalContent from '../ModalContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { activityOptions } from '../../utils/activityLevels';
import { getStarted } from '../../store/start/Start.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, calculateDailyNeed } from '../../store/user/User.actions';
import { startApp } from '../../store/start/Start.actions';
import * as S from '../../styles';
import * as T from '../../utils/constants';

const StartForm = () => {
	const dispatch = useDispatch();
	const isStarted = useSelector(getStarted);

	const [name, setName] = useState('');
	const [height, setHeight] = useState('170');
	const [weight, setWeight] = useState('70');
	const [age, setAge] = useState('28');
	const [gender, setGender] = useState('male');
	const [activityLevel, setActivityLevel] = useState('1.2');

	const handleGenderChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setGender((event.target as HTMLInputElement).value);
	};

	const handleActivityLevelChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setActivityLevel((event.target as HTMLInputElement).value);
	};

	const handleStartSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		dispatch(createUser({ name, height, weight, age, gender, activityLevel }));
		dispatch(calculateDailyNeed({ height, weight, age, gender, activityLevel }));
		dispatch(startApp());
		localStorage.setItem("started", "true");
		localStorage.setItem("user", JSON.stringify({ name, height, weight, age, gender, activityLevel }));
	};

	return (
		<Dialog open={!isStarted} aria-labelledby='start-form-title'>
			<ModalTitle id='start-form-title'>{T.FILL_THE_FORM}</ModalTitle>

			<ModalContent dividers>
				<S.StartForm noValidate onSubmit={handleStartSubmit}>
					<TextField
						variant='outlined'
						margin='normal'
						fullWidth
						id='name'
						name='name'
						label={T.YOUR_NAME}
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
						label={T.YOUR_HEIGHT}
						autoComplete='height'
						type='number'
						onChange={(e) => setHeight(e.target.value)}
						value={height}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						fullWidth
						id='weight'
						name='weight'
						label={T.YOUR_WEIGHT}
						autoComplete='weight'
						type='number'
						onChange={(e) => setWeight(e.target.value)}
						value={weight}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						fullWidth
						id='age'
						name='age'
						label={T.YOUR_AGE}
						autoComplete='age'
						type='number'
						onChange={(e) => setAge(e.target.value)}
						value={age}
					/>
					<FormControl variant='outlined' className="activity">
						<InputLabel id='demo-simple-select-outlined-label'>Activity level</InputLabel>
						<Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={activityLevel}
							displayEmpty
							onChange={handleActivityLevelChange}
							label={T.ACTIVITY_LEVEL}
						>
							{activityOptions.map((element) => {
								return (
									<MenuItem value={element.activityValue} key={shortid.generate()}>
										{element.activityDescription}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>

					<FormControl component='fieldset' className="gender">
						<RadioGroup aria-label={T.GENDER} name={T.GENDER} value={gender} onChange={handleGenderChange}>
							<FormControlLabel value='male' control={<Radio />} label={T.MALE} />
							<FormControlLabel value='female' control={<Radio />} label={T.FEMALE} />
						</RadioGroup>
					</FormControl>

					<Button type='submit' variant='contained'>
						{T.START}
					</Button>
				</S.StartForm>
			</ModalContent>
		</Dialog>
	);
};

export default StartForm;
