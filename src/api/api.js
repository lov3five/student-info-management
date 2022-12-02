// API
import axios from "axios";

const api = axios.create({
    baseURL: "https://student-info-management-git-back-end-lov3five.vercel.app/api/"
})

export default api;