import { ChangeEvent, SyntheticEvent, Dispatch, SetStateAction } from 'react';

export interface FormProps {
	onSubmit: (e: SyntheticEvent) => void;
	name: string;
	setName: Dispatch<SetStateAction<string>>;
	height: string;
	setHeight: Dispatch<SetStateAction<string>>;
	weight: string;
	setWeight: Dispatch<SetStateAction<string>>;
	age: string;
	setAge: Dispatch<SetStateAction<string>>;
	activityLevel: string;
	onActivityLevelChange: (e: ChangeEvent<{
		name?: string | undefined;
		value: unknown;
	}>) => void;
	gender: string;
	onGenderChange: (e: ChangeEvent<HTMLInputElement>) => void;
	isInitialComponent?: boolean;
}
