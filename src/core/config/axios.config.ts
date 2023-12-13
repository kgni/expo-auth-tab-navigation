import axios from 'axios';

const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL;

const axiosClient = axios.create({
	baseURL: `${baseURL}`,
});

export default axiosClient;
