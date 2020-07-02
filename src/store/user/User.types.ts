export const USER = 'USER';
export interface UserAction {
	type?: typeof USER;
	name: string;
	height: string;
	weight: string;
	age: string;
	gender: string;
	activityLevel: string;
}

export type allUserActionTypes = UserAction;
