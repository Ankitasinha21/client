import axios from 'axios';
const API = axios.create({
    baseURL: 'https://serverapi1-1.onrender.com/api',
    withCredentials:true,



});

export default API;