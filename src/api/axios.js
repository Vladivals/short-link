import axios from 'axios';
import App  from '../App';
import useAuth from '../Hooks/useAuth';

const BASE_URL = 'http://79.143.31.216';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});
