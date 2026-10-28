
import axios from "axios";

const api = axios.create({
  baseURL: "https://staffsync-backend-f6fc.onrender.com/api",
});

export default api;
