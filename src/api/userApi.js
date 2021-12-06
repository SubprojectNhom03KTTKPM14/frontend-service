import axiosClient from '../core/axiosClient'

const SERVICE_URL = '/user-service'

const userApi = {
    fetchUser: () => {
        return axiosClient.get(`${SERVICE_URL}/users`)
    },
    fetUserByid: (userId) => {
        return axiosClient.get(`${SERVICE_URL}/users/${{ userId }}`)
    },
    login: (email, password) => {
        return axiosClient.post(`${SERVICE_URL}/auth/login`, {
            email,
            password,
        })
    },
    registry: ({ address, email, password, phone, name }) => {
        return axiosClient.post(`${SERVICE_URL}/auth/register`, {
            address,
            email,
            password,
            phone,
            name,
        })
    },
}

export default userApi
