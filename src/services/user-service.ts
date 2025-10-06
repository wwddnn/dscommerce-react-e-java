import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";

// findMe() é uma função de acesso a um recurso protegido do back end, por isso usamos withCredentials
export function findMe() {

    const config : AxiosRequestConfig =  {
        url: "/users/me",
        withCredentials: true  
    }

    return requestBackend(config);
} 