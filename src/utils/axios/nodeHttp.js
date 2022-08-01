import axios from "axios";
const baseURL = process.env.REACT_APP_NODE_BACKEND_URL;

const http = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },

});

export default http;