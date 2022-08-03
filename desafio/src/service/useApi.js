import axios from "axios";

const api = axios.create({
  baseURL: 'https://62d742f351e6e8f06f1a83da.mockapi.io/api'
});

export const useApi = () => ({
  listProducts: async () => {
    const response = await api.get('/produtos');
    return response.data;
  }
})