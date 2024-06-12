import axios from "axios";

axios.defaults.baseURL = 'http://184.72.166.63:3000'
axios.defaults.timeout = 5000
axios.defaults.headers.common = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export default axios