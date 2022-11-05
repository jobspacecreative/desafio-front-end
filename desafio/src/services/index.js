import axios from "axios";

const baseURL = "https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos";

const getProducts = async () =>
  await axios.get(`${baseURL}`)
  .then((response) => {
    return response.data;
  });

export default getProducts;
