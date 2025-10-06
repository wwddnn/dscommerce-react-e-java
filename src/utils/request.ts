
// esse arquivo vai nos auxiliar a fazer requisições

import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_URL } from "./system";
import * as authService from "../services/auth-service";

// método auxiliar para centralizar a lógica do token passando cabeçalho
export function requestBackend(config: AxiosRequestConfig) {

    // função ternaria pra decidir como vai ser os cabeçalhos da requisição
    const headers = config.withCredentials
        ?{
            ...config.headers,
            Authorization: "Bearer " + authService.getAccessToken()
        }
        : config.headers;

    return axios( {...config, baseURL: BASE_URL, headers } );
}   

