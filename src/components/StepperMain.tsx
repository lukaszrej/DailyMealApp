import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getSteps, getStepContent } from '../utils/stepperContent';
import * as S from "./styles";

interface StepperMainProps {
	activeStep: number;
	handleBack: () => void;
	handleNext: () => void;
}

const StepperMain: React.FC<StepperMainProps> = (props: StepperMainProps) => {
	const { activeStep, handleBack, handleNext } = props;
	const steps = getSteps();

	return (
		<Stepper activeStep={activeStep} orientation='vertical'>
			{steps.map((label, index) => (
				<Step key={label + index}>
					<StepLabel>{label}</StepLabel>

					<StepContent>
						<Typography>{getStepContent(index)}</Typography>
						<S.StepperMain>
							<div>
								<Button disabled={activeStep === 0} onClick={handleBack}>
									Back
								</Button>
								<Button variant='contained' color='primary' onClick={handleNext}>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</div>
						</S.StepperMain>
					</StepContent>
				</Step>
			))}
		</Stepper>
	);
};

export default StepperMain;
