import axios from 'axios';
import { API_URL, API_ID, API_KEY } from '../../constants/url-repository';

const getAPIProducts = (productName: string) => {
	const productURL = API_URL + `${API_ID}&&app_key=${API_KEY}&ingr=${productName}`;

	return axios.get(productURL);
};

export default getAPIProducts;
