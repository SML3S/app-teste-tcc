import axios from 'axios';

const clientServico = axios.create({
  baseURL: "http://localhost:8080"
});

export default clientServico;