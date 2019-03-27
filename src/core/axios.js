import axios from 'axios';
import { BASE_URL_MOVIES } from "./constants";

const instance = axios.create({
    baseURL: BASE_URL_MOVIES,
});

export default instance;