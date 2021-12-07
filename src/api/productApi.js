import axiosClient from "../core/axiosClient";

const SERVICE_URL = "/product-service";

const productApi = {
	fetchProducts: ({ page, size, sortType, categoryId }) => {
		return axiosClient.get(`${SERVICE_URL}/products`, {
			params: {
				page,
				size,
				sortType,
				categoryId,
			},
		});
	},
	fetchProductById: (productId) => {
		return axiosClient.get(`${SERVICE_URL}/products/${productId}`);
	},
	addProduct: (categoryId, description, name, price) => {
		return axiosClient.post(`${SERVICE_URL}/admin`, {
			categoryId,
			description,
			name,
			price,
		});
	},
	deleteProduct: (productId) => {
		return axiosClient.delete(`${SERVICE_URL}/admin/${productId}`);
	},
	updateImage: (productId, file) => {
		return axiosClient.put(`${SERVICE_URL}/admin/${productId}/image`, file);
	},
	addCategory: ({ description, name }) => {
		return axiosClient.post(`${SERVICE_URL}/categories`, {
			description,
			name,
		});
	},

	fetchCategories: () => {
		return axiosClient.get(`${SERVICE_URL}/categories`);
	},
	fetchCategorById: (categoryId) => {
		return axiosClient.get(`${SERVICE_URL}/categories/${categoryId}}`);
	},
	deleteCategorById: (categoryId) => {
		return axiosClient.delete(`${SERVICE_URL}/categories/${categoryId}}`);
	},
};

export default productApi;
