import axios from 'axios';
import { ProductsApiResponse } from '../../store/product/Product.types';

const API_Url: string = 'https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id=';
const API_ID: string | undefined = process.env.REACT_APP_API_ID;
const API_Keys: string | undefined = process.env.REACT_APP_API_KEYS;

const getData = async (productName: string): Promise<ProductsApiResponse> => {
	const productURL = API_Url + `${API_ID}&&app_key=${API_Keys}&ingr=${productName}`;

	return await axios.get(productURL);
};

export default getData;
