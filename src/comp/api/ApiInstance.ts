import axios from "axios";

const axiosInstance = () => {
  const _axios = axios.create({
    baseURL: "/api/nx-board",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Content-Type': 'application/json'
    }
  })
  return _axios;
}

export default axiosInstance;
