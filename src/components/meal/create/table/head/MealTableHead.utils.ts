import { HeadCell } from './MealTableHead.types';

export const headCells: HeadCell[] = [
	{ id: 'name', numeric: false, disablePadding: true, label: 'Product (100g serving)' },
	{ id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
	{ id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
	{ id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
	{ id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' }
];
