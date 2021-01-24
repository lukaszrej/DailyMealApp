import axios from 'axios';
import { ProductDTO } from '../../types';
import { API_URL, API_ID, API_KEY } from '../../constants/url-repository';

export const getAPIProducts = (productName: string) => {
	const productURL = API_URL + `${API_ID}&&app_key=${API_KEY}&ingr=${productName}`;

	return axios.get(productURL);
};

export const configProducts = (productsDTO: ProductDTO[]) => {
	return productsDTO.map((product) => {
		return {
			foodId: product.food.foodId,
			label: product.food.label,
			carbs: product.food.nutrients.CHOCDF,
			calories: product.food.nutrients.ENERC_KCAL,
			fat: product.food.nutrients.FAT,
			protein: product.food.nutrients.PROCNT
		};
	});
};
