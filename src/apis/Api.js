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