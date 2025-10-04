
// esse arquivo vai nos auxiliar a fazer requisições

import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_URL } from "./system";

// método auxiliar para centralizar a lógica do token passando cabeçalho
export function requestBackend(config: AxiosRequestConfig) {
    return axios( {...config, baseURL: BASE_URL } );
}   

