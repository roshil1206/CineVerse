import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}`,
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
