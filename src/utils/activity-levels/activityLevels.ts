import { ActivityOption } from './activityLevels.types';

export const activityOptions: ActivityOption[] = [
	{
		id: 1,
		activityValue: '1.2',
		activityDescription: 'Sedentary (little or no exercise)'
	},
	{
		id: 2,
		activityValue: '1.375',
		activityDescription: 'Lightly active (light exercise 1-3 days/week)'
	},
	{
		id: 3,
		activityValue: '1.55',
		activityDescription: 'Moderately active (moderate exercise 3-5 days/week)'
	},
	{
		id: 4,
		activityValue: '1.725',
		activityDescription: 'Very active (hard exercise 6-7 days a week)'
	},
	{
		id: 5,
		activityValue: '1.9',
		activityDescription: 'Extra active (very hard exercise & physical job'
	}
];
