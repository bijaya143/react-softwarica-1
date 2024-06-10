import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const testApi = () => Api.get('/test')
export const testNewApi = () => Api.get('/test-new')

// Authentication
export const registerUserApi = (data) => Api.post('/api/user/create-user', data)
export const loginUserApi = (data) => Api.post('/api/user/login', data)


// Products
export const createProductApi = (data) => Api.post('/api/product/create', data, {
    headers:{
        'Content-Type':'multipart/form-data'
    }
})
export const getProductsApi = () => Api.get('/api/product')
export const getProductApi = (id) => Api.get(`/api/product/${id}`)
export const deleteProductApi = (id) => Api.delete(`/api/product/${id}`)
export const updateProductApi = (id, data) => Api.patch(`/api/product/${id}`, data, {
    headers: {
        'Content-Type':'multipart/form-data'
    }
})
