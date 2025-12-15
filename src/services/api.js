import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

//jika punya token ya, ini dipakai auth aja
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser")
    }

    return Promise.reject(error);
  }
);
