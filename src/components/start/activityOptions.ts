export type Option = {
	activityValue: string;
	activityDescription: string;
};

export const activityOptions: Array<Option> = [
	{
		activityValue: '1.2',
		activityDescription: 'Sedentary (little or no exercise)'
	},
	{
		activityValue: '1.385',
		activityDescription: 'Lightly active (light exercise 1-3 days/week)'
	},
	{
		activityValue: '1.55',
		activityDescription: 'Moderately active (moderate exercise 3-5 days/week)'
	},
	{
		activityValue: '1.725',
		activityDescription: 'Very active (hard exercise 6-7 days a week)'
	},
	{
		activityValue: '1.9',
		activityDescription: 'Extra active (very hard exercise & physical job'
	}
];
