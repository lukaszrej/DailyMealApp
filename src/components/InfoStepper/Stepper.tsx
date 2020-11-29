import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import StepperContent from './StepperContent';
import { removeStepper, useRemoveStepper } from "../../store/start/Start.actions";
import { getShowStepper } from '../../store/start/Start.selectors';
import * as S from "../../styles/components";
import * as T from "../../utils/constants";

const Stepper = () => {
	const dispatch = useDispatch();
	const showStepper = useSelector(getShowStepper);
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
		<S.Stepper square>
			<Typography variant='h6' noWrap>
				{T.INFO_STEPPER_HEADING}
			</Typography>
			<StepperContent
				activeStep={activeStep}
				handleBack={handleBack}
				handleNext={handleNext}
				handleReset={handleReset}
				secondsToRemove={secondsToRemove}
			/>
		</S.Stepper>
	);
};

export default Stepper;
