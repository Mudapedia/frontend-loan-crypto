import axios from "axios";

const axiosIns = axios.create({
  baseURL: "https://backend-loan-crypto.vercel.app/api",
  withCredentials: true,
});

export default axiosIns;
