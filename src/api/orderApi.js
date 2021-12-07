import axiosClient from "../core/axiosClient";

const SERVICE_URL = "/order-service";

const orderApi = {
	fetchOrderOfUser: (userId) => {
		return axiosClient.get(`${SERVICE_URL}/orders`, {
			headers: {
				userId,
			},
		});
	},
	createOrder: (orders, userId) => {
		return axiosClient.post(`${SERVICE_URL}/orders`, orders, {
			headers: {
				userId,
			},
		});
	},
	fetchOrders: () => {
		return axiosClient.get(`${SERVICE_URL}/admin`);
	},
};

export default orderApi;
