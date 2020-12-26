import React from 'react';
import shortid from 'shortid';
import { FormProps } from './index.types';
import { activityOptions } from '../../utils/activity-levels/activityLevels';
import FormControl from '@material-ui/core/FormControl';
import ModalContent from '../ModalContent';
import * as S from "../../styles";
import * as T from "../../utils/constants";

const Form = (props: FormProps) => {
	const {
		onSubmit,
		name, setName,
		height, setHeight,
		weight, setWeight,
		age, setAge,
		activityLevel, onActivityLevelChange,
		gender, onGenderChange,
		isInitialComponent
	} = props;

	return (
		<S.Form onSubmit={onSubmit}>
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
				<S.FullFormControl variant='outlined'>
					<S.InputLabel id='demo-simple-select-outlined-label'>{T.ACTIVITY_LEVEL}</S.InputLabel>
					<S.Select
						labelId='demo-simple-select-outlined-label'
						id='demo-simple-select-outlined'
						value={activityLevel}
						displayEmpty
						onChange={onActivityLevelChange}
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
				</S.FullFormControl>
				<FormControl component='fieldset'>
					<S.RadioGroup aria-label='gender' name='gender1' value={gender} onChange={onGenderChange}>
						<S.FormControlLabel value='male' control={<S.Radio />} label={T.MALE} />
						<S.FormControlLabel value='female' control={<S.Radio />} label={T.FEMALE} />
					</S.RadioGroup>
				</FormControl>
			</ModalContent>

			<S.ButtonContainer>
				<S.Button type='submit' variant={isInitialComponent ? "contained" : "outlined"} color='primary' autoFocus>
					{isInitialComponent ? T.START : T.SAVE}
				</S.Button>
			</S.ButtonContainer>
		</S.Form>
	);
};

export default Form;
