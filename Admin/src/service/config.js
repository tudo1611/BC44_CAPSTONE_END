import axios from "axios";
import { store } from "..";
import { showLoading, hideLoading } from "../redux/loadingSpinnerSlice";
import { TOKEN_CYBERSOFT, BASE_URL, ACCESS_TOKEN } from "../constants";
import { localServ } from "./localStoreService";

export let https = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

https.interceptors.request.use(
  function (config) {
    store.dispatch(showLoading());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  function (response) {
    store.dispatch(hideLoading());
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

https.interceptors.request.use(
  function (config) {
    const { accessToken } = localServ.getAdmin() || {};
    if (accessToken) {
      config.headers.Authorization = ACCESS_TOKEN;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
