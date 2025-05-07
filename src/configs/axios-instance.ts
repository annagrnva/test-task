import axios from "axios";
import { BASE_BACKEND_URL } from '../constants'

export const axiosSetup = (): void => {
    axios.defaults.baseURL = BASE_BACKEND_URL;
}