import QueryString from "qs";
import type { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { requestBackend } from "../utils/request";
import type { AxiosRequestConfig } from "axios";
import * as accessTokenRepository from "../localStorage/access-token-repository";

// é a nossa requiisção de login
export function LoginRequest(loginData: CredentialsDTO) {

    // cabeçalho da requisição
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    // corpo da requisição
    const requestBody = QueryString.stringify({ ... loginData, grant_type: "password" });

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers: headers
    }

    return requestBackend(config);
}

// ao fazer o logout vou remover o token do localStorage
// usa o accessTokenRepository pq estruturamos a aplicação em componentes cada um com sua função, quem acessa o localStorage é o accessTokenRepository
export function Logout() {
    accessTokenRepository.remove();
}

// o repository é o responsavel por acessar o localStorage e salvar o token la
export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}

// pega o token do localStorage atraves do repository
export function getAccessToken(): string | null {
    return accessTokenRepository.get();
}
