import axios from "axios";

const reqresApiKey = process.env.APP_URL_REQRES;

const instanceAxios = axios.create({
    baseURL: reqresApiKey,
});

instanceAxios.defaults.withCredentials = false;
instanceAxios.interceptors.request.use((config) => {
    let itemStorage = getLocalStorage();
    if (itemStorage) {
      itemStorage = JSON.parse(itemStorage);
      config.headers = config.headers || {};
      config.headers['Authorization'] = itemStorage.access_token ? `Bearer ${itemStorage.access_token}` : "";
    }
    return config;
});

const getLocalStorage = () =>{
    return localStorage.getItem('user') ? localStorage.getItem('user') : null
}

export default instanceAxios;



