export const getSteps = (): Array<string> => {
	return [ 'Find or add product', 'Add other product and submit', 'View your charts' ];
};

export const getStepContent = (step: number) => {
	switch (step) {
		case 0:
			return `Find product or add your own product using below listed form and compose your meal.`;
		case 1:
			return `Add other products to your meal and then click 'Submit meal'.`;
		case 2:
			return `View charts of your submitted meals under 'Your meals' page from the sidebar menu.`;
		default:
			return 'Unknown step';
	}
};
