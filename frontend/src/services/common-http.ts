import axios, { AxiosInstance } from "axios";

const clientApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default clientApi;
