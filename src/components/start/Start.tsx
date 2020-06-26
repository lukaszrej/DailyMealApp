import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';

import ModalTitle from '../modal/ModalTitle';
import ModalContent from '../modal/ModalContent';
import useStyles from './styles';
import { getStarted } from '../../store/start/Start.selectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createUser } from '../../store/user/User.actions';
import { start } from '../../store/start/Start.actions';

const Start: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const started = useSelector(getStarted);

	const [ name, setName ] = React.useState('');
	const [ height, setHeight ] = React.useState('170');
	const [ weight, setWeight ] = React.useState('70');
	const [ age, setAge ] = React.useState('28');
	const [ gender, setGender ] = React.useState('male');

	const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setGender((event.target as HTMLInputElement).value);
	};

	const handleStartSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();

		dispatch(createUser({ name, height, weight, age, gender }));
		dispatch(start(true, true));
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

export default Start;
