import axios from "axios";

const api = axios.create({
  baseURL: "https://gym-management-website-1.onrender.com",
});
export default api;
