import axios from "axios";

const axiosInstance = () => {
  const _axios = axios.create({
    baseURL: "/api",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
  })
  return _axios;
}

export default axiosInstance;
