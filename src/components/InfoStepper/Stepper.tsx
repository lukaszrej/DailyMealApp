import React, { useState } from 'react';
import { useRemoveStepper } from "../../store/start/Start.actions";
import StepperTitle from './StepperTitle';
import StepperMain from './StepperMain';
import StepperReset from './StepperReset';
import { useDispatch, useSelector } from 'react-redux';
import { removeStepper } from '../../store/start/Start.actions';
import { getShowStepper } from '../../store/start/Start.selectors';
import * as S from "../_styles";

const Stepper = () => {
	const dispatch = useDispatch();
	const showStepper = useSelector(getShowStepper);
	const [activeStep, setActiveStep] = useState(0);
	const [seconds, setSeconds] = useState(5);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	// remove stepper after 5 seconds
	useRemoveStepper(seconds, setSeconds);

	const handleRemove = () => {
		setActiveStep(0);
		dispatch(removeStepper());
	};

	if (!showStepper) return null;

	return (
		<S.Stepper square>
			<StepperTitle />
			<StepperMain activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} />
			<StepperReset activeStep={activeStep} handleReset={handleReset} handleRemove={handleRemove} />
			{seconds > 0 &&
				<div>Section will be removed after {seconds} seconds.</div>
			}
		</S.Stepper>
	);
};

export default Stepper;
