import axios from "axios";
import { useAuth } from "../components/AuthContext";

const api = axios.create({
    baseURL: 'http://192.168.5.107:3000' // Substitua pelo seu IP
});

api.interceptors.request.use((config) => {
    const { userToken } = useAuth();
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  });


export default api;