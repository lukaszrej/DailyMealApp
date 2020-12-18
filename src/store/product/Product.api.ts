import axios from 'axios';
import * as link from "../../utils/url.repository";

const API_Url: string = link.edamam;
const API_ID: string | undefined = process.env.REACT_APP_API_ID;
const API_Keys: string | undefined = process.env.REACT_APP_API_KEYS;

const getAPIProducts = (productName: string) => {
	const productURL = API_Url + `${API_ID}&&app_key=${API_Keys}&ingr=${productName}`;

	return axios.get(productURL);
};

export default getAPIProducts;
