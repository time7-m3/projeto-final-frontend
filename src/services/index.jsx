import axios from "axios";

const api = axios.create({
  baseURL: "https://alugue-meu-carro.herokuapp.com",
});

export default api;
