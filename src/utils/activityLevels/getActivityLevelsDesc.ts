const getActivityLevelDesc = (userActivityLevel: string): string | null => {
	let activityLevelDescription = '';

	switch (userActivityLevel) {
		case '1.2':
			activityLevelDescription = 'Sedentary, not active';
			break;
		case '1.375':
			activityLevelDescription = 'Lightly active';
			break;
		case '1.55':
			activityLevelDescription = 'Moderately active';
			break;
		case '1.725':
			activityLevelDescription = 'Very active';
			break;
		case '1.9':
			activityLevelDescription = 'Extra active';
			break;
		default:
			return null;
	}

	return activityLevelDescription;
};

export default getActivityLevelDesc;
