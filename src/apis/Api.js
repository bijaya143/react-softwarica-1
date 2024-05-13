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

export const registerUserApi = (data) => Api.post('/api/user/create-user', data)
export const loginUserApi = (data) => Api.post('/api/user/login', data)
