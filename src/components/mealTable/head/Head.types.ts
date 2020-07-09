interface Data {
	calories: number;
	carbs: number;
	fat: number;
	name: string;
	protein: number;
}

export interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
}

export interface TableHeadProps {
	numSelected: number;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	rowCount: number;
}