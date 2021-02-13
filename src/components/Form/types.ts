import { ChangeEvent, SyntheticEvent, Dispatch, SetStateAction } from 'react';

export interface Props {
	name: string;
	height: string;
	weight: string;
	age: string;
	activityLevel: string;
    gender: string;
    isInitialComponent?: boolean;
	onSubmit: (e: SyntheticEvent) => void;
	setName: Dispatch<SetStateAction<string>>;
	setHeight: Dispatch<SetStateAction<string>>;
	setWeight: Dispatch<SetStateAction<string>>;
	setAge: Dispatch<SetStateAction<string>>;
    onGenderChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onActivityLevelChange: (e: ChangeEvent<{
		name?: string | undefined;
		value: unknown;
	}>) => void;
}
