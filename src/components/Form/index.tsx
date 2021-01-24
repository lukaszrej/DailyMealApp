import { Props } from './index.types';
import { activityOptions } from '../../constants/activity-options';
import { FormControl } from '@material-ui/core';
import { ModalContent } from '../ModalContent';
import * as S from "../../styles";
import * as T from "../../constants/constants";

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

	return (
		<S.Form onSubmit={onSubmit}>
			<ModalContent dividers>
				<S.TextField
					value={name}
					id='name'
					name='name'
					label='Name'
					fullWidth
					variant='outlined'
					autoComplete='name'
					onChange={e => setName(e.target.value)}
				/>

				<S.TextField
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

				<S.TextField
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

				<S.TextField
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

				<S.FullFormControl variant='outlined'>
					<S.InputLabel id='activity-level-select'>
                        {T.ACTIVITY_LEVEL}
                    </S.InputLabel>

					<S.Select
						value={activityLevel}
						id='activity-level-select'
						label='Activity level'
						labelId='activity-level-label'
						displayEmpty
						onChange={onActivityLevelChange}
					>
						{activityOptions.map(element => 
                            <S.MenuItem key={element.id} value={element.activityValue}>
                                {element.activityDescription}
                            </S.MenuItem>
						)}
					</S.Select>
				</S.FullFormControl>

				<FormControl component='fieldset'>
                    <S.RadioGroup 
                        value={gender}
                        onChange={onGenderChange}
                        aria-label='gender'
                        name='gender1' 
                    >
						<S.FormControlLabel value='male' label='Male' control={<S.Radio />} />
						<S.FormControlLabel value='female' label='Female' control={<S.Radio />} />
					</S.RadioGroup>
				</FormControl>
			</ModalContent>

			<S.ButtonContainer>
                <S.Button 
                    type='submit'
                    color='primary'
                    autoFocus
                    variant={isInitialComponent ? "contained" : "outlined"}
                >
					{isInitialComponent ? T.START : T.SAVE}
				</S.Button>
			</S.ButtonContainer>
		</S.Form>
	);
};
