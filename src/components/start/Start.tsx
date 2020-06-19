import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { createUser } from '../../store/user/User.actions';
import { start } from '../../store/start/Start.actions';

const Start: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const started = useSelector((state: AppState) => state.start.started);

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
		<div className={classes.root}>
			{!started && (
				<React.Fragment>
					<CssBaseline />
					<Container maxWidth='sm'>
						<Typography variant='body2' component='div'>
							<form noValidate onSubmit={handleStartSubmit} className={classes.form}>
								<TextField
									variant='outlined'
									margin='normal'
									required
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
									required
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
									required
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
									required
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
						</Typography>
					</Container>
				</React.Fragment>
			)}
		</div>
	);
};

export default Start;
