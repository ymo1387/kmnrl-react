import axios from "axios";

// without token
const axiosClient = axios.create({
	baseURL: `http://localhost:8000/api/`,
});

// axios with token
const AxiosToken = (cookie = null) => {
	const axiosToken = axios.create({
		baseURL: `http://localhost:8000/api/`,
	});

	axiosToken.interceptors.request.use((config) => {
		config.headers.Authorization = `Bearer ${cookie}`;
		return config;
	});
	axiosToken.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			throw error;
		}
	);

	return axiosToken;
};

export { axiosClient, AxiosToken };
