export interface UserDetails {
	name?: string;
	height: string;
	weight: string;
	age: string;
	gender: string;
	activityLevel: string;
}

export const CREATE_USER = 'CREATE_USER';
export interface CreateUserAction {
	type: typeof CREATE_USER;
	name: string;
	height: string;
	weight: string;
	age: string;
	gender: string;
	activityLevel: string;
}

export const CALCULATE_DAILY_NEED = 'CALCULATE_DAILY_NEED';
export interface CalculateDailyNeedAction {
	type: typeof CALCULATE_DAILY_NEED;
	payload: number;
}

export type allUserActionTypes = CreateUserAction | CalculateDailyNeedAction;
