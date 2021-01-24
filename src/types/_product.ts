export interface ProductDTO {
	food: {
		category: string;
		categoryLabel: string;
		foodId: string;
		image: string;
		label: string;
		nutrients: {
			CHOCDF: number;
			ENERC_KCAL: number;
			FAT: number;
			FIBTG: number;
			PROCNT: number;
		};
	};
}

export interface Product {
	foodId: string;
	label: string;
	carbs: number;
	calories: number;
	fat: number;
	protein: number;
}
