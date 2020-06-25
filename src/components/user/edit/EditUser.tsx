import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';

import SnackbarAlert from '../../alert/SnackbarAlert';
import ModalTitle from '../../modal/ModalTitle';
import ModalContent from '../../modal/ModalContent';
import ModalActions from '../../modal/ModalActions';
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../../../store/user/User.actions';
import {
	getUserName,
	getUserHeight,
	getUserWeight,
	getUserAge,
	getUserGender
} from '../../../store/user/User.selectors';

const EditUser: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const [ open, setOpen ] = React.useState(false);
	const [ displayAlert, setDisplayAlert ] = React.useState(false);

	const currentName = useSelector(getUserName);
	const [ name, setName ] = React.useState(currentName);
	const currentHeight = useSelector(getUserHeight);
	const [ height, setHeight ] = React.useState(currentHeight);
	const currentWeight = useSelector(getUserWeight);
	const [ weight, setWeight ] = React.useState(currentWeight);
	const currentAge = useSelector(getUserAge);
	const [ age, setAge ] = React.useState(currentAge);
	const currentGender = useSelector(getUserGender);
	const [ gender, setGender ] = React.useState(currentGender);

	const handleClickOpen = () => {
		setOpen(true);
		setDisplayAlert(false);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGender((event.target as HTMLInputElement).value);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		dispatch(createUser({ name, height, weight, age, gender }));
		setOpen(false);
		setDisplayAlert(true);
	};

	return (
		<React.Fragment>
			<Button variant='outlined' color='primary' onClick={handleClickOpen}>
				Edit data
			</Button>

			<Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
				<ModalTitle id='customized-dialog-title' onClose={handleClose}>
					Edit user data
				</ModalTitle>

				<form onSubmit={handleSubmit}>
					<ModalContent dividers>
						<TextField
							variant='outlined'
							fullWidth
							id='name'
							name='name'
							label='Name'
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
							label='Height (cm)'
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
							label='Weight (kg)'
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
							label='Age (years)'
							autoComplete='age'
							type='number'
							onChange={(e) => setAge(e.target.value)}
							value={age}
						/>

						<FormControl component='fieldset'>
							<RadioGroup aria-label='gender' name='gender1' value={gender} onChange={handleGenderChange}>
								<FormControlLabel value='male' control={<Radio />} label='Male' />
								<FormControlLabel value='female' control={<Radio />} label='Female' />
							</RadioGroup>
						</FormControl>
					</ModalContent>
					<ModalActions>
						<Button autoFocus type='submit' color='primary'>
							Save
						</Button>
					</ModalActions>
				</form>
			</Dialog>

			{displayAlert && <SnackbarAlert />}
		</React.Fragment>
	);
};

export default EditUser;
