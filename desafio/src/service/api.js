import axios from 'axios'

export const api = axios.create({
    baseURL: "https://62d742f351e6e8f06f1a83da.mockapi.io/api",
    timeout: 10000
});