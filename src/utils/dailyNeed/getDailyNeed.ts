interface Args {
	weight: string | null;
	height: string | null;
	age: string | null;
	gender: string | null;
	activityLevel: string | null;
}

const getDailyNeed = ({ weight, height, age, gender, activityLevel }: Args): number => {
	let dailyNeedLocal: number = 0;

	if (gender === 'Male') {
		dailyNeedLocal = Number(activityLevel) * (10 * Number(weight)) + 6.25 * Number(height) - 5 * Number(age) + 5;
	} else {
		dailyNeedLocal = Number(activityLevel) * (10 * Number(weight)) + 6.25 * Number(height) - 5 * Number(age) - 166;
	}

	return dailyNeedLocal;
};

export default getDailyNeed;
