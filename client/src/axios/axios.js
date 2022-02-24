import axios from "axios";

let api_route;
if (process.env.NODE_ENV === "production") api_route = process.env.API_ROUTE;
else api_route = "http://localhost:8080/api/v1";

const axiosInstance = axios.create({
  baseURL: api_route,
  withCredentials: true,
});

export default axiosInstance;
