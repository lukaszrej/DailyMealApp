import React from 'react';
import StepperTitle from './StepperTitle';
import StepperMain from './StepperMain';
import StepperReset from './StepperReset';
import { useDispatch, useSelector } from 'react-redux';
import { removeStepper } from '../store/start/Start.actions';
import { getShowStepper } from '../store/start/Start.selectors';
import * as S from "./styles";

const Stepper: React.FC = (): JSX.Element | null => {
	const dispatch = useDispatch();
	const showStepper = useSelector(getShowStepper);
	const [ activeStep, setActiveStep ] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

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
		</S.Stepper>
	);
};

export default Stepper;
