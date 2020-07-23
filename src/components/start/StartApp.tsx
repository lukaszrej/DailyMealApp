import React from 'react';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import ModalTitle from '../modal/ModalTitle';
import ModalContent from '../modal/ModalContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { activityOptions } from '../../utils/activityLevels/activityLevels';
import { getStarted } from '../../store/start/Start.selectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createUser, calculateDailyNeed } from '../../store/user/User.actions';
import { startApp } from '../../store/start/Start.actions';
import useStyles from './styles';

const StartApp: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const started = useSelector(getStarted);

	const [ name, setName ] = React.useState('');
	const [ height, setHeight ] = React.useState('170');
	const [ weight, setWeight ] = React.useState('70');
	const [ age, setAge ] = React.useState('28');
	const [ gender, setGender ] = React.useState('male');
	const [ activityLevel, setActivityLevel ] = React.useState('1.2');

	const handleGenderChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setGender((event.target as HTMLInputElement).value);
	};

	const handleActivityLevelChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
		setActivityLevel((event.target as HTMLInputElement).value);
	};

	const handleStartSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		dispatch(createUser({ name, height, weight, age, gender, activityLevel }));
		dispatch(calculateDailyNeed({ height, weight, age, gender, activityLevel }));
		dispatch(startApp());
	};

	return (
		<Dialog open={!started} aria-labelledby='customized-dialog-title'>
			<ModalTitle id='customized-dialog-title'>Fill the form and start the app!</ModalTitle>
			<ModalContent dividers>
				<form noValidate onSubmit={handleStartSubmit} className={classes.form}>
					<TextField
						variant='outlined'
						margin='normal'
						fullWidth
						id='name'
						name='name'
						label='Your name'
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
						label='Your height (cm)'
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
						label='Your weight (kg)'
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
						label='Your age (years)'
						autoComplete='age'
						type='number'
						onChange={(e) => setAge(e.target.value)}
						value={age}
					/>
					<FormControl variant='outlined' className={classes.formControl}>
						<InputLabel id='demo-simple-select-outlined-label'>Activity level</InputLabel>
						<Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={activityLevel}
							displayEmpty
							onChange={handleActivityLevelChange}
							label='Activity level'
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

					<FormControl component='fieldset' className={classes.fieldset}>
						<RadioGroup
							aria-label='gender'
							name='gender1'
							value={gender}
							onChange={handleGenderChange}
							className={classes.radioGroup}
						>
							<FormControlLabel value='male' control={<Radio />} label='Male' />
							<FormControlLabel value='female' control={<Radio />} label='Female' />
						</RadioGroup>
					</FormControl>

					<Button type='submit' variant='contained' className={classes.button}>
						Start
					</Button>
				</form>
			</ModalContent>
		</Dialog>
	);
};

export default StartApp;
