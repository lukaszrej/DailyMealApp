import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getSteps, getStepContent } from '../../utils/stepperContent';
import * as S from "../../styles/components";
import * as T from "../../utils/constants";

interface StepperMainProps {
	activeStep: number;
	secondsToRemove: number;
	handleBack: () => void;
	handleNext: (activeStep: number, steps: string[]) => void;
	handleReset: () => void;
}

const StepperMain = (props: StepperMainProps) => {
	const { activeStep, secondsToRemove, handleBack, handleNext, handleReset } = props;
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
									{T.BACK}
								</Button>
								<Button
									variant='outlined'
									color={activeStep === steps.length - 1 ? 'secondary' : 'primary'}
									onClick={() => handleNext(activeStep, steps)}>

									{activeStep === steps.length - 1 ? T.FINISH_AND_REMOVE : T.NEXT}
								</Button>
								{activeStep === steps.length - 1 &&
									<Button variant='outlined' color="primary" onClick={handleReset}>
										{T.RESET}
									</Button>
								}
							</div>
						</S.StepperContent>
					</StepContent>
				</Step>
			))}

			{
				secondsToRemove > 0 &&
				<S.StepperRemove>{T.WILL_BE_REMOVED_AFTER} <span>{secondsToRemove}</span> {T.SECONDS}</S.StepperRemove>
			}
		</Stepper>
	);
};

export default StepperMain;
