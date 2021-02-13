import { Props } from './types';
import { activityOptions } from '../../constants/activity-options';
import { FormControl } from '@material-ui/core';
import { ModalContent } from '../ModalContent';
import { useInputFocus } from '../../hooks/useInputFocus';
import * as T from '../../constants/constants';
import {
	Form as FormContainer,
	TextField,
	FullFormControl,
	InputLabel,
	Select,
	MenuItem,
	RadioGroup,
	FormControlLabel,
	ModalButtonContainer,
	Button,
	Radio
} from '../../styles';

export const Form = (props: Props) => {
	const {
		name,
		height,
		weight,
		age,
		activityLevel,
		gender,
		isInitialComponent,
		onSubmit,
		setName,
		setHeight,
		setWeight,
		setAge,
		onActivityLevelChange,
		onGenderChange
	} = props;

	const [ inputRef ] = useInputFocus();

	return (
		<FormContainer onSubmit={onSubmit} autoComplete="off">
			<ModalContent dividers>
				<TextField
					value={name}
					id='name'
					name='name'
					label='Name'
					fullWidth
					inputRef={inputRef}
					variant='outlined'
					autoComplete='name'
					onChange={e => setName(e.target.value)}
				/>

				<TextField
					value={height}
					type='number'
					id='height'
					name='height'
					label='Height (cm)'
					fullWidth
					variant='outlined'
					margin='normal'
					autoComplete='height'
					onChange={e => setHeight(e.target.value)}
				/>

				<TextField
					value={weight}
					type='number'
					id='weight'
					name='weight'
					label='Weight (kg)'
					fullWidth
					variant='outlined'
					autoComplete='weight'
					onChange={e => setWeight(e.target.value)}
				/>

				<TextField
					value={age}
					type='number'
					id='age'
					name='age'
					label='Age (years)'
					variant='outlined'
					fullWidth
					autoComplete='age'
					onChange={e => setAge(e.target.value)}
				/>

				<FullFormControl variant='outlined'>
					<InputLabel id='activity-level-select'>{T.ACTIVITY_LEVEL}</InputLabel>

					<Select
						value={activityLevel}
						id='activity-level-select'
						label='Activity level'
						labelId='activity-level-label'
						displayEmpty
						onChange={onActivityLevelChange}
					>
						{activityOptions.map((element) => (
							<MenuItem key={element.id} value={element.activityValue}>
								{element.activityDescription}
							</MenuItem>
						))}
					</Select>
				</FullFormControl>

				<FormControl component='fieldset'>
					<RadioGroup value={gender} onChange={onGenderChange} aria-label='gender' name='gender1'>
						<FormControlLabel value='male' label='Male' control={<Radio />} />
						<FormControlLabel value='female' label='Female' control={<Radio />} />
					</RadioGroup>
				</FormControl>
			</ModalContent>

			<ModalButtonContainer>
				<Button type='submit' color='primary' autoFocus variant={isInitialComponent ? 'contained' : 'outlined'}>
					{isInitialComponent ? T.START : T.SAVE}
				</Button>
			</ModalButtonContainer>
		</FormContainer>
	);
};
