import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:8009/api",
    headers: 'application/json'
});