import React, { useState } from 'react';
import { useRemoveStepper } from "../../store/start/Start.actions";
import Typography from '@material-ui/core/Typography';
import StepperContent from './StepperContent';
import { useDispatch, useSelector } from 'react-redux';
import { removeStepper } from '../../store/start/Start.actions';
import { getShowStepper } from '../../store/start/Start.selectors';
import { INFO_STEPPER_HEADING } from "../../utils/constants";
import * as S from "../_styles";

const Stepper = () => {
	const dispatch = useDispatch();
	const showStepper = useSelector(getShowStepper);
	const [activeStep, setActiveStep] = useState(0);
	const [seconds, setSeconds] = useState(15);

	const handleNext = (activeStep: number, steps: string[]) => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);

		if (activeStep === steps.length - 1) {
			dispatch(removeStepper());
			setActiveStep(0);
			setSeconds(0);
		}
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	// remove initial stepper after 15 seconds
	useRemoveStepper(seconds, setSeconds);

	if (!showStepper) return null;

	return (
		<S.Stepper square>
			<Typography variant='h6' noWrap>
				{INFO_STEPPER_HEADING}
			</Typography>
			<StepperContent activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} handleReset={handleReset} />
			{/* todo: organize below section of removing initial stepper */}
			{seconds > 0 && <div>Section will be removed after {seconds} seconds.</div>}
		</S.Stepper>
	);
};

export default Stepper;
