import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import ModalTitle from '../../components/ModalTitle';
import ModalContent from '../../components/ModalContent';
import { activityOptions } from '../../utils/activity-levels/activityLevels';
import { getStarted } from '../../store/login/Login.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, calculateDailyNeed } from '../../store/user/User.actions';
import { startApp } from '../../store/login/Login.actions';
import * as S from '../../styles';
import * as T from '../../utils/constants';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const isStarted = useSelector(getStarted);

	const [name, setName] = useState('');
	const [height, setHeight] = useState('170');
	const [weight, setWeight] = useState('70');
	const [age, setAge] = useState('28');
	const [gender, setGender] = useState('male');
	const [activityLevel, setActivityLevel] = useState('1.2');

	const onGenderChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setGender((event.target as HTMLInputElement).value);
	};

	const onActivityLevelChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setActivityLevel((event.target as HTMLInputElement).value);
	};

	const onLoginSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(createUser({ name, height, weight, age, gender, activityLevel }));
		dispatch(calculateDailyNeed({ height, weight, age, gender, activityLevel }));
		dispatch(startApp());
		localStorage.setItem("started", "true");
		localStorage.setItem("user", JSON.stringify({ name, height, weight, age, gender, activityLevel }));
		history.push("home");
	};

	return (
		<S.Dialog open={!isStarted} aria-labelledby='start-form-title'>
			<ModalTitle id='start-form-title'>{T.FILL_THE_FORM}</ModalTitle>

			<ModalContent dividers>
				<S.Login noValidate onSubmit={onLoginSubmit}>
					<S.TextField
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
					<S.TextField
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
					<S.TextField
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
					<S.TextField
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
					<S.FormControl variant='outlined' className="activity">
						<S.InputLabel id='demo-simple-select-outlined-label'>Activity level</S.InputLabel>
						<S.Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={activityLevel}
							displayEmpty
							onChange={onActivityLevelChange}
							label={T.ACTIVITY_LEVEL}
						>
							{activityOptions.map((element) => {
								return (
									<S.MenuItem value={element.activityValue} key={element.id}>
										{element.activityDescription}
									</S.MenuItem>
								);
							})}
						</S.Select>
					</S.FormControl>

					<FormControl component='fieldset' className="gender">
						<S.RadioGroup aria-label={T.GENDER} name={T.GENDER} value={gender} onChange={onGenderChange}>
							<S.FormControlLabel value='male' control={<S.Radio />} label={T.MALE} />
							<S.FormControlLabel value='female' control={<S.Radio />} label={T.FEMALE} />
						</S.RadioGroup>
					</FormControl>

					<S.Button type='submit' variant='contained'>
						{T.START}
					</S.Button>
				</S.Login>
			</ModalContent>
		</S.Dialog>
	);
};

export default Login;
