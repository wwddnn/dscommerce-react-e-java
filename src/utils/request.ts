// esse arquivo vai nos auxiliar a fazer requisições

import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_URL } from "./system";
import { history } from "./history";
import * as authService from "../services/auth-service";

// método auxiliar para centralizar a lógica do token passando cabeçalho
export function requestBackend(config: AxiosRequestConfig) {
  // função ternaria pra decidir como vai ser os cabeçalhos da requisição
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getAccessToken(),
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
}

// basta colocar esse codigo em qualquer arquivo que ja esta funcionando o interceptors para capturar o erro global
// REQUEST INTERCEPTOR // captura o erro global
axios.interceptors.request.use(
  function (config) {
    // DO SOMETHING BEFORE REQUEST IS SENT // poe codigo aqui 
    return config;
  },
  function (error) {
    // DO SOMETHING WITH REQUEST ERROR // poe aqui se for error
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
  function (response) {
    // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx // poe aqui se estatus for ok
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      history.push("/login"); // le do historyRouter o erro e manda pra tela de login
    }
    if (error.response.status === 403) {
      history.push("/catalogo"); // le do historyRouter o erro e manda pra tela de catalogo
    }
    // DO SOMETHING WITH RESPONSE ERROR // poe aqui se for error
    return Promise.reject(error);
  }
);
