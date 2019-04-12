import axios from 'axios';

const api = axios.create({
    baseURL: "http://omnistack-backend.herokuapp.com"
});

export default api;