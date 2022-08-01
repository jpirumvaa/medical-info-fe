import axios from "axios";
const baseURL = process.env.REACT_APP_BACKEND_URL;

const http = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },

});

export default http;