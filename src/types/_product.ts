export interface Product {
	food: {
		foodId: string;
		label: string;
		nutrients: {
			CHOCDF: number;
			ENERC_KCAL: number;
			FAT: number;
			PROCNT: number;
		};
	};
}
