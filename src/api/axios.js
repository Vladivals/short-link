import axios from 'axios';
import App  from '../App';
import useAuth from '../Hooks/useAuth';




// axios.defaults.baseURL = 'http://79.143.31.216'
// axios.defaults.headers.common = {'Authorization': `bearer ""`}
// export default axios;

const BASE_URL = 'http://79.143.31.216';


export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});