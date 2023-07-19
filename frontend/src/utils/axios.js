import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://localhost:4000/api",
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
