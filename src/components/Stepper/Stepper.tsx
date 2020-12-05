import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeStepper, useRemoveStepper } from "../../store/start/Start.actions";
import { getShowStepper } from '../../store/start/Start.selectors';
import { getSteps, getStepContent } from '../../utils/stepperContent';
import * as T from "../../utils/constants";
import * as S from "../../styles";

const Stepper = () => {
	const dispatch = useDispatch();
	const showStepper = useSelector(getShowStepper);
	const steps = getSteps();
	const [activeStep, setActiveStep] = useState(0);
	const [secondsToRemove, setSecondsToRemove] = useState(15);

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
									<S.Button disabled={activeStep === 0} variant="outlined" onClick={handleBack}>
										{T.BACK}
									</S.Button>
									<S.Button
										variant='outlined'
										color={activeStep === steps.length - 1 ? 'secondary' : 'primary'}
										onClick={() => handleNext(activeStep, steps)}>

										{activeStep === steps.length - 1 ? T.FINISH_AND_REMOVE : T.NEXT}
									</S.Button>
									{activeStep === steps.length - 1 &&
										<S.Button variant='outlined' color="primary" onClick={handleReset}>
											{T.RESET}
										</S.Button>
									}
								</div>
							</S.StepperContent>
						</S.StepContent>
					</S.Step>
				))}

				{
					secondsToRemove > 0 &&
					<S.StepperRemove>{T.WILL_BE_REMOVED_AFTER} <span>{secondsToRemove}</span> {T.SECONDS}</S.StepperRemove>
				}
			</S.Stepper>
		</S.StepperContainer>
	);
};

export default Stepper;
