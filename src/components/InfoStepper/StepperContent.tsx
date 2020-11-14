import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getSteps, getStepContent } from '../../utils/stepperContent';
import { BACK, FINISH_AND_REMOVE, NEXT, RESET } from "../../utils/constants";
import * as S from "../_styles";

interface StepperMainProps {
	activeStep: number;
	handleBack: () => void;
	handleNext: (activeStep: number, steps: string[]) => void;
	handleReset: () => void;
}

const StepperMain = (props: StepperMainProps) => {
	const { activeStep, handleBack, handleNext, handleReset } = props;
	const steps = getSteps();

	return (
		<Stepper activeStep={activeStep} orientation='vertical'>
			{steps.map((label, index) => (
				<Step key={label + index}>
					<StepLabel>{label}</StepLabel>

					<StepContent>
						<Typography>{getStepContent(index)}</Typography>
						<S.StepperContent>
							<div>
								<Button disabled={activeStep === 0} variant="outlined" onClick={handleBack}>
									{BACK}
								</Button>
								<Button variant='outlined' color='primary' onClick={() => handleNext(activeStep, steps)}>
									{activeStep === steps.length - 1 ? FINISH_AND_REMOVE : NEXT}
								</Button>
								{activeStep === steps.length - 1 &&
									<Button variant='outlined' color='primary' onClick={handleReset}>
										{RESET}
									</Button>
								}
							</div>
						</S.StepperContent>
					</StepContent>
				</Step>
			))}
		</Stepper>
	);
};

export default StepperMain;
