import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeStepper, useRemoveStepper } from '../../../store/login/Login.actions';
import { getDisplayedStepper } from '../../../store/login/Login.selectors';
import { getSteps } from '../../../utils/getSteps';
import { getStepContent } from '../../../utils/getStepContent';
import * as T from '../../../constants/constants';
import * as S from '../../../styles';

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
		<S.StepperContainer square>
			<S.Typography variant='h6' noWrap>
				{T.INFO_STEPPER_HEADING}
			</S.Typography>

			<S.Stepper activeStep={activeStep} orientation='vertical'>
				{steps.map((label, index) => (
					<S.Step key={label + index}>
						<S.StepLabel>{label}</S.StepLabel>

						<S.StepContent>
							<S.Typography>{getStepContent(index)}</S.Typography>
							<S.StepperContent>
								<div>
									<S.Button onClick={handleBack} disabled={activeStep === 0} variant='outlined'>
										{T.BACK}
									</S.Button>
									<S.Button
										variant='outlined'
										color={activeStep === steps.length - 1 ? 'secondary' : 'primary'}
										onClick={() => handleNext(activeStep, steps)}
									>
										{activeStep === steps.length - 1 ? T.FINISH_AND_REMOVE : T.NEXT}
									</S.Button>
									{activeStep === steps.length - 1 && (
										<S.Button onClick={handleReset} variant='outlined' color='primary'>
											{T.RESET}
										</S.Button>
									)}
								</div>
							</S.StepperContent>
						</S.StepContent>
					</S.Step>
				))}

				{secondsToRemove > 0 && (
					<S.StepperRemove>
						{T.WILL_BE_REMOVED_AFTER} <span>{secondsToRemove}</span> {T.SECONDS}
					</S.StepperRemove>
				)}
			</S.Stepper>
		</S.StepperContainer>
	);
};
