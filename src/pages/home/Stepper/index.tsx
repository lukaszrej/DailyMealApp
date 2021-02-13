import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeStepper, useRemoveStepper } from '../../../store/login/Login.actions';
import { getDisplayedStepper } from '../../../store/login/Login.selectors';
import { getSteps } from '../../../utils/getSteps';
import { getStepContent } from '../../../utils/getStepContent';
import * as T from '../../../constants/constants';
import {
	StepperContainer,
	Stepper as StepperWrapper,
	Typography,
	Button,
	Step,
	StepLabel,
	StepContent,
	StepperContent,
	StepperRemove
} from '../../../styles';

export const Stepper = () => {
	const dispatch = useDispatch();
	const showStepper = useSelector(getDisplayedStepper);
	const steps = getSteps();
	const [ activeStep, setActiveStep ] = useState(0);
	const [ secondsToRemove, setSecondsToRemove ] = useState(15);

	const handleNext = (activeStep: number, steps: string[]) => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);

		if (activeStep === steps.length - 1) {
			dispatch(removeStepper());
			setActiveStep(0);
			setSecondsToRemove(0);
		}
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	// remove initial stepper after 15 seconds
	useRemoveStepper(secondsToRemove, setSecondsToRemove);

	if (!showStepper) return null;

	return (
		<StepperContainer square>
			<Typography variant='h6' noWrap>
				{T.INFO_STEPPER_HEADING}
			</Typography>

			<StepperWrapper activeStep={activeStep} orientation='vertical'>
				{steps.map((label, index) => (
					<Step key={label + index}>
						<StepLabel>{label}</StepLabel>

						<StepContent>
							<Typography>{getStepContent(index)}</Typography>
							<StepperContent>
								<div>
									<Button onClick={handleBack} disabled={activeStep === 0} variant='outlined'>
										{T.BACK}
									</Button>
									<Button
										variant='outlined'
										color={activeStep === steps.length - 1 ? 'secondary' : 'primary'}
										onClick={() => handleNext(activeStep, steps)}
									>
										{activeStep === steps.length - 1 ? T.FINISH_AND_REMOVE : T.NEXT}
									</Button>
									{activeStep === steps.length - 1 && (
										<Button onClick={handleReset} variant='outlined' color='primary'>
											{T.RESET}
										</Button>
									)}
								</div>
							</StepperContent>
						</StepContent>
					</Step>
				))}

				{secondsToRemove > 0 && (
					<StepperRemove>
						{T.WILL_BE_REMOVED_AFTER} <span>{secondsToRemove}</span> {T.SECONDS}
					</StepperRemove>
				)}
			</StepperWrapper>
		</StepperContainer>
	);
};
