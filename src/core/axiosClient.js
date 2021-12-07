import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_JAVA_API_URL,
	headers: {
		"content-type": "application/json",
	},
	paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
<<<<<<< HEAD
	const token = localStorage.getItem("accessToken");
	if (token) {
		config.headers.Authorization = `${token}`;
	}
	return config;
});
=======
    const token = localStorage.getItem('accessToken')
    if (token) {
        config.headers.Authorization = `${token}`
    }
    return config
})
>>>>>>> 3a2c18b12e1f0fe01f053bb2d57ddc10eb74f773

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(error) => {
		throw error;
	}
);

export default axiosClient;
