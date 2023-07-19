import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://localhost400/api",
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
