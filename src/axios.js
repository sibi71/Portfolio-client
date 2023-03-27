import axios from "axios"

const instance = axios.create({
    baseURL:`https://portfolio-server-uy2j.onrender.com/api`,
});

export default instance;